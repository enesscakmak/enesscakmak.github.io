interface TurnstileVerifyResponse {
  "error-codes": string[];
  success: boolean;
  action: string;
  cdata: string;
}

export async function verifyTurnstileToken(token: string) {
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
      }),
    }
  );

  const data: TurnstileVerifyResponse = await response.json();
  return data.success;
} 