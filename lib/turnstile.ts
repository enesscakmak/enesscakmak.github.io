interface TurnstileVerifyResponse {
  "error-codes": string[];
  success: boolean;
  action: string;
  cdata: string;
  hostname?: string;
  challenge_ts: string;
}

class TurnstileError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "TurnstileError";
  }
}

export async function verifyTurnstileToken(token: string, remoteip?: string) {
  try {
    if (!process.env.TURNSTILE_SECRET_KEY) {
      throw new TurnstileError(
        "Turnstile secret key is not configured",
        "MISSING_SECRET",
        500
      );
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          response: token,
          secret: process.env.TURNSTILE_SECRET_KEY,
          remoteip, // Optional: include client IP for additional security
        }),
      }
    );

    if (!response.ok) {
      throw new TurnstileError(
        "Failed to verify token with Turnstile",
        "VERIFICATION_FAILED",
        response.status
      );
    }

    const data: TurnstileVerifyResponse = await response.json();

    // Add additional security checks
    if (!data.success) {
      const errorCodes = data["error-codes"]?.join(", ") || "unknown error";
      throw new TurnstileError(
        `Turnstile verification failed: ${errorCodes}`,
        "INVALID_TOKEN",
        400
      );
    }

    // Optional: Verify token age
    const challengeTs = new Date(data.challenge_ts).getTime();
    const now = Date.now();
    const tokenAge = now - challengeTs;
    const maxAge = 5 * 60 * 1000; // 5 minutes

    if (tokenAge > maxAge) {
      throw new TurnstileError(
        "Token has expired",
        "TOKEN_EXPIRED",
        400
      );
    }

    return {
      success: true,
      hostname: data.hostname,
      challengeTs: data.challenge_ts,
    };
  } catch (error) {
    if (error instanceof TurnstileError) {
      throw error;
    }

    // Handle unexpected errors
    console.error("Turnstile verification error:", error);
    throw new TurnstileError(
      "An unexpected error occurred during verification",
      "INTERNAL_ERROR",
      500
    );
  }
} 