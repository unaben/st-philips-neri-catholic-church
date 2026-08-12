import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { sendResendEmail } from "@/components/forms/shared/resendSend";
import { isValidEmail, isRequired } from "@/components/forms/shared/validation";
import { renderEmailShell } from "@/components/forms/shared/emailTemplate";
import type { Sacrament } from "@/types/registration";

/**
 * Emails a link back to the Godparent/Sponsor form for someone who
 * submitted an enrolment form (Confirmation or First Holy Communion) but
 * doesn't have the sponsor's details to hand yet. Same `FROM_EMAIL`
 * pattern as the other routes; the link itself is always logged
 * server-side too so this is testable without Resend delivering to an
 * arbitrary sponsor inbox while sandboxed.
 */

const FROM_ADDRESS = "onboarding@resend.dev";
const ACCENT = "#7a1f2b";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const SACRAMENT_LABEL: Record<Sacrament, string> = {
  confirmation: "Confirmation",
  firstHolyCommunion: "First Holy Communion",
};

interface Body {
  email?: unknown;
  nameOfChild?: unknown;
  enrolmentId?: unknown;
  sacrament?: unknown;
}

export async function POST(req: NextRequest) {
  const body: Body = await req.json();

  const email = typeof body.email === "string" ? body.email : "";
  const nameOfChild =
    typeof body.nameOfChild === "string" ? body.nameOfChild : "";
  const enrolmentId =
    typeof body.enrolmentId === "string" ? body.enrolmentId : "";
  const sacrament =
    body.sacrament === "confirmation" || body.sacrament === "firstHolyCommunion"
      ? body.sacrament
      : null;

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }
  if (!isRequired(nameOfChild) || !isRequired(enrolmentId) || !sacrament) {
    return NextResponse.json(
      { error: "Missing enrolment details." },
      { status: 422 }
    );
  }

  const sacramentLabel = SACRAMENT_LABEL[sacrament];
  const sponsorFormLink = `${SITE_URL}/forms/sponsor-form?sacrament=${sacrament}&candidate=${encodeURIComponent(
    nameOfChild
  )}&enrolmentId=${encodeURIComponent(enrolmentId)}`;

  // Always logged, same reason as the sandbox-restricted confirmation
  // emails elsewhere: lets the whole flow be tested end-to-end without a
  // verified sending domain.
  console.log(`[send-sponsor-link] link for ${email}:\n${sponsorFormLink}`);

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await sendResendEmail(
      resend,
      {
        from: FROM_ADDRESS,
        to: email,
        subject: `Sponsor Form link — ${nameOfChild}'s ${sacramentLabel}`,
        html: renderEmailShell({
          subtitle: "Smethwick, Birmingham",
          accentColor: ACCENT,
          bodyHtml: `
            <h2 style="color:${ACCENT};margin-top:0;">Hi,</h2>
            <p>Here&rsquo;s the link back to the Godparent/Sponsor form for <strong>${nameOfChild}</strong>&rsquo;s ${sacramentLabel} registration.</p>
            <p><a href="${sponsorFormLink}" style="color:${ACCENT};">${sponsorFormLink}</a></p>
            <p style="font-size:13px;color:#6b6255;">You're welcome to fill it in online, or print it and return it to the parish office instead. This form is required to complete the registration.</p>
          `,
        }),
      },
      "sponsor-form:link-email"
    );
  } catch (err) {
    // Best-effort, same as the other confirmation emails - the link is
    // already logged above, and this feature is a convenience on top of
    // the "fill it in now" / "print a blank copy" paths, not the only way
    // to reach the sponsor form.
    console.error(
      "[send-sponsor-link] email failed (non-fatal, likely Resend sandbox restriction):",
      err
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
