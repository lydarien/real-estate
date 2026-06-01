"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DBNeighborhood } from "@/lib/supabase";

export default function Neighborhoods({ neighborhoods }: { neighborhoods: DBNeighborhood[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section id="neighborhoods" className="bg-warm-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-espresso" />
              <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
                Explore Areas
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-navy">
              Featured
              <br />
              Neighborhoods
            </h2>
          </motion.div>

          {/* Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-3"
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border-2 border-navy/20 rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border-2 border-navy/20 rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))] pr-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {neighborhoods.map((n, i) => (
          <motion.div
            key={n.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="snap-start shrink-0 w-72 md:w-80 h-96 relative rounded-2xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={n.image_url}
              alt={n.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-poppins font-bold text-white text-xl mb-3">{n.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/50 font-poppins text-xs mb-0.5">Avg. Price</div>
                  <div className="text-white font-poppins font-semibold text-sm">
                    ${(n.avg_price / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white/50 font-poppins text-xs mb-0.5">Listings</div>
                  <div className="text-white font-poppins font-semibold text-sm">{n.listings}</div>
                </div>
              </div>
              {/* Hover bar */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="mt-3 h-0.5 bg-espresso"
              />
            </div>

            {/* Arrow on hover */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/0 group-hover:bg-white/15 rounded-full flex items-center justify-center transition-all duration-300">
              <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
