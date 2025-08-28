import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ActivityLog {
  event_type: string;
  event_data: any;
  page_url?: string;
  user_agent?: string;
  session_id: string;
}

interface PerformanceLog {
  session_id: string;
  page_url: string;
  load_time?: number;
  first_paint?: number;
  largest_contentful_paint?: number;
  cumulative_layout_shift?: number;
  first_input_delay?: number;
  metrics?: any;
}

export const useActivityLogger = () => {
  const sessionId = useRef(crypto.randomUUID());
  const activityQueue = useRef<ActivityLog[]>([]);
  const performanceQueue = useRef<PerformanceLog[]>([]);
  const flushTimeout = useRef<NodeJS.Timeout>();

  const logActivity = useCallback(async (eventType: string, eventData: any) => {
    const log: ActivityLog = {
      event_type: eventType,
      event_data: eventData,
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      session_id: sessionId.current,
    };

    activityQueue.current.push(log);
    scheduleFlush();
  }, []);

  const logPerformance = useCallback(async (metrics: Partial<PerformanceLog>) => {
    const log: PerformanceLog = {
      session_id: sessionId.current,
      page_url: window.location.href,
      ...metrics,
    };

    performanceQueue.current.push(log);
    scheduleFlush();
  }, []);

  const scheduleFlush = useCallback(() => {
    if (flushTimeout.current) {
      clearTimeout(flushTimeout.current);
    }

    flushTimeout.current = setTimeout(() => {
      flushLogs();
    }, 1000); // Batch logs every second
  }, []);

  const flushLogs = useCallback(async () => {
    if (activityQueue.current.length === 0 && performanceQueue.current.length === 0) {
      return;
    }

    try {
      await supabase.functions.invoke('activity-logger', {
        body: {
          log_type: 'batch',
          activity_logs: [...activityQueue.current],
          performance_logs: [...performanceQueue.current],
        },
      });

      activityQueue.current = [];
      performanceQueue.current = [];
    } catch (error) {
      console.error('Failed to flush logs:', error);
    }
  }, []);

  const startComprehensiveLogging = useCallback(() => {
    // Log page load
    logActivity('page_load', {
      url: window.location.href,
      referrer: document.referrer,
      timestamp: Date.now(),
    });

    // Track all clicks
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      logActivity('click', {
        element: target.tagName,
        classes: target.className,
        text: target.textContent?.slice(0, 100),
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      });
    };

    // Track form submissions
    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      logActivity('form_submit', {
        form_id: form.id,
        form_action: form.action,
        form_method: form.method,
        timestamp: Date.now(),
      });
    };

    // Track input changes
    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      logActivity('input_change', {
        input_type: input.type,
        input_name: input.name,
        input_id: input.id,
        value_length: input.value.length,
        timestamp: Date.now(),
      });
    };

    // Track scroll events
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        logActivity('scroll', {
          scroll_y: window.scrollY,
          scroll_x: window.scrollX,
          page_height: document.body.scrollHeight,
          viewport_height: window.innerHeight,
          timestamp: Date.now(),
        });
      }, 250);
    };

    // Track visibility changes
    const handleVisibilityChange = () => {
      logActivity('visibility_change', {
        hidden: document.hidden,
        visibility_state: document.visibilityState,
        timestamp: Date.now(),
      });
    };

    // Track errors
    const handleError = (event: ErrorEvent) => {
      logActivity('error', {
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno,
        timestamp: Date.now(),
      });
    };

    // Track unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logActivity('unhandled_rejection', {
        reason: String(event.reason),
        timestamp: Date.now(),
      });
    };

    // Track performance metrics
    const logPerformanceMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');

        logPerformance({
          load_time: navigation.loadEventEnd - navigation.loadEventStart,
          first_paint: paint.find(p => p.name === 'first-paint')?.startTime,
          largest_contentful_paint: paint.find(p => p.name === 'largest-contentful-paint')?.startTime,
          metrics: {
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp_connect: navigation.connectEnd - navigation.connectStart,
            request_response: navigation.responseEnd - navigation.requestStart,
          },
        });
      }
    };

    // Add event listeners
    document.addEventListener('click', handleClick, true);
    document.addEventListener('submit', handleSubmit, true);
    document.addEventListener('input', handleInput, true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Log performance after page load
    if (document.readyState === 'complete') {
      logPerformanceMetrics();
    } else {
      window.addEventListener('load', logPerformanceMetrics);
    }

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('submit', handleSubmit, true);
      document.removeEventListener('input', handleInput, true);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('load', logPerformanceMetrics);
      
      // Flush remaining logs before cleanup
      flushLogs();
    };
  }, [logActivity, logPerformance, flushLogs]);

  return {
    logActivity,
    logPerformance,
    startComprehensiveLogging,
    sessionId: sessionId.current,
  };
};