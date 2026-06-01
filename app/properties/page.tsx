"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { properties } from "@/data/properties";

const types = ["All", "Villa", "Penthouse", "Modern House", "Condo", "Townhouse"];
const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest First"];

export default function PropertiesPage() {
  const [activeType, setActiveType] = useState("All");
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = properties
    .filter((p) => {
      const matchType = activeType === "All" || p.type === activeType;
      const matchSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return b.id - a.id;
    });

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="w-full h-full">
              <defs>
                <pattern id="prop-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#prop-grid)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-espresso" />
                <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
                  All Properties
                </span>
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-4">
                Find Your Property
              </h1>
              <p className="text-white/50 font-poppins max-w-lg">
                Browse our complete portfolio of luxury properties across the most desirable locations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b border-navy/10 sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Type filters */}
            <div className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all duration-200 ${
                    activeType === t
                      ? "bg-navy text-white"
                      : "bg-blue-tint text-navy/70 hover:bg-navy/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex gap-3 items-center">
              {/* Search */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 bg-blue-tint rounded-full font-poppins text-sm text-navy placeholder-navy/30 outline-none focus:ring-2 focus:ring-navy/20 w-40"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-blue-tint rounded-full font-poppins text-sm text-navy outline-none cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-warm-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-6 font-poppins text-navy/40 text-sm">
              {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((property, i) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="font-poppins font-bold text-6xl text-blue-tint mb-4">∅</div>
                <div className="font-poppins font-bold text-xl text-navy mb-2">No properties found</div>
                <div className="font-poppins text-navy/40">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
