import React, { useState } from "react";
import { motion } from "framer-motion";

import "../../src/FlipCard.css";
import { Sparkles, ScissorsSquare, Headphones, BadgeDollarSign, Clock, CheckCircle, Layers } from "lucide-react";

import {
  FaCheckCircle,
  FaClock,
  FaCogs,
  FaTshirt,
  FaHatCowboy,
  FaShieldAlt,
  FaFileAlt,
  FaFileImage,
  FaFileCode,
  FaFileArchive,
  FaRegObjectGroup,
  FaRegGem,
  FaLayerGroup,
  FaRegLaughWink,
  FaRulerCombined,
  FaAlignCenter,
  FaIdBadge,
  FaFont,
} from "react-icons/fa";
const services = [
  {
    icon: <FaFileAlt className="text-white w-6 h-6" />,
    title: "Raster to Vector Conversion",
    description:
      "We convert low-resolution images (JPEG, PNG, BMP, etc.) into clean, scalable vector formats like AI, EPS, SVG, PDF, or CDR.",
  },
  {
    icon: <FaRegObjectGroup className="text-white w-6 h-6" />,
    title: "Logo Vectorization",
    description:
      "Recreate logos with precise shapes, fonts, and colors—perfect for professional branding and printing.",
  },
  {
    icon: <FaRulerCombined className="text-white w-6 h-6" />,
    title: "Line Art Conversion",
    description:
      "Convert sketches, drawings, or complex graphics into sharp line art suitable for engraving and laser cutting.",
  },
  {
    icon: <FaAlignCenter className="text-white w-6 h-6" />,
    title: "Color Separation",
    description:
      "Spot color and process color separations prepared for vibrant screen printing results.",
  },
  {
    icon: <FaRegGem className="text-white w-6 h-6" />,
    title: "Redrawing & Cleanup",
    description:
      "Fix blurry or low-quality images by manually redrawing them in clean, scalable vector formats.",
  },
  {
    icon: <FaTshirt className="text-white w-6 h-6" />,
    title: "Vector for DTF/DTG Printing",
    description:
      "Custom files optimized for Direct-to-Film and Direct-to-Garment printing with high color accuracy.",
  },
  {
    icon: <FaIdBadge className="text-white w-6 h-6" />,
    title: "Product Mockup Vectoring",
    description:
      "Turn your artwork into clean mockups for apparel, signage, and packaging products.",
  },
];


export default function FlipCardServices() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white via-[#fdfbff] to-gray-100 py-10 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text p-4">
            What we do in Vector Artwork Conversion?
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
            Our Vector Artwork Conversion Service
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4B4FCA] to-pink-600 flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-purple-700 text-white border border-purple-600 rounded-2xl p-6 sm:p-8 shadow-md text-center flex items-center justify-center">
                  <p className="text-base sm:text-lg leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}