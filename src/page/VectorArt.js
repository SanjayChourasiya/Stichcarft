import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaVectorSquare, FaRocket } from "react-icons/fa";

function VectorArt() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center z-10 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Stunning Vector Art Services
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Get ultra-crisp, scalable, and print-ready artwork for logos, t-shirts, illustrations, and more.
          </p>
        </div>
      </section>

      {/* What is Vector Art */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            What is Vector Art?
          </motion.h2>
          <p className="text-lg text-gray-600">
            Vector art is a digital design technique that uses lines and curves to create artwork that scales perfectly without losing clarity. Ideal for printing, engraving, embroidery, or digital design — it turns any image or sketch into high-quality art.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Choose Our Vector Art?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Pixel-Perfect Conversion",
                desc: "We meticulously convert low-res images to clean, editable vector files.",
                icon: <FaVectorSquare size={32} />,
              },
              {
                title: "Creative Detailing",
                desc: "From flat colors to intricate gradients, we capture your design’s soul.",
                icon: <FaPaintBrush size={32} />,
              },
              {
                title: "Lightning Fast Delivery",
                desc: "Your files delivered within 12–24 hours. Speed + Quality = Perfection.",
                icon: <FaRocket size={32} />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-[#4B4FCA] mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Our Vector Art Transformations
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            See how we bring flat, pixelated images to life with bold, clean vector lines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
            //   { image: "/img/vector1.png", label: "Logo Cleanup" },
            //   { image: "/img/vector2.png", label: "T-shirt Art" },
            //   { image: "/img/vector3.png", label: "Mascot Vector" },
            //   { image: "/img/vector4.png", label: "Custom Badge" },
            //   { image: "/img/vector5.png", label: "Portrait Line Art" },
            //   { image: "/img/vector6.png", label: "Print Icon Set" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-gray-50 text-left">
                  <h3 className="text-[#4B4FCA] font-semibold text-sm">{item.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-20 px-4 sm:px-8 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Vector Journey Today
          </h2>
          <p className="text-lg mb-8">
            Send us your sketch, image, or logo and get back a professional-grade vector file you can use anywhere.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-[#4B4FCA] font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Request a Vector Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default VectorArt;
