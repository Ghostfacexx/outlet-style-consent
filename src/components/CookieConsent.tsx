import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(CONSENT_KEY);
    if (!hasConsent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-50"
      data-test="cookie-consent"
    >
      <div className="rounded-xl border bg-card text-card-foreground shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-semibold">
              We use cookies
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              We use cookies to improve your experience, analyze site traffic, and personalize content. By continuing to browse, you agree to our use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Button onClick={acceptCookies} data-test="accept-cookies">
              Accept all
            </Button>
            <Button variant="outline" onClick={declineCookies} data-test="decline-cookies">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}