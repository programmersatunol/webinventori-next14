"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check login status
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!loginStatus);

    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  // Check if link is active
  const isLinkActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          WebInventori
        </Link>

        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          />
        </button>
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <Link
            href="/"
            className={`${styles.navLink} ${
              isLinkActive("/") ? styles.active : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${
              isLinkActive("/about") ? styles.active : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${styles.navLink} ${
              isLinkActive("/services") ? styles.active : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${styles.navLink} ${
              isLinkActive("/contact") ? styles.active : ""
            }`}
          >
            Contact
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className={`${styles.navLink} ${
                  isLinkActive("/dashboard") ? styles.active : ""
                }`}
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
