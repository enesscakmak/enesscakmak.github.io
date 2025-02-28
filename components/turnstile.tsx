"use client";

import { useEffect, useRef, useState } from "react";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: (error: Error) => void;
}

declare global {
  interface Window {
    turnstile: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          theme?: "light" | "dark" | "auto";
          retry?: "auto" | "never";
          "refresh-expired"?: "auto" | "manual";
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

export function Turnstile({ onVerify, onError }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<Error | null>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (scriptLoaded.current) {
          resolve();
          return;
        }

        const turnstileScript = document.createElement("script");
        turnstileScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        turnstileScript.async = true;
        turnstileScript.defer = true;
        
        turnstileScript.onload = () => {
          scriptLoaded.current = true;
          resolve();
        };
        
        turnstileScript.onerror = () => {
          reject(new Error("Failed to load Turnstile script"));
        };

        document.head.appendChild(turnstileScript);
      });
    };

    const initializeTurnstile = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);
        
        await loadScript();
        
        if (!containerRef.current) return;

        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
          callback: onVerify,
          theme: "auto",
          retry: "auto",
          "refresh-expired": "auto",
          "expired-callback": () => {
            // Reset verification state when token expires
            onVerify("");
          },
          "error-callback": () => {
            const error = new Error("Turnstile widget encountered an error");
            setLoadError(error);
            onError?.(error);
          },
        });
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Unknown error occurred");
        setLoadError(err);
        onError?.(err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTurnstile();

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [onVerify, onError]);

  if (loadError) {
    return (
      <div className="p-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-md">
        Failed to load verification widget. Please refresh the page to try again.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4 text-sm text-zinc-500 dark:text-zinc-400">
        Loading verification widget...
      </div>
    );
  }

  return <div ref={containerRef} />;
} 