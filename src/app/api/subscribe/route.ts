import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// ── TODO: replace with verified domain sender before going live ──────────────
// Once you verify a domain in Resend dashboard, update FROM_ADDRESS to:
// "St. Philip Neri <noreply@yourdomain.com>"
const FROM_ADDRESS = "onboarding@resend.dev";

// ── TODO: restore to parish email before going live ──────────────────────────
// const PARISH_EMAIL = process.env.PARISH_EMAIL ?? "stphilip.smethwick@rcaob.org.uk";
const PARISH_EMAIL = "unaben@yahoo.com";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { email } = body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  try {
    // 1. Subscriber confirmation — redirected to your inbox for testing
    const subscriberResult = await resend.emails.send({
      from: FROM_ADDRESS,
      to: PARISH_EMAIL, // TODO: change to `email` in production
      subject: "You're subscribed to St. Philip Neri Parish News 🙏",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2c2c2c;">
          <div style="background: #c8823a; padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; letter-spacing: 1px;">
              ST. PHILIP NERI CATHOLIC CHURCH
            </h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 13px;">
              Smethwick, Birmingham
            </p>
          </div>
          <div style="padding: 32px; background: #fdf5ec;">
            <h2 style="color: #c8823a; margin-top: 0;">Thank you for subscribing!</h2>
            <p>You'll be among the first to hear about our latest news, events, and parish updates.</p>
            <p>May God bless you and your family.</p>
            <p style="margin-top: 32px; font-size: 13px; color: #6b6b6b;">
              If you did not subscribe to this list, please ignore this email.<br/>
              <strong>St. Philip Neri Catholic Church</strong> · Messenger Road, Smethwick, Birmingham B66 3DU
            </p>
          </div>
        </div>
      `,
    });
    console.log("[subscribe] subscriber email result:", subscriberResult);

    // 2. Parish notification — already going to your inbox
    const parishResult = await resend.emails.send({
      from: FROM_ADDRESS,
      to: PARISH_EMAIL,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <p>A new visitor has subscribed to the parish newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><em>Please add them to your mailing list.</em></p>
      `,
    });
    console.log("[subscribe] parish email result:", parishResult);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[subscribe] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}