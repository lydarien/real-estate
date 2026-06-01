"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

const featured = properties.filter((p) => p.featured).slice(0, 4);

export default function FeaturedProperties() {
  return (
    <section className="relative bg-warm-white py-24 lg:py-36 overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-10 right-10 font-poppins font-bold text-[180px] text-blue-tint leading-none select-none pointer-events-none hidden lg:block">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-espresso" />
              <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
                Curated Selection
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-navy leading-tight">
              Featured
              <br />
              Properties
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pb-2"
          >
            <p className="text-navy/50 font-poppins max-w-sm leading-relaxed">
              Hand-picked exceptional properties that redefine modern living. Each one a masterclass in design.
            </p>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoRows: "320px" }}
        >
          {/* Tall card — first featured */}
          <div className="lg:row-span-2" style={{ minHeight: "660px" }}>
            <PropertyCard property={featured[0]} tall />
          </div>
          {/* Regular cards */}
          {featured.slice(1).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/properties"
            className="group flex items-center gap-3 border-2 border-navy text-navy font-poppins font-semibold px-8 py-4 rounded text-sm tracking-wide hover:bg-navy hover:text-white transition-all duration-300"
          >
            View All Properties
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
