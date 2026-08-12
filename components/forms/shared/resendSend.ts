import type { Resend } from 'resend';

interface SendArgs {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

function resolveRecipient(args: SendArgs): SendArgs {
  const devEmail = process.env.NEXT_PUBLIC_DEV_EMAIL;
  if (process.env.NODE_ENV === 'production' || !devEmail || args.to === devEmail) return args;

  return { ...args, to: devEmail, subject: `[dev → ${args.to}] ${args.subject}` };
}

export async function sendResendEmail(resend: Resend, rawArgs: SendArgs, context: string) {
  const args = resolveRecipient(rawArgs);
  const { data, error } = await resend.emails.send(args);

  if (error) {
    console.error(`[${context}] Resend rejected this email:`, error);
    throw new Error(`Resend rejected the "${context}" email: ${error.message}`);
  }

  return data;
}