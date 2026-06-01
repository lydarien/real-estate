"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const propertyTypes = ["Any Type", "Villa", "Penthouse", "Modern House", "Condo", "Townhouse"];
const bedrooms = ["Any", "1+", "2+", "3+", "4+", "5+"];

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Any Type");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("Any");
  const [focused, setFocused] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type !== "Any Type") params.set("type", type);
    if (minPrice) params.set("minPrice", minPrice.replace(/[^0-9]/g, ""));
    if (maxPrice) params.set("maxPrice", maxPrice.replace(/[^0-9]/g, ""));
    if (beds !== "Any") params.set("beds", beds.replace("+", ""));
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border transition-all duration-300 p-2 ${
            focused ? "border-navy/30 shadow-navy/10" : "border-white/50"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-navy/5 rounded-xl overflow-hidden">
            {/* Location */}
            <div className="lg:col-span-2 bg-white p-4 flex flex-col gap-1.5">
              <label className="font-poppins text-xs font-semibold text-navy/40 uppercase tracking-widest">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="City, neighborhood..."
                className="font-poppins text-sm text-navy placeholder-navy/30 outline-none bg-transparent"
              />
            </div>

            {/* Property Type */}
            <div className="bg-white p-4 flex flex-col gap-1.5">
              <label className="font-poppins text-xs font-semibold text-navy/40 uppercase tracking-widest">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="font-poppins text-sm text-navy bg-transparent outline-none cursor-pointer"
              >
                {propertyTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Min Price */}
            <div className="bg-white p-4 flex flex-col gap-1.5">
              <label className="font-poppins text-xs font-semibold text-navy/40 uppercase tracking-widest">
                Min Price
              </label>
              <input
                type="text"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="$500,000"
                className="font-poppins text-sm text-navy placeholder-navy/30 outline-none bg-transparent"
              />
            </div>

            {/* Max Price */}
            <div className="bg-white p-4 flex flex-col gap-1.5">
              <label className="font-poppins text-xs font-semibold text-navy/40 uppercase tracking-widest">
                Max Price
              </label>
              <input
                type="text"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="$5,000,000"
                className="font-poppins text-sm text-navy placeholder-navy/30 outline-none bg-transparent"
              />
            </div>

            {/* Bedrooms + Search */}
            <div className="bg-white p-2 flex items-stretch gap-2">
              <div className="flex-1 p-2 flex flex-col gap-1.5">
                <label className="font-poppins text-xs font-semibold text-navy/40 uppercase tracking-widest">
                  Beds
                </label>
                <select
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  className="font-poppins text-sm text-navy bg-transparent outline-none cursor-pointer"
                >
                  {bedrooms.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
                className="bg-navy text-white font-poppins font-semibold px-6 rounded-xl text-sm tracking-wide hover:bg-navy/90 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
