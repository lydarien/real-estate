"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "Neighborhoods", href: "#neighborhoods" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = [
  { icon: "📍", text: "123 Park Avenue, New York, NY 10017" },
  { icon: "📞", text: "+1 (212) 555-0198" },
  { icon: "✉️", text: "hello@estate.com" },
];

const socialLinks = [
  { label: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "Twitter/X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn", href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) return;
    setSubStatus("loading");
    const supabase = createClient();
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    if (!error) {
      setSubStatus("success");
      setEmail("");
    } else if (error.code === "23505") {
      setSubStatus("duplicate");
    } else {
      setSubStatus("error");
    }
  };
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-espresso rounded flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-xs tracking-widest">E</span>
              </div>
              <span className="font-poppins font-bold text-xl tracking-[0.2em] text-white">ESTATE</span>
            </Link>
            <p className="text-white/40 font-poppins text-sm leading-relaxed mb-6">
              Redefining luxury real estate. Where exceptional properties meet extraordinary people.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:bg-espresso hover:border-espresso transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-poppins font-bold text-sm tracking-widest uppercase text-white/60 mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white font-poppins text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-poppins font-bold text-sm tracking-widest uppercase text-white/60 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-white/50 font-poppins text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-poppins font-bold text-sm tracking-widest uppercase text-white/60 mb-5">
              Stay Updated
            </h4>
            <p className="text-white/40 font-poppins text-sm mb-5 leading-relaxed">
              Get exclusive listings and market insights delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSubStatus("idle"); }}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="your@email.com"
                disabled={subStatus === "success"}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 font-poppins text-sm outline-none focus:border-espresso transition-colors duration-200 disabled:opacity-50"
              />
              <motion.button
                whileHover={{ scale: subStatus === "success" ? 1 : 1.02 }}
                whileTap={{ scale: subStatus === "success" ? 1 : 0.98 }}
                onClick={handleSubscribe}
                disabled={subStatus === "loading" || subStatus === "success"}
                className="bg-espresso text-white font-poppins font-semibold text-sm py-3 rounded-lg hover:bg-espresso/90 transition-colors duration-300 disabled:opacity-70"
              >
                {subStatus === "loading" ? "Subscribing..." : subStatus === "success" ? "✓ Subscribed!" : "Subscribe"}
              </motion.button>
              {subStatus === "duplicate" && (
                <p className="text-white/40 font-poppins text-xs">You&apos;re already subscribed!</p>
              )}
              {subStatus === "error" && (
                <p className="text-red-400 font-poppins text-xs">Something went wrong. Please try again.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-poppins text-xs">
            © 2026 ESTATE. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 font-poppins text-xs transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
