'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data';
import { cn } from '@/utils';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  const regularLinks = navLinks.filter((l) => l.label !== 'Donate');
  const donateLink = navLinks.find((l) => l.label === 'Donate');

  return (
    <>
      <header className={cn(styles.navbar, scrolled && styles.scrolled)} role="banner">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="St. Philip Neri Catholic Church – Home">
            <Image
              src="/images/logo.png"
              alt="St. Philip Neri Catholic Church logo"
              width={56}
              height={68}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>
              St. Philip Neri<br />Catholic<br />Church
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {regularLinks.map((link) =>
              link.children ? (
                <div key={link.label} className={styles.navItem}>
                  <button
                    className={styles.navLink}
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label={`${link.label} submenu`}
                  >
                    {link.label}
                    <span className={styles.chevron} aria-hidden="true">▾</span>
                  </button>
                  <ul className={styles.dropdown} role="menu">
                    {link.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className={styles.dropdownLink}
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={link.label} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={cn(
                      styles.navLink,
                      pathname === link.href && styles.active
                    )}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </div>
              )
            )}
            {donateLink && (
              <Link href={donateLink.href} className={styles.donateBtn}>
                Donate
              </Link>
            )}
          </nav>

          {/* Hamburger */}
          <button
            className={cn(styles.hamburger, menuOpen && styles.open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={cn(styles.mobileMenu, menuOpen && styles.open)}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {regularLinks.map((link) =>
          link.children ? (
            link.children.map((child) => (
              <Link key={child.href} href={child.href} className={styles.mobileLink}>
                {child.label}
              </Link>
            ))
          ) : (
            <Link key={link.href} href={link.href} className={styles.mobileLink}>
              {link.label}
            </Link>
          )
        )}
        {donateLink && (
          <Link href={donateLink.href} className={styles.mobileDonateBtn}>
            DONATE
          </Link>
        )}
      </nav>
    </>
  );
}
