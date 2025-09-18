import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50 shadow-lg" data-testid="cookie-notice">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground flex-1 mr-4" data-testid="cookie-text">
          We use and allow cookies and similar tools on our websites to enable essential functionalities and to better understand how visitors use our site. Read our{" "}
          <a href="#" className="text-primary underline" data-testid="link-privacy-policy">
            privacy policy
          </a>{" "}
          to learn more.
        </p>
        <Button 
          onClick={() => setIsVisible(false)} 
          className="bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90"
          data-testid="button-accept-cookies"
        >
          Ok
        </Button>
      </div>
    </div>
  );
}
