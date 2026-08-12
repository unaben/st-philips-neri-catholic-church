import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { sendResendEmail } from '@/components/forms/shared/resendSend';
import { FirstHolyCommunionFormData } from '@/components/forms/FirstHolyCommunion/FirstHolyCommunion.types';
import { validateFirstHolyCommunion } from '@/components/forms/FirstHolyCommunion/FirstHolyCommunion.utils';
import { hasErrors } from '@/components/forms/shared/validation';
import { renderCallout, renderDetailRow, renderDetailTable, renderEmailShell } from '@/components/forms/shared/emailTemplate';
import { registrationStore } from '@/lib/storage/registrationStore';
import { generateReferenceId } from '@/components/forms/shared/submissionId';

// ── TODO: replace with verified domain sender before going live ──────────────
// Once you verify a domain in Resend, set FROM_EMAIL in .env to something like
// "St. Philip Neri <noreply@yourdomain.com>". Resend's shared sandbox domain
// (onboarding@resend.dev) can only send to the account owner's own inbox.
// const FROM_ADDRESS = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';
const FROM_ADDRESS = 'onboarding@resend.dev';

// ── TODO: once a domain is verified, PARISH_EMAIL is the real inbox to use ───
// Until then, mail can only land in NEXT_PUBLIC_DEV_EMAIL (the Resend account
// owner's inbox), so that's the fallback here.
// const PARISH_EMAIL =
//   process.env.PARISH_EMAIL ?? process.env.NEXT_PUBLIC_DEV_EMAIL ?? 'stphilip.smethwick@rcaob.org.uk';
const PARISH_EMAIL = 'unaben@yahoo.com';

const ACCENT = '#7a1f2b';

const commitmentsConfirmed = (body: FirstHolyCommunionFormData) =>
  body.agreeToEnrol && body.agreeToWorkbook && body.agreeToAttendSessions && body.agreeToAccompany;

export async function POST(req: NextRequest) {
  const body: FirstHolyCommunionFormData = await req.json();

  // Re-validate server-side - never trust the client alone
  const errors = validateFirstHolyCommunion(body);
  if (hasErrors(errors)) {
    return NextResponse.json({ error: 'Validation failed.', fields: errors }, { status: 422 });
  }

  // A short reference built from this submission's own phone/postcode plus
  // a random suffix - shown back to the parent, included in both emails,
  // and used as the enrolment's id so the same reference appears in the
  // sponsor-form link. Persisting the (lightweight) record is what lets
  // the sponsor form, submitted separately and possibly days later, be
  // linked back to this enrolment.
  const referenceId = generateReferenceId({ phone: body.phone, address: body.address });
  const enrolment = await registrationStore.createEnrolment({
    id: referenceId,
    sacrament: 'firstHolyCommunion',
    nameOfChild: body.nameOfChild,
    email: body.email,
  });

  const resend = new Resend(process.env.RESEND_API_KEY);

  // 1. Confirmation to the parent/guardian.
  // Best-effort: in Resend's sandbox mode this will fail for anyone other
  // than the account owner's own inbox (unaben@yahoo.com), since no domain
  // is verified yet. That's expected right now, so we log and move on
  // instead of failing the whole submission over it.
  try {
    await sendResendEmail(resend, {
      from: FROM_ADDRESS,
      to: body.email,
      subject: 'First Holy Communion Enrolment — St. Philip Neri Catholic Church',
      html: renderEmailShell({
        subtitle: 'Smethwick, Birmingham',
        accentColor: ACCENT,
        bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">Dear Parent/Guardian,</h2>
          <p>Thank you for enrolling <strong>${body.nameOfChild}</strong> to prepare for First Holy Communion. We have received your enrolment form.</p>
          <p>A member of our sacramental preparation team will be in touch with dates for the required sessions.</p>
          ${renderCallout(
            `<p style="margin:0 0 8px;font-size:13px;color:#6b6255;text-transform:uppercase;letter-spacing:1px;">Enrolment summary</p>
             ${renderDetailTable(
               [
                 renderDetailRow('Child', body.nameOfChild),
                 renderDetailRow('Date of birth', body.dateOfBirth),
                 renderDetailRow('Church attended for Mass', body.churchAttendMass),
                 renderDetailRow('Signed by', body.signature),
                 renderDetailRow('Reference', referenceId),
               ].join('')
             )}`,
            ACCENT
          )}
          <p style="font-size:13px;color:#6b6255;">If you did not submit this enrolment, please contact the parish office directly.</p>
        `,
      }),
    }, 'first-holy-communion:confirmation');
  } catch (err) {
    console.error(
      '[first-holy-communion] confirmation email failed (non-fatal, likely Resend sandbox restriction):',
      err
    );
  }

  // 2. Full enrolment to the parish office. This one matters — if it fails,
  // the parish never sees the enrolment, so it's still a hard error.
  try {
    await sendResendEmail(resend, {
      from: FROM_ADDRESS,
      to: PARISH_EMAIL,
      subject: `New First Holy Communion Enrolment — ${body.nameOfChild}`,
      html: renderEmailShell({
        accentColor: ACCENT,
        bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">New First Holy Communion Enrolment</h2>

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;">Child's details</h3>
          ${renderDetailTable(
            [
              renderDetailRow('Reference', referenceId),
              renderDetailRow('Name of child', body.nameOfChild),
              renderDetailRow('Address', body.address),
              renderDetailRow('Phone', body.phone),
              renderDetailRow('Email', body.email),
              renderDetailRow('Date of birth', body.dateOfBirth),
              renderDetailRow('Age now', body.ageNow),
              renderDetailRow('School', body.school),
            ].join('')
          )}

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;margin-top:24px;">Baptism</h3>
          ${renderDetailTable(
            [
              renderDetailRow('Church attended for Mass', body.churchAttendMass),
              renderDetailRow('Baptised', body.isChildBaptised),
              renderDetailRow('Church of baptism', body.churchOfBaptism),
              renderDetailRow('Address of baptism', body.addressOfBaptism),
              renderDetailRow('Date of baptism', body.dateOfBaptism),
            ].join('')
          )}

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;margin-top:24px;">Parents</h3>
          ${renderDetailTable(
            [
              renderDetailRow("Father's name", body.fathersName),
              renderDetailRow("Father's religion", body.fathersReligion),
              renderDetailRow("Mother's name", body.mothersName),
              renderDetailRow("Mother's religion", body.mothersReligion),
            ].join('')
          )}

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;margin-top:24px;">Contract</h3>
          ${renderDetailTable(
            [
              renderDetailRow('All four commitments confirmed', commitmentsConfirmed(body)),
              renderDetailRow('Signed (Parent/Guardian)', body.signature),
              renderDetailRow('Date', body.date),
            ].join('')
          )}

          <p style="font-size:12px;color:#8a8375;margin-top:24px;">Submitted: ${new Date().toLocaleString('en-GB')}</p>
        `,
      }),
    }, 'first-holy-communion:notification');

    return NextResponse.json({ success: true, enrolment }, { status: 200 });
  } catch (err) {
    console.error('[first-holy-communion] Resend error:', err);
    return NextResponse.json({ error: 'Failed to send this enrolment.' }, { status: 500 });
  }
}