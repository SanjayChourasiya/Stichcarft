import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTshirt,
  FaHatCowboy,
  FaLayerGroup,
  FaRulerCombined,
  FaRegGem,
  FaRegObjectGroup,
  FaFont,
  FaIdBadge,
} from "react-icons/fa";
import "../../src/FlipCard.css";

const services = [
  {
    icon: <FaTshirt className="text-white w-6 h-6" />,
    title: "Logo Digitizing",
    description: "Transform your business logo into a high-quality stitch file for t-shirts, caps, and branding needs.",
  },
  {
    icon: <FaHatCowboy className="text-white w-6 h-6" />,
    title: "Cap Digitizing",
    description: "Digitizing tailored for caps with curved surfaces—ensures crisp results even on structured hats.",
  },
  {
    icon: <FaLayerGroup className="text-white w-6 h-6" />,
    title: "3D Puff Digitizing",
    description: "Raised embroidery with bold satin stitches, giving depth and impact to your designs.",
  },
  {
    icon: <FaRulerCombined className="text-white w-6 h-6" />,
    title: "Left Chest & Sleeve",
    description: "Perfectly digitized small-size designs for chest logos, pocket areas, and shirt sleeves.",
  },
  {
    icon: <FaRegGem className="text-white w-6 h-6" />,
    title: "Jacket Back Digitizing",
    description: "Large, detailed digitizing for jacket backs, sportswear, and varsity apparel with complex art.",
  },
  {
    icon: <FaRegObjectGroup className="text-white w-6 h-6" />,
    title: "Appliqué Digitizing",
    description: "Digitized designs using fabric patches, with clean stitching and color accuracy.",
  },
  {
    icon: <FaFont className="text-white w-6 h-6" />,
    title: "Monogram & Lettering",
    description: "Stylish monograms and text converted into embroidery files for personalized items.",
  },
  {
    icon: <FaIdBadge className="text-white w-6 h-6" />,
    title: "Patch Digitizing",
    description: "High-quality patches and badges ready for machine embroidery or manual application.",
  },
];

export default function FlipCardServices() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

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
            What we do in embroidery digitizing?
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
            Our Embroidery Digitizing Services
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
              key={index}
              onClick={() => handleFlip(index)}
            >
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
