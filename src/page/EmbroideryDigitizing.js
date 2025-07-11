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
} from "react-icons/fa";
import { Sparkles, ScissorsSquare, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

import Step from "../page/HowItWorks"
import {   FaRegObjectGroup, FaRegGem,  FaLayerGroup, FaRegLaughWink, FaRulerCombined, FaAlignCenter, FaIdBadge, FaFont } from "react-icons/fa";


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


  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
<section className="relative text-white text-center px-4 py-24 overflow-hidden h-[58vh] sm:h-[70vh]">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/img/herov.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

  {/* Foreground Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4">
    <h1 className="text-3xl sm:text-5xl font-bold mb-3 pt-12 sm:pt-10 text-white leading-snug sm:leading-tight">
      Premium Embroidery Digitizing
    </h1>
    <p className="text-base sm:text-xl mb-5 sm:mb-6 text-white px-2 sm:px-0">
      Convert your designs into flawless stitch files with precision.
    </p>
    <a
      href="#"
      className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
    >
      Get a Free Quote
    </a>
  </div>
</section>

      <section className="bg-gradient-to-r from-white to-gray-50 py-20 md:px-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text animate-headingGlow">
              Embroidery Digitizing Services
            </h2>

            <p className="text-lg mb-4 text-black">
              At <span className="font-bold text-blue-800">Stitchkraft</span>, we expertly convert logos, artwork, and illustrations into high-quality, machine-readable embroidery files.
            </p>
            <p className="text-lg mb-4 text-black">
              Our team ensures clean stitching, minimal thread breaks, and detail perfection across every file—suited for caps, jackets, shirts, and more.
            </p>
            <p className="text-lg mb-6 text-black">
              We deliver files in <span className="font-bold text-blue-800">.DST, .PES, .EXP, .JEF</span> and all major formats with lightning-fast turnaround and unbeatable precision.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "✅ 12–24 Hour Delivery Time",
                "✅ Clean Stitch Path & Detailing",
                "✅ Affordable & Reliable",
                "✅ Supports All Embroidery Machines"
              ].map((item, idx) => (
                <li key={idx} className="text-lg font-semibold text-gray-800">
                  {item}
                </li>
              ))}
            </ul>

            <button className="shine-button w-full md:w-auto font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow-lg hover:scale-105 transition-transform duration-300">
              Upload Your Design
            </button>
          </div>

          {/* Right Image with Gradient BG */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B4FCA] via-purple-800 to-pink-600  animate-pulse opacity-90"></div>
            <img
              src="/img/jacket.png"
              alt="Embroidery Illustration"
              className="relative z-10 w-full h-full object-contain p-2 "
            />
          </div>

        </div>
      </section>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Affordable Pricing",
                desc: "Affordable digitizing for embroidery & vector artwork without sacrificing quality.",
                icon: <BadgeDollarSign className="w-8 h-8 text-purple-700" />,
              },
              {
                title: "Fast Turnaround",
                desc: "12–24 hour delivery to keep your business moving.",
                icon: <Clock className="w-8 h-8 text-purple-700" />,
              },
              {
                title: "All Formats Supported",
                desc: "We support DST, PES, EMB, and all major file types.",
                icon: <Layers className="w-8 h-8 text-purple-700" />,
              },
              {
                title: "Free Edits & Guarantee",
                desc: "Unlimited edits + 100% satisfaction guarantee.",
                icon: <CheckCircle className="w-8 h-8 text-purple-700" />,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="flex justify-center items-center bg-purple-100 rounded-full w-14 h-14 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold  text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-[16px] text-black  ">{feature.desc}</p>
              </div>
            ))}
          </div>

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
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text p-4">
           What we do in embroidery digitizing?
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
          Our Embroidery Digitizing Services
          </p>
        </div>

        {/* Cards */}
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
              <p className="text-black text-center text-lg sm:text-base  leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info Line */}
        <p className="mt-16 text-center text-lg font-medium text-gray-800 max-w-xl mx-auto">
          Need a design digitized? Upload your artwork now and get started with top-tier quality and fast delivery.
        </p>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <a href="/emd">
            <button className="px-10 py-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-semibold rounded-full text-lg shadow-lg hover:scale-105 transition duration-300">
              Upload Your Design Now
            </button>
          </a>
        </div>
      </div>
    </motion.section>


      {/* Why Choose Us */}
   
<Step/>


  

      {/* FAQ */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-14 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className="w-16 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
      <p className="mb-2 text-lg text-balck ">About Our Services</p>
      <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <p className="text-black text-lg max-w-2xl mx-auto">
        Everything you need to know about Stitchkraft and our services.
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

{/* CTA Section */}
<section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-16 px-4 text-white text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Elevate Your Brand Today</h2>
    <p className="text-lg mb-8">
      Send us your design and receive a high-quality embroidery file with a fast turnaround.
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

export default EmbroideryDigitizing;
