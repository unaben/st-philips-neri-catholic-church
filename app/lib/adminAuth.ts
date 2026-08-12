export const ADMIN_SESSION_COOKIE = "admin_session";
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not set. Add it to your environment before using the admin login."
    );
  }
  return secret;
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function sign(payload: string): Promise<string> {
  const key = await importHmacKey(getSessionSecret());
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload)
  );
  return bufferToHex(signatureBuffer);
}

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/** Constant-time string comparison, so signature/password checks can't be timed. */
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

/** Creates a `<expiry>.<hmac>` token to store in the session cookie. */
export async function createSessionToken(): Promise<string> {
  const expiresAt = Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000;
  const payload = String(expiresAt);
  const signature = await sign(payload);
  return `${payload}.${signature}`;
}

/** Verifies the token's signature and that it hasn't expired. */
export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expectedSignature = await sign(payload);
  if (!timingSafeEqual(expectedSignature, signature)) return false;

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  return true;
}
