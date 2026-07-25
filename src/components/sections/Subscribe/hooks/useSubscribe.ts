'use client';

import { useState, useCallback } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseSubscribeReturn {
  email: string;
  status: Status;
  errorMsg: string;
  handleEmailChange: (value: string) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
}

const useSubscribe = (): UseSubscribeReturn => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    setErrorMsg('');
    if (status === 'error') setStatus('idle');
  }, [status]);

  const handleSubmit = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Failed to subscribe. Please try again.'
      );
    }
  }, [email]);

  const reset = useCallback(() => {
    setEmail('');
    setStatus('idle');
    setErrorMsg('');
  }, []);

  return { email, status, errorMsg, handleEmailChange, handleSubmit, reset };
};

export default useSubscribe;