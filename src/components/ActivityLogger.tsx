import { useEffect } from 'react';
import { useActivityLogger } from '@/hooks/useActivityLogger';

export const ActivityLogger = () => {
  const { startComprehensiveLogging } = useActivityLogger();

  useEffect(() => {
    // Start comprehensive logging when component mounts
    const cleanup = startComprehensiveLogging();

    // Return cleanup function
    return cleanup;
  }, [startComprehensiveLogging]);

  // This component renders nothing but enables comprehensive logging
  return null;
};