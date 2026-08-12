import { useState } from 'react';

interface UseLoginFormArgs {
  redirectTo: string;
}

export function useLoginForm({ redirectTo }: UseLoginFormArgs) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.error ?? 'Incorrect password.');
        return;
      }

      window.location.assign(redirectTo);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return { password, setPassword, error, isSubmitting, handleSubmit };
}
