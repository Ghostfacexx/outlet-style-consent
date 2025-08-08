import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/hooks/use-toast";

const DISMISS_KEY = "appPromptNextAllowedAt";
const ONE_DAY = 24 * 60 * 60 * 1000;
const COOLDOWN = 7 * ONE_DAY;

const APPLE_URL = "#"; // TODO: replace with your App Store URL
const ANDROID_URL = "#"; // TODO: replace with your Play Store URL

function getStoreUrl() {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  if (isIOS) return APPLE_URL;
  if (isAndroid) return ANDROID_URL;
  return "#";
}

export default function AppDownloadPrompt() {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const next = Number(localStorage.getItem(DISMISS_KEY) || 0);
    const shouldShow = Date.now() >= next;
    let t: number | undefined;
    if (shouldShow) {
      t = window.setTimeout(() => setVisible(true), 1500);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, []);

  const dismissFor = (ms: number) => {
    localStorage.setItem(DISMISS_KEY, String(Date.now() + ms));
    setVisible(false);
  };

  const onGetApp = () => {
    const url = getStoreUrl();
    if (url === "#") {
      toast({ title: "Store link not configured", description: "Replace URLs in AppDownloadPrompt.tsx" });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    // cooldown after intent
    dismissFor(COOLDOWN);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-50"
      data-test="app-download-prompt"
    >
      <div className="rounded-xl border bg-card text-card-foreground shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-primary" aria-hidden />
              Special offer
            </div>
            <h3 className="mt-2 text-base md:text-lg font-semibold">
              Download the official brand app — get 25% off your first in‑app purchase
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Faster checkout, early drops, and tailored picks. Limited‑time welcome discount.
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="hero" onClick={onGetApp} data-test="get-app">
              Get the app
            </Button>
            <Button variant="outline" onClick={() => dismissFor(COOLDOWN)} data-test="dismiss-app-prompt">
              No thanks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
