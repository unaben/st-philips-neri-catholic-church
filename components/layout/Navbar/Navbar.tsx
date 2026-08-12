"use client";

import Link from "next/link";
import cn from "classnames";
import { navLinks, donateLink } from "@/data";
import { ChurchCrest } from "@/components/Icons/ChurchCrest";
import useNavbar from "./hooks/useNavbar";
import type { NavLink } from "@/types";
import styles from "./Navbar.module.css";

const priorityLinks = navLinks.filter((l) => l.priority);
const overflowLinks = navLinks.filter((l) => !l.priority);

export default function Navbar() {
  const {
    scrolled,
    menuOpen,
    setMenuOpen,
    mobileOpenDropdown,
    toggleMobileDropdown,
    closeMenu,
    openDropdown,
    openDesktopDropdown,
    closeDesktopDropdown,
    pathname,
  } = useNavbar();

  const renderNavItem = (link: NavLink) =>
    link.children ? (
      <div
        key={link.label}
        className={cn(styles.navItem, {
          [styles.open]: openDropdown === link.label,
        })}
        onMouseEnter={() => openDesktopDropdown(link.label)}
        onMouseLeave={closeDesktopDropdown}
      >
        <button
          className={cn(styles.navLink, {
            [styles.active]: link.children.some((c) => pathname === c.href),
          })}
          aria-haspopup="true"
          aria-expanded={openDropdown === link.label}
          aria-label={`${link.label} submenu`}
          onClick={(e) => e.currentTarget.blur()}
        >
          {link.label}
          <span className={styles.chevron} aria-hidden="true">
            ▾
          </span>
        </button>
        <ul className={styles.dropdown} role="menu">
          {link.children.map((child) => (
            <li key={child.href} role="none">
              <Link
                href={child.href}
                className={cn(styles.dropdownLink, {
                  [styles.dropdownLinkActive]: pathname === child.href,
                })}
                role="menuitem"
                onClick={(e) => {
                  closeDesktopDropdown();
                  e.currentTarget.blur();
                }}
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
          className={cn(styles.navLink, {
            [styles.active]: pathname === link.href,
          })}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {link.label}
        </Link>
      </div>
    );

  const renderMobileItem = (link: NavLink) =>
    link.children ? (
      <div key={link.label} className={styles.mobileGroup}>
        <button
          className={styles.mobileGroupBtn}
          onClick={() => toggleMobileDropdown(link.label)}
          aria-expanded={mobileOpenDropdown === link.label}
        >
          {link.label}
          <span
            className={cn(styles.mobileChevron, {
              [styles.mobileChevronOpen]: mobileOpenDropdown === link.label,
            })}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>
        {mobileOpenDropdown === link.label && (
          <div className={styles.mobileDropdown}>
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={styles.mobileSubLink}
                onClick={closeMenu}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        key={link.href}
        href={link.href}
        className={styles.mobileLink}
        onClick={closeMenu}
      >
        {link.label}
      </Link>
    );

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
            {priorityLinks.map(renderNavItem)}
            <div className={styles.overflowLinks}>
              {overflowLinks.map(renderNavItem)}
            </div>
            <Link
              href={donateLink.href}
              className={styles.donateBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {donateLink.label}
            </Link>
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
        <div className={styles.mobileOnlyPriority}>
          {priorityLinks.map(renderMobileItem)}
        </div>
        {overflowLinks.map(renderMobileItem)}
        <Link
          href={donateLink.href}
          className={styles.mobileDonateBtn}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          DONATE
        </Link>
      </nav>
    </>
  );
}
