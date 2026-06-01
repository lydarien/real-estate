"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DBTestimonial } from "@/lib/supabase";

export default function Testimonials({ testimonials }: { testimonials: DBTestimonial[] }) {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-espresso" />
            <span className="text-espresso font-poppins text-sm font-semibold tracking-[0.25em] uppercase">
              Client Stories
            </span>
            <div className="h-px w-10 bg-espresso" />
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-navy">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto relative">
          {/* Giant quote mark */}
          <div
            className="absolute -top-8 -left-4 font-poppins font-bold text-[120px] leading-none text-blue-tint select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-espresso fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-poppins text-xl md:text-2xl text-navy/75 leading-relaxed mb-10 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Client */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-tint">
                  <Image src={t.image_url} alt={t.name} width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <div className="font-poppins font-bold text-navy text-base">{t.name}</div>
                  <div className="text-navy/40 font-poppins text-sm">{t.location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-navy/20 rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-6 h-2 bg-navy" : "w-2 h-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-navy/20 rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
