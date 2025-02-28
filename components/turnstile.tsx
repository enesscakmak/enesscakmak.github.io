"use client";

import { useEffect, useRef } from "react";

interface TurnstileProps {
  onVerify: (token: string) => void;
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
        }
      ) => void;
    };
  }
}

export function Turnstile({ onVerify }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const turnstileScript = document.createElement("script");
    turnstileScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    turnstileScript.async = true;
    turnstileScript.defer = true;
    document.head.appendChild(turnstileScript);

    turnstileScript.onload = () => {
      window.turnstile.render(containerRef.current!, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
        callback: onVerify,
        theme: "auto",
      });
    };

    return () => {
      document.head.removeChild(turnstileScript);
    };
  }, [onVerify]);

  return <div ref={containerRef} />;
} 