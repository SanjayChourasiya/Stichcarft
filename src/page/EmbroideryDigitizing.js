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
  {
    title: "Artwork Analysis",
    desc: "We study your logo to determine stitch types and density.",
  },
  {
    title: "Manual Digitizing",
    desc: "Experts build stitch paths with optimal production flow.",
  },
  {
    title: "Quality Simulation",
    desc: "We test virtual sew-outs for perfection.",
  },
  {
    title: "Final Delivery",
    desc: "You receive your file in required formats with preview.",
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

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-24 text-center px-4">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Premium Embroidery Digitizing</h1>
          <p className="text-xl mb-6">
            Convert your designs into flawless stitch files with precision.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {/* <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Digitizing Process</h2>
          <ol className="relative border-l border-[#4B4FCA] pl-6">
            {steps.map((step, i) => (
              <li key={i} className="mb-10 relative">
                <span className="absolute -left-6 top-1 w-8 h-8 bg-[#4B4FCA] text-white flex items-center justify-center rounded-full font-bold">
                  {i + 1}
                </span>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section> */}

      {/* File Types */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">We Support All Major File Types</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Receive files tailored to your machine’s software for seamless operation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {formats.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samples */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Digitizing Samples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {samples.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-[#4B4FCA]">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-14 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
            <p className="mb-2">About Our Services</p>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about Stitchkraft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-5 text-left text-gray-900 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {openIndexes[index] ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndexes[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-gray-700 text-sm"
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
              <div className="absolute bottom-4 left-4 bg-white/90 text-purple-800 px-4 py-1 rounded-full font-semibold text-sm shadow">
                Clarity in Every Answer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Elevate Your Brand Today</h2>
          <p className="text-lg mb-8">
            Send us your design and receive a high-quality embroidery file with a fast turnaround.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default EmbroideryDigitizing;
