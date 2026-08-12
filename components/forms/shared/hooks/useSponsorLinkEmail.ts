import { FormEvent, useState } from 'react';
import type { Sacrament } from '@/types/registration';

interface UseSponsorLinkEmailArgs {
  sacrament: Sacrament;
  enrolmentId: string;
  nameOfChild: string;
}

export function useSponsorLinkEmail({ sacrament, enrolmentId, nameOfChild }: UseSponsorLinkEmailArgs) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function sendLink(event: FormEvent) {
    event.preventDefault();
    setStatus('sending');
    setError(null);

    try {
      const response = await fetch('/api/registration/send-sponsor-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nameOfChild, enrolmentId, sacrament }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? 'Could not send the email. Please try again.');
      }

      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return { email, setEmail, status, error, sendLink };
}
