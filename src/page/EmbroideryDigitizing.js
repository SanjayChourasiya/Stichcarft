import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import Feature from "../page/featurecard"
import FAQ from "../page/embfaq"
import WHATWE from "../page/whatwedo"
import BEFORE from "../page/Emboroiderybeforeafter"
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
} from "react-icons/fa";
import { Sparkles, ScissorsSquare, Headphones } from "lucide-react";
import RequestQuoteModal from "../page/RequestQuoteModal";

import { Link } from "react-router-dom";

import Step from "../page/HowItWorks"
import { FaRegObjectGroup, FaRegGem, FaLayerGroup, FaRegLaughWink, FaRulerCombined, FaAlignCenter, FaIdBadge, FaFont } from "react-icons/fa";


import { BadgeDollarSign, Clock, CheckCircle } from "lucide-react";
import { Image, Rocket, Layers } from "lucide-react";


const faqs = [
  {
    question: "What image formats do you accept for conversion?",
    answer:
      "We accept .jpg, .gif, .bmp, .tif, .ai, .eps. It's best to email .jpeg or .gif due to smaller file size.",
  },
  {
    question: "What embroidery file types do you deliver?",
    answer:
      "We email PDF and DST (or any requested format) files after your approval and payment.",
  },
  {
    question: "Are edits or revisions included?",
    answer: "Yes. All basic edits and corrections are free.",
  },
  {
    question: "What payment methods do you support?",
    answer: "We support PayPal and bank transfers.",
  },
  {
    question: "Can I contact you during my business hours?",
    answer: "Yes! Our team is available Monday to Saturday.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Typically within 24 hours depending on complexity. We prioritize urgent jobs.",
  },
];

const features = [
  {
    title: "Top Quality Files",
    icon: <FaCheckCircle className="text-[#4B4FCA] text-4xl mx-auto mb-4" />,
    desc: "Manual digitizing with clean paths for smooth production.",
  },
  {
    title: "Fast Turnaround",
    icon: <FaClock className="text-[#4B4FCA] text-4xl mx-auto mb-4" />,
    desc: "Standard delivery within 12–24 hours.",
  },
  {
    title: "All Formats Supported",
    icon: <FaCogs className="text-[#4B4FCA] text-4xl mx-auto mb-4" />,
    desc: "DST, PES, EXP, VP3, and more supported.",
  },
  {
    title: "Fabric Specific Settings",
    icon: <FaTshirt className="text-[#4B4FCA] text-4xl mx-auto mb-4" />,
    desc: "Settings customized per fabric type.",
  },
  {
    title: "Cap Digitizing Experts",
    icon: <FaHatCowboy className="text-[#4B4FCA] text-4xl mx-auto mb-4" />,
    desc: "Specialized in 3D puff and structured caps.",
  },
  {
    title: "Secure & Reliable",
    icon: <FaShieldAlt className="text-[#4B4FCA] text-4xl mx-auto mb-4" />,
    desc: "Secure handling and fast service.",
  },
];

const formats = [
  {
    title: "DST Format",
    icon: <FaFileAlt className="text-5xl text-[#4B4FCA] mb-4 mx-auto" />,
    desc: "For Tajima & compatible machines",
  },
  {
    title: "PES Format",
    icon: <FaFileImage className="text-5xl text-[#4B4FCA] mb-4 mx-auto" />,
    desc: "For Brother & Babylock machines",
  },
  {
    title: "EXP Format",
    icon: <FaFileCode className="text-5xl text-[#4B4FCA] mb-4 mx-auto" />,
    desc: "For Melco & Bernina embroidery",
  },
  {
    title: "VP3 & More",
    icon: <FaFileArchive className="text-5xl text-[#4B4FCA] mb-4 mx-auto" />,
    desc: "VP3, JEF, HUS and more on request",
  },
];
const steps = [
  { icon: "📤", title: "Step 1", desc: "Upload your logo or artwork (JPG, PNG, PDF, etc.)." },
  { icon: "📩", title: "Step 2", desc: "Get a quote and preview within 1–3 hours." },
  { icon: "💳", title: "Step 3", desc: "Approve and pay via PayPal or bank transfer." },
  { icon: "📧", title: "Step 4", desc: "Receive final files via email within 12–24 hours." },
];

const stepVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};


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


const samples = [
  { title: "Polo Shirt Logo", image: "/img/shopping.png" },
  { title: "Snapback Cap Design", image: "/img/image.png" },
  { title: "Jacket Back Artwork", image: "/img/jacket.png" },
  { title: "Monogram Text", image: "/img/hoodie.png" },
  { title: "Patch Design", image: "/img/part1.png" },
  { title: "Detailed Artwork", image: "/img/swetshirt.png" },
];

function EmbroideryDigitizing() {
  const [openIndexes, setOpenIndexes] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);



  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
 <section className="relative text-white text-center px-4 py-24 overflow-hidden h-[65vh] sm:h-[78vh]">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/img/emv.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

  {/* Foreground Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 flex flex-col items-center justify-center h-full">
    <h1 className="text-2xl sm:text-5xl font-bold mb-3 sm:pt-10 text-white leading-snug sm:leading-tight">
      Premium Embroidery Digitizing
      
    </h1>
    <p className="text-sm sm:text-xl mb-5 sm:mb-6 text-white px-2 sm:px-0">
      Convert your designs into flawless stitch files with precision.
    </p>
    <button
      onClick={() => setIsModalOpen(true)}
      className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-bold text-sm sm:text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
    >
      Get a Free Quote
    </button>
  </div>
</section>

 <BEFORE/>

      <section className="bg-gradient-to-br from-white to-gray-50 py-10px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-3 mx-auto" />
            <h2 className="text-3xl  p-4 sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
              Why Choose Us
            </h2>
            <p className="text-black text-base sm:text-lg max-w-3xl mx-auto">
              Trusted by print shops, designers, and apparel decorators globally —
              our commitment to quality and service sets us apart.
            </p>
          </div>

          {/* Features Grid */}

          <Feature />
          {/* CTA Button */}
          <div className="mt-14 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-bold text-base sm:text-lg rounded-full shadow hover:scale-105 transition duration-300"
            >
              Know More
            </button>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white via-[#fdfbff] to-gray-100 py-10 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text p-4">
              What we do in embroidery digitizing?
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
              Our Embroidery Digitizing Services
            </p>
          </div> */}

          {/* Cards */}
       <WHATWE/>
          {/* Info Line */}
          <p className="mt-16 text-center text-lg font-medium text-gray-800 max-w-xl mx-auto">
            Need a design digitized? Upload your artwork now and get started with top-tier quality and fast delivery.
          </p>

          {/* CTA Button */}
          <div className="mt-6 text-center">

            <button
              onClick={() => setIsModalOpen(true)}

              className="px-10 py-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-semibold rounded-full text-lg shadow-lg hover:scale-105 transition duration-300">
              Upload Your Design Now
            </button>

          </div>
        </div>
      </motion.section>


      {/* Why Choose Us */}

      <Step />


      <FAQ />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Elevate Your Brand Today</h2>
          <p className="text-lg mb-8">
            Send us your design and receive a high-quality embroidery file with a fast turnaround.
          </p>
          < button
            onClick={() => setIsModalOpen(true)}

            className="inline-block px-8 py-3 bg-white text-[#4B4FCA] text-lg font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Request a Quote
          </button>

        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <Toaster />

    </div>
  );
}

export default EmbroideryDigitizing;
