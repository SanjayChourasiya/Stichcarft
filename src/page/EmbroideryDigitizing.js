import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaCogs,
  FaTshirt,
  FaHatCowboy,
  FaShieldAlt,
} from "react-icons/fa";
import { FaSmile, FaUsers, FaGlobeAmericas } from "react-icons/fa";

import { FaFileAlt, FaFileImage, FaFileCode, FaFileArchive } from "react-icons/fa";

function EmbroideryDigitizing() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-24 px-4 sm:px-8 text-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 font-sans">
            Premium Embroidery Digitizing
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Transforming your logos into flawless stitch files with precision and quality.
          </p>
          <a
            href="#"
            className="mt-8 inline-block px-8 py-3 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-100 transition font-sans"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Top Quality Files",
                icon: (
                  <FaCheckCircle className="text-[#4B4FCA] text-4xl mb-4 mx-auto" />
                ),
                desc: "Manual digitizing with clean paths for smooth production.",
              },
              {
                title: "Fast Turnaround",
                icon: (
                  <FaClock className="text-[#4B4FCA] text-4xl mb-4 mx-auto" />
                ),
                desc: "12-24 hours standard delivery with urgent options.",
              },
              {
                title: "All Formats Supported",
                icon: (
                  <FaCogs className="text-[#4B4FCA] text-4xl mb-4 mx-auto" />
                ),
                desc: "DST, PES, EXP, VP3, and more for any machine type.",
              },
              {
                title: "Fabric Specific Settings",
                icon: (
                  <FaTshirt className="text-[#4B4FCA] text-4xl mb-4 mx-auto" />
                ),
                desc: "Stitch density, underlay, and compensation adjusted per fabric.",
              },
              {
                title: "Cap Digitizing Experts",
                icon: (
                  <FaHatCowboy className="text-[#4B4FCA] text-4xl mb-4 mx-auto" />
                ),
                desc: "Perfect curvature and pull compensation for structured caps.",
              },
              {
                title: "Secure & Reliable",
                icon: (
                  <FaShieldAlt className="text-[#4B4FCA] text-4xl mb-4 mx-auto" />
                ),
                desc: "Professional service with guaranteed confidentiality.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition font-sans"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 font-sans">{item.title}</h3>
                <p className="text-gray-600 text-sm font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-8 bg-white font-sans">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans">
            Our Digitizing Process
          </h2>
          <ol className="relative border-l border-[#4B4FCA]">
            {[
              {
                title: "Artwork Analysis",
                desc: "Detailed review of your logo to plan stitch types and density.",
              },
              {
                title: "Manual Digitizing",
                desc: "Expert creation of each stitch path ensuring smooth production.",
              },
              {
                title: "Quality Simulation",
                desc: "Virtual sew-out to check density, pathing, and underlay accuracy.",
              },
              {
                title: "Final Delivery",
                desc: "Files in required formats with preview and production notes.",
              },
            ].map((step, idx) => (
              <li key={idx} className="mb-10 ml-6 font-sans">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#4B4FCA] rounded-full -left-4 ring-4 ring-white text-white font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-semibold mb-1 font-sans">{step.title}</h3>
                <p className="text-gray-600 font-sans">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
 <section className="py-20 px-4 sm:px-8 bg-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          We Support All Major File Types
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our embroidery digitizing service delivers files compatible with your specific embroidery machine and software, ensuring seamless production without any compatibility issues.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            {
              title: "DST Format",
              icon: <FaFileAlt className="text-5xl text-[#4B4FCA] mx-auto mb-4" />,
              desc: "For Tajima & compatible machines",
            },
            {
              title: "PES Format",
              icon: <FaFileImage className="text-5xl text-[#4B4FCA] mx-auto mb-4" />,
              desc: "For Brother & Babylock machines",
            },
            {
              title: "EXP Format",
              icon: <FaFileCode className="text-5xl text-[#4B4FCA] mx-auto mb-4" />,
              desc: "For Melco & Bernina embroidery",
            },
            {
              title: "VP3 & More",
              icon: <FaFileArchive className="text-5xl text-[#4B4FCA] mx-auto mb-4" />,
              desc: "We deliver VP3, JEF, HUS, and all requested formats",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Product Samples */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 font-sans">
            Digitizing Samples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Polo Shirt Logo", image: "/img/shopping.png" },
              { title: "Snapback Cap Design", image: "/img/image.png" },
              { title: "Jacket Back Artwork", image: "/img/jacket.png" },
              { title: "Monogram Text", image: "/img/hoodie.png" },
              { title: "Patch Design", image: "/img/part1.png" },
              { title: "Detailed Artwork", image: "/img/swetshirt.png" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition group font-sans"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition"
                />
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-[#4B4FCA] mb-1 font-sans">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-16 px-4 sm:px-8 text-white text-center font-sans">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 font-sans">
            Elevate Your Brand Today
          </h2>
          <p className="text-lg mb-8 font-sans">
            Send us your design and get a high-quality embroidery file with fast turnaround.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-100 transition font-sans"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default EmbroideryDigitizing;
