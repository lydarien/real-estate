"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Property } from "@/data/properties";

interface Props {
  property: Property;
  tall?: boolean;
}

export default function PropertyCard({ property, tall = false }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        tall ? "row-span-2" : ""
      }`}
      style={{ height: tall ? "100%" : "320px", minHeight: tall ? "640px" : "320px" }}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

      {/* Blue accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-espresso origin-bottom"
      />

      {/* Price badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-white/95 backdrop-blur-sm text-navy font-poppins font-bold text-sm px-3 py-1.5 rounded-lg shadow-lg">
          ${property.price.toLocaleString()}
        </div>
      </div>

      {/* Type badge */}
      <div className="absolute top-4 left-4">
        <div className="bg-navy/80 backdrop-blur-sm text-white font-poppins text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3.5 h-3.5 text-espresso shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-white/70 font-poppins text-xs">{property.neighborhood} · {property.city}</span>
        </div>
        <h3 className="font-poppins font-bold text-white text-xl mb-3 leading-tight">{property.title}</h3>
        <div className="flex items-center gap-4 text-white/60 font-poppins text-xs">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7z" />
            </svg>
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v1h14V5a2 2 0 00-2-2H5zm12 4H3v2a4 4 0 004 4h6a4 4 0 004-4V7z" clipRule="evenodd" />
            </svg>
            {property.bathrooms} Baths
          </span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </motion.div>
  );
}
