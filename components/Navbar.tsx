"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "Neighborhoods", href: "#neighborhoods" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_40px_rgba(27,58,107,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-xs tracking-widest">E</span>
            </div>
            <span
              className={`font-poppins font-bold text-xl tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              ESTATE
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative font-poppins text-sm font-medium tracking-wide group transition-colors duration-300 ${
                    scrolled ? "text-navy/70 hover:text-navy" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px bg-espresso w-0 group-hover:w-full transition-all duration-300 ease-out origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/properties"
              className={`hidden lg:block px-5 py-2.5 rounded font-poppins font-semibold text-sm tracking-wide transition-all duration-300 ${
                scrolled
                  ? "bg-navy text-white hover:bg-navy/90"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
              }`}
            >
              List Property
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy z-40 flex flex-col pt-24 px-8 pb-8"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 hover:text-white font-poppins font-medium text-2xl tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href="/properties"
                className="block text-center bg-espresso text-white font-poppins font-semibold py-4 rounded-lg tracking-wide"
              >
                List Property
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
