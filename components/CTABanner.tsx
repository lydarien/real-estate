"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-navy" />
        <div className="w-1/2 bg-espresso" />
      </div>
      {/* Diagonal divider */}
      <div className="absolute inset-0 flex items-stretch">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="45,0 55,0 50,100 40,100" fill="white" opacity="0.05" />
        </svg>
      </div>

      {/* CSS noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Navy side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-white/40" />
              <span className="text-white/60 font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
                Ready to Begin?
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              Find Your
              <br />
              <span className="text-white/60">Perfect</span>
              <br />
              Home Today
            </h2>
            <p className="text-white/60 font-poppins leading-relaxed max-w-sm">
              Join thousands of satisfied clients who trusted ESTATE to find their dream property.
              Your perfect home is waiting.
            </p>
          </motion.div>

          {/* Right — Espresso side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Expert Advisors", icon: "👤" },
                { label: "Premium Listings", icon: "🏛️" },
                { label: "Market Insights", icon: "📊" },
                { label: "Full Support", icon: "🤝" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-poppins font-semibold text-white text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/properties"
                className="flex-1 text-center bg-white text-navy font-poppins font-bold px-8 py-4 rounded text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
              >
                Browse Properties
              </Link>
              <Link
                href="#contact"
                className="flex-1 text-center border-2 border-white/40 text-white font-poppins font-bold px-8 py-4 rounded text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
