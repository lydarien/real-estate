"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2,400+", label: "Properties Sold" },
  { value: "98%", label: "Happy Clients" },
  { value: "18 Yrs", label: "Experience" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Animated geometric grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Diagonal accent lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-0 right-0 w-1/2 h-full"
        >
          <svg viewBox="0 0 500 800" className="w-full h-full opacity-10">
            <line x1="500" y1="0" x2="0" y2="800" stroke="white" strokeWidth="1" />
            <line x1="600" y1="0" x2="100" y2="800" stroke="white" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-screen lg:min-h-0 lg:py-32">
          {/* Left — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 lg:gap-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-px w-10 bg-espresso" />
              <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
                Luxury Real Estate
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-poppins font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-white"
            >
              Find Your{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4865a] to-espresso">
                  Perfect
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-1 w-full bg-espresso origin-left"
                />
              </span>
              <br />
              Home
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/60 font-poppins text-lg leading-relaxed max-w-md"
            >
              Discover extraordinary properties in the world&apos;s most desirable neighborhoods.
              Where architecture meets lifestyle — curated exclusively for you.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/properties"
                className="group relative overflow-hidden bg-espresso text-white font-poppins font-semibold px-8 py-4 rounded text-sm tracking-wide hover:bg-espresso/90 transition-all duration-300"
              >
                <span className="relative z-10">Explore Properties</span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              <Link
                href="#how-it-works"
                className="group flex items-center gap-2 border border-white/25 text-white font-poppins font-semibold px-8 py-4 rounded text-sm tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                How It Works
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-poppins font-bold text-2xl text-white">{stat.value}</span>
                  <span className="font-poppins text-xs text-white/50 tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image + floating card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[500px] lg:h-[640px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85"
                alt="Luxury property"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 w-56"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-tint rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-poppins font-bold text-navy text-lg leading-none">247</div>
                  <div className="text-navy/50 text-xs mt-1 font-poppins">New listings this month</div>
                </div>
              </div>
              <div className="mt-3 h-1.5 bg-blue-tint rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="h-full bg-navy rounded-full"
                />
              </div>
            </motion.div>

            {/* Price tag floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute top-6 right-6 bg-espresso text-white rounded-lg px-4 py-2"
            >
              <div className="font-poppins font-bold text-sm">From $980K</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-poppins tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/25 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
