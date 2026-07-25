import type { Metadata } from 'next';
import Link from 'next/link';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import styles from './register.module.css';


export const metadata: Metadata = {
  title: 'Parish Registration',
  description:
    'Register with St. Philip Neri Catholic Church, Smethwick. Join our parish community today.',
};

 function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Page header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Welcome to our parish</span>
          <h1 className={styles.heading}>Parish Registration</h1>
          <p className={styles.subheading}>
            We&apos;re delighted you&apos;d like to join our community. Please
            fill in the form below and we&apos;ll be in touch to welcome you
            personally.
          </p>
        </header>

        {/* Form */}
        <RegistrationForm />

        {/* Back link */}
        <p style={{ textAlign: 'center', marginTop: 'var(--space-xl)', fontSize: '0.9rem' }}>
          <Link
            href="/"
            style={{ color: 'var(--color-text-muted)', textDecoration: 'underline' }}
          >
            ← Back to Home
          </Link>
        </p>

      </div>
    </div>
  );
}

export default RegisterPage