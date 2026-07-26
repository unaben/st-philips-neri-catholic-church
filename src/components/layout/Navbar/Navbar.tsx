"use client";

import Link from "next/link";
import cn from "classnames";
import { navLinks, donateLink } from "@/data";
import { ChurchCrest } from "@/components/Icons/ChurchCrest";
import useNavbar from "./hooks/useNavbar";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const {
    scrolled,
    menuOpen,
    setMenuOpen,
    openDropdown,
    toggleDropdown,
    closeDropdown,
    pathname,
  } = useNavbar();

  return (
    <>
      <header
        className={cn(styles.navbar, { [styles.scrolled]: scrolled })}
        role="banner"
      >
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="St. Philip Neri Catholic Church — Home"
          >
            <div className={styles.logoCrest} aria-hidden="true">
              <ChurchCrest position="nav" />
            </div>
            <span className={styles.logoText}>
              St. Philip Neri
              <br />
              Catholic
              <br />
              Church
            </span>
          </Link>
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className={styles.navItem} data-nav-item>
                  <button
                    className={cn(styles.navLink, {
                      [styles.navLinkActive]: openDropdown === link.label,
                    })}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    aria-label={`${link.label} submenu`}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span
                      className={cn(styles.chevron, {
                        [styles.chevronOpen]: openDropdown === link.label,
                      })}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>
                  {openDropdown === link.label && (
                    <ul className={styles.dropdown} role="menu">
                      {link.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            className={styles.dropdownLink}
                            role="menuitem"
                            onClick={closeDropdown}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div key={link.label} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={cn(styles.navLink, {
                      [styles.active]: pathname === link.href,
                    })}
                    aria-current={pathname === link.href ? "page" : undefined}
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
          <button
            className={cn(styles.hamburger, { [styles.open]: menuOpen })}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
      <nav
        id="mobile-menu"
        className={cn(styles.mobileMenu, { [styles.open]: menuOpen })}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) =>
          link.children ? (
            link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={styles.mobileLink}
              >
                {child.label}
              </Link>
            ))
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
            >
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
