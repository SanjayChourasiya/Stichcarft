// Updated Embroidery + Vector Art Services Page
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Sparkles, ScissorsSquare, Headphones, BadgeDollarSign, Clock, CheckCircle, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Step from "../page/HowItWorks";

const faqs = [
  {
    question: "What file formats do you deliver?",
    answer:
      "We provide final files in AI, EPS, SVG, PDF, CDR formats based on your requirements.",
  },
  {
    question: "Can you convert blurry logos or scanned artwork?",
    answer:
      "Yes. We manually redraw low-quality or scanned images into crisp, clean vector files.",
  },
  {
    question: "What printing methods are supported?",
    answer:
      "We create vector art suitable for screen printing, DTG, DTF, engraving, sublimation, and more.",
  },
  {
    question: "Do you support color separation?",
    answer:
      "Yes, we provide spot color and process color separations for screen printing.",
  },
  {
    question: "What's your delivery timeline?",
    answer:
      "Standard turnaround is 12–24 hours. Urgent requests are prioritized.",
  },
  {
    question: "Are edits free?",
    answer: "Yes. We offer unlimited revisions until you're satisfied.",
  },
];

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

function VectorArtwork() {
  const [openIndexes, setOpenIndexes] = useState({});
  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative text-white text-center px-4 py-20 sm:py-24 overflow-hidden h-auto sm:h-[58vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/vc2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Premium Vector Artwork Conversion
          </h1>

          <p className="text-lg sm:text-2xl mb-6 max-w-2xl">
            Get sharp, scalable vector files recreated by skilled designers.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 text-base sm:text-lg"
          >
            Upload Your Design
          </a>
        </div>
      </section>




      {/* About Vector Artwork Services */}
     
<section className="bg-gradient-to-r from-white to-gray-50 py-16 px-4 sm:px-6 md:px-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
    
    {/* Text Section */}
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text">
        Vector Artwork Services
      </h2>
      <p className="text-base sm:text-lg mb-4 text-gray-800">
        At <span className="font-bold text-blue-800">Stitchkraft</span>, we offer premium vector artwork conversion services to help you transform low-resolution images, sketches, and logos into sharp, scalable vector files.
      </p>
      <p className="text-base sm:text-lg mb-4 text-gray-800">
        Our skilled designers manually recreate your artwork using industry-standard tools, ensuring every line, curve, and color is crisp, clean, and ready for print, screen, or stitch.
      </p>
      <p className="text-base sm:text-lg mb-6 text-gray-800">
        We deliver high-quality AI, EPS, SVG, PDF, or CDR formats customized to your needs.
      </p>

      <ul className="space-y-3 mb-6 text-gray-800 font-semibold">
        <li>✅ 12–24 Hour Delivery Time</li>
        <li>✅ Clean Stitch Path & Detailing</li>
        <li>✅ Affordable & Reliable</li>
        <li>✅ Supports All Embroidery Machines</li>
      </ul>

      <button className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        Upload Your Design
      </button>
    </div>

    {/* Image Section */}
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-[80%] md:w-[90%] lg:w-[400px] rounded-2xl overflow-hidden shadow-xl border border-white bg-gradient-to-br from-[#D1D9F2] via-[#e6d4f7] to-[#fcd6e6] p-2">
        <img
          src="/img/vectora.png"
          alt="Vector Artwork Example"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </div>

  </div>
</section>



      {/* Our Vector Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white via-[#fdfbff] to-gray-100 py-10 px-4 sm:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text p-4">
              Our Vector Artwork Services
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
              We specialize in converting images, logos, and hand-drawn sketches into clean, scalable vector formats.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4B4FCA] to-pink-600 flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{service.title}</h3>
                <p className="text-black text-center text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-16 text-center text-lg font-medium text-gray-800 max-w-xl mx-auto">
            Need professional vector art? Upload your file now and get high-quality vector output fast.
          </p>

          <div className="mt-6 text-center">
            <a href="/vector-upload">
              <button className="px-10 py-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-semibold rounded-full text-lg shadow-lg hover:scale-105 transition duration-300">
                Upload Your Design Now
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <Step />

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
            <p className="mb-2 text-lg text-black">About Our Services</p>
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              Everything you need to know about Stitchkraft and our vector art services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl overflow-hidden bg-white shadow hover:shadow-md transition"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left text-black font-medium text-lg bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl font-bold text-purple-700">
                      {openIndexes[index] ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndexes[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-black text-lg leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/img/faq.png"

                alt="FAQ Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Elevate Your Design with Vector Art</h2>
          <p className="text-lg mb-8">
            Send us your artwork and receive sharp, clean vector files perfect for printing, cutting, and digital media.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-[#4B4FCA] text-lg font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default VectorArtwork;
