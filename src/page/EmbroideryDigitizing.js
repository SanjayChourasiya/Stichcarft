import React from "react";
import { motion } from "framer-motion";

function EmbroideryDigitizing() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-20 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Embroidery Digitizing Services
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            High-quality stitch files, crafted to perfection for every machine and fabric.
          </p>
        </div>
      </section>

      {/* What is Digitizing */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            What is Embroidery Digitizing?
          </h2>
          <p className="text-gray-600 text-lg">
            Embroidery digitizing is the process of converting your logo or artwork into a stitch file that embroidery machines can read. It’s a technical art form that ensures precision, texture, and clarity in every stitch — from caps to jackets and everything in between.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Choose StitchCraft for Digitizing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Machine-Perfect Files",
                desc: "We deliver DST, PES, EXP, and other formats tailored for your machine.",
              },
              {
                title: "Fabric-Specific Adjustments",
                desc: "Our team adjusts stitch density, pathing, and underlay for any fabric.",
              },
              {
                title: "Superfast Turnaround",
                desc: "Need it urgent? Most files are delivered within 12–24 hours.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#4B4FCA]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Examples */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Digitized Product Examples
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            We’ve helped thousands of brands bring their designs to life. Here are some real product samples we’ve digitized:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Embroidered Polo Shirt",
                image: "/img/shopping.png",
                desc: "Clean, crisp chest logos — ideal for corporate uniforms and teamwear.",
              },
              {
                title: "Custom Snapback Cap",
                image: "/img/image.png",
                desc: "High-density embroidery with edge-to-edge clarity on curved surfaces.",
              },
              {
                title: "Warm Hoodie",
                image: "/img/hoodie.png",
                desc: "Perfect for textured fabrics. No thread pulls, just smooth stitching.",
              },
              {
                title: "Stylish Jacket",
                image: "/img/jacket.png",
                desc: "Tough surfaces? No problem. Our files adapt stitch style accordingly.",
              },
              {
                title: "Workwear Shirt",
                image: "/img/swetshirt.png",
                desc: "Digitized with precision for large back or arm placement artwork.",
              },
              {
                title: "Business Uniform",
                image: "/img/part1.png",
                desc: "Logo embroidery optimized for brand consistency and comfort.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-[#4B4FCA] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-16 px-4 sm:px-8 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg mb-8">
            Send us your logo or artwork and get a digitized embroidery file made by professionals.
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
