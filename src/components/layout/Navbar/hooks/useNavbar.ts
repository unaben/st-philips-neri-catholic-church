import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const useNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    setMobileOpenDropdown(null);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = useCallback((label: string) => {
    setMobileOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileOpenDropdown(null);
  }, []);

  const openDesktopDropdown = useCallback((label: string) => {
    setOpenDropdown(label);
  }, []);

  const closeDesktopDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return {
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
  };
};

export default useNavbar;