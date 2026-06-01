"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { createClient } from "@/lib/supabase/client";
import { DBProperty } from "@/lib/supabase/types";

const types = ["All", "Villa", "Penthouse", "Modern House", "Condo", "Townhouse"];
const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest First"];

export default function PropertiesContent() {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState<DBProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState(searchParams.get("type") ?? "All");
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("location") ?? "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");
  const [minBeds] = useState(searchParams.get("beds") ?? "");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProperties = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    let query = supabase.from("properties").select("*");

    if (activeType !== "All") query = query.eq("type", activeType);
    if (minPrice) query = query.gte("price", Number(minPrice));
    if (maxPrice) query = query.lte("price", Number(maxPrice));
    if (minBeds) query = query.gte("bedrooms", Number(minBeds));
    if (searchQuery) {
      query = query.or(
        `city.ilike.%${searchQuery}%,neighborhood.ilike.%${searchQuery}%,title.ilike.%${searchQuery}%`
      );
    }

    if (sortBy === "Price: Low to High") query = query.order("price", { ascending: true });
    else if (sortBy === "Price: High to Low") query = query.order("price", { ascending: false });
    else query = query.order("id", { ascending: false });

    const { data } = await query;
    setProperties((data as DBProperty[]) ?? []);
    setLoading(false);
  }, [activeType, sortBy, searchQuery, minPrice, maxPrice, minBeds]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return (
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-espresso" />
              <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">All Properties</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-4">Find Your Property</h1>
            <p className="text-white/50 font-poppins max-w-lg">
              Browse our complete portfolio of luxury properties across the most desirable locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-navy/10 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all duration-200 ${
                  activeType === t ? "bg-navy text-white" : "bg-blue-tint text-navy/70 hover:bg-navy/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="City or neighborhood..."
                className="pl-9 pr-4 py-2 bg-blue-tint rounded-full font-poppins text-sm text-navy placeholder-navy/30 outline-none focus:ring-2 focus:ring-navy/20 w-48"
              />
            </div>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min $"
              className="px-4 py-2 bg-blue-tint rounded-full font-poppins text-sm text-navy placeholder-navy/30 outline-none w-28"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max $"
              className="px-4 py-2 bg-blue-tint rounded-full font-poppins text-sm text-navy placeholder-navy/30 outline-none w-28"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-blue-tint rounded-full font-poppins text-sm text-navy outline-none cursor-pointer"
            >
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-warm-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 bg-navy/5 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              <div className="mb-6 font-poppins text-navy/40 text-sm">
                {properties.length} {properties.length === 1 ? "property" : "properties"} found
              </div>
              {properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property, i) => (
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}
