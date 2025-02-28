import { verifyTurnstileToken } from "@/lib/turnstile";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

// Simple in-memory rate limiting
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

interface RateLimit {
  count: number;
  firstRequest: number;
}

const rateLimits = new Map<string, RateLimit>();

// Clean up old rate limit entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [ip, limit] of rateLimits.entries()) {
    if (now - limit.firstRequest > RATE_LIMIT_DURATION) {
      rateLimits.delete(ip);
    }
  }
}, RATE_LIMIT_DURATION);

function getRateLimitResponse(ip: string): NextResponse | null {
  const now = Date.now();
  const rateLimit = rateLimits.get(ip);

  if (!rateLimit) {
    rateLimits.set(ip, { count: 1, firstRequest: now });
    return null;
  }

  if (now - rateLimit.firstRequest > RATE_LIMIT_DURATION) {
    rateLimits.set(ip, { count: 1, firstRequest: now });
    return null;
  }

  if (rateLimit.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  rateLimit.count++;
  return null;
}

export async function POST(request: Request) {
  try {
    // Get client IP
    const forwardedFor = headers().get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    // Check rate limit
    const rateLimitResponse = getRateLimitResponse(ip);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    // Validate request body
    const body = await request.json();
    const { token } = body;

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "Invalid request: token is required" },
        { status: 400 }
      );
    }

    // Verify token
    const result = await verifyTurnstileToken(token, ip);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Turnstile verification error:", error);

    // Handle known error types
    if (error.name === "TurnstileError") {
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 