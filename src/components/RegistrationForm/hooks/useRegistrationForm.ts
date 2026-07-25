'use client';

import { useState, useCallback, ChangeEvent } from 'react';
import { RegistrationFormData, RegistrationFormErrors } from '../RegistrationForm.types';
import { validateRegistrationForm, hasErrors } from '../RegistrationForm.utils';

const INITIAL_STATE: RegistrationFormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  dateOfBirth: '',
  nationality: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  postCode: '',
  alreadyCatholic: null,
  previousParish: '',
  reasonForRegistering: '',
  heardAboutUs: '',
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function useRegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<RegistrationFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationFormData, boolean>>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
      setErrors((prev) => {
        if (!prev[name as keyof RegistrationFormData]) return prev;
        const next = { ...prev };
        delete next[name as keyof RegistrationFormData];
        return next;
      });
    },
    []
  );

  const handleCatholicChange = useCallback((value: boolean) => {
    setFormData((prev) => ({ ...prev, alreadyCatholic: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.alreadyCatholic;
      return next;
    });
  }, []);

  const handleBlur = useCallback(
    (name: keyof RegistrationFormData) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const allErrors = validateRegistrationForm(formData);
      setErrors((prev) => ({
        ...prev,
        ...(allErrors[name] ? { [name]: allErrors[name] } : {}),
      }));
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Touch all fields so errors show
      const allTouched = Object.keys(INITIAL_STATE).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<keyof RegistrationFormData, boolean>
      );
      setTouched(allTouched);

      const validationErrors = validateRegistrationForm(formData);
      setErrors(validationErrors);

      if (hasErrors(validationErrors)) {
        const firstErrorEl = document.querySelector('[data-error="true"]');
        firstErrorEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      setSubmitStatus('loading');
      setServerError('');

      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error ?? 'Submission failed. Please try again.');
        }

        setSubmitStatus('success');
      } catch (err) {
        setSubmitStatus('error');
        setServerError(
          err instanceof Error ? err.message : 'Something went wrong. Please try again.'
        );
      }
    },
    [formData]
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setTouched({});
    setSubmitStatus('idle');
    setServerError('');
  }, []);

  const showError = useCallback(
    (name: keyof RegistrationFormData) => touched[name] && !!errors[name],
    [touched, errors]
  );

  return {
    formData,
    errors,
    touched,
    submitStatus,
    serverError,
    handleChange,
    handleCatholicChange,
    handleBlur,
    handleSubmit,
    reset,
    showError,
  };
}