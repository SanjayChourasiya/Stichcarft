import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Sparkles, ScissorsSquare, Headphones } from "lucide-react";
import { Image, Rocket, Layers } from "lucide-react";
import { BadgeDollarSign, Clock, CheckCircle } from "lucide-react";



import Herosection from "../page/herosection";
import Howemake from "../page/HowWeMakeSection";
import PartnerSlider from "../page/PartnerSlider";
import RequestQuoteModal from "../page/RequestQuoteModal";
const faqs = [
  {
    question: "What is the mission of Diziting Kart?",
    answer:
      "Diziting Kart aims to bridge the gap between local sellers and customers by offering a hyper-local online marketplace for everyday essentials.",
  },
  {
    question: "How does Diziting Kart support local businesses?",
    answer:
      "We provide an easy-to-use platform for local vendors to showcase and sell their products, reaching a wider audience and boosting their sales.",
  },
  {
    question: "How can customers benefit from using Diziting Kart?",
    answer:
      "Customers can shop conveniently for a wide variety of products from trusted local vendors, supporting their community and enjoying quick delivery.",
  },
  {
    question: "Is there a fee for sellers to join Diziting Kart?",
    answer:
      "Diziting Kart offers flexible plans for sellers, including a free option to start selling and premium plans with added promotional features.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState({});
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      <Herosection />
      <PartnerSlider />

      {/* Why StitchCraft Section */}
      <section className="relative bg-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="md:col-span-7">
            <p className="text-sm uppercase text-purple-600 font-semibold tracking-wide mb-3">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl text-justify font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              StichKart is a leading provider of embroidery digitizing services and vector artwork services, trusted by apparel decorators, promotional product companies, embroidery businesses, and print shops around the globe. With a deep understanding of the embroidery industry and years of hands-on experience, we specialize in converting artwork into high-quality embroidery files and clean, scalable vector graphics.
              At StichKart, we focus on delivering digitizing for embroidery machines that ensures smooth stitching, fewer thread breaks, and enhanced design clarity. Whether you need left chest logos, cap digitizing, 3D puff digitizing, or complex vector conversions, our expert team is equipped to handle it all — with precision and care.
            </p>
            <p className="text-gray-600 mb-8 text-justify">
              We take pride in:
              Fast turnaround times (within 24 hours)
              Affordable pricing without compromising on quality
              Skilled professionals using the latest digitizing software
              Exceptional customer support and satisfaction
              Our mission is to help businesses grow by providing custom embroidery digitizing and vector conversion services that are production-ready, machine-friendly, and visually stunning.
              Partner with StichKart to turn your ideas into flawless embroidery designs and ready-to-print vector files — quickly, affordably, and reliably.
            </p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left mt-6">
              <div>
                <h3 className="text-3xl font-bold text-purple-800">
                  {inView && <CountUp end={3} duration={2} suffix="M+" />}
                </h3>
                <p className="text-sm text-gray-600 mt-1">Products Digitized</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-800">
                  {inView && <CountUp end={1} duration={2} suffix="K+" />}
                </h3>
                <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-800">
                  {inView && <CountUp end={10} duration={2} suffix="+" />}
                </h3>
                <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-800">
                  {inView && <CountUp end={25} duration={2} />}
                </h3>
                <p className="text-sm text-gray-600 mt-1">Team Members</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group h-[400px] sm:h-[450px]">
              <img
                src="/img/about.jpeg"
                alt="About StitchKart"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-purple-800 px-4 py-1 rounded-full font-semibold shadow-md z-20">
                Real Craft in Action
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Offer Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white py-10 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            We offer two specialized services crafted for modern apparel brands.
          </p>

          {/* Two service blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                  <ScissorsSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Embroidery Digitizing Services
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We convert your artwork into machine-ready embroidery files with sharp detailing, accurate stitch paths, and minimal thread breaks. Our team is skilled in left chest logo digitizing, cap and hat digitizing, 3D puff digitizing, appliqué digitizing, and monogram and lettering digitizing. Each file is tested for production quality and optimized for smooth operation on major embroidery machines like Tajima, Barudan, Brother, and more.        </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Vector Artwork Services
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We transform low-resolution images, hand-drawn logos, or blurry artwork into clean, scalable vector files ready for screen printing, DTF, sublimation, and vinyl cutting. Our services include raster to vector conversion, logo recreation, color separation for printing, and redrawing complex artwork. We support AI, EPS, PDF, SVG, and CDR formats.",
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-purple-700 text-white text-sm font-medium rounded-full hover:bg-purple-800 transition shadow-md"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </motion.section>

      <section className="relative bg-gradient-to-br from-white to-gray-50 py-10 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-14 h-1 bg-purple-600 rounded-full mb-2 mx-auto" />
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-6 p-2">
              Why Choose Us
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Trusted by print shops, designers, and apparel decorators globally — our commitment to quality and service sets us apart.
            </p>
          </div>

          <div className="flex flex-col space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { title: "Affordable Pricing", desc: "Affordable digitizing for embroidery & vector artwork, designed to fit your budget without sacrificing quality.", icon: <BadgeDollarSign className="w-8 h-8 text-purple-700" /> },
              { title: "Fast Turnaround", desc: "12–24 hour turnaround time ensures your designs are ready when you need them most.", icon: <Clock className="w-8 h-8 text-purple-700" /> },
              { title: "All Formats Supported", desc: "We deliver in all major machine file formats (DST, PES, EMB, and more) — ready for immediate production.", icon: <Layers className="w-8 h-8 text-purple-700" /> },
              { title: "Free Edits & Guarantee", desc: "Free edits and a 100% satisfaction guarantee give you complete peace of mind.", icon: <CheckCircle className="w-8 h-8 text-purple-700" /> },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 bg-purple-100 rounded-full p-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white text-lg font-bold rounded-full shadow hover:scale-105 transition duration-300"
            >
              Know More
            </button>
          </div>
        </div>
      </section>

      <section>
        <Howemake />
      </section>

      {/* FAQ Section */}
      {/* <section className="relative bg-gradient-to-br from-white to-gray-50 py-8 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="w-14 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about how Diziting Kart works.
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
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {openIndexes[index] ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndexes[index] && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-gray-700 text-sm sm:text-base bg-white"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-[320px] sm:h-[400px] md:h-full">
              <img src="/img/faq.png" alt="FAQ Illustration" className="w-full h-full" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-sm text-purple-800 px-4 py-1 rounded-full font-semibold shadow-md z-20">
                Clarity in Every Answer
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section with CTA */}
      <section className="bg-white py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-14 h-1 bg-[#4B4FCA] rounded-full mb-6 mx-auto" />
          <p className="text-sm uppercase text-[#4B4FCA] font-semibold tracking-wide mb-2">
            Let’s Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-sm mb-6">
            Connect With Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Whether it's a custom request, a question about our services, or just a friendly hello — we're here and ready to help.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <p className="text-sm font-semibold text-gray-500 mb-1">📧 Email Us</p>
              <a href="mailto:support@stitchcraft.com" className="text-[#4B4FCA] font-medium hover:underline">
                support@stitchcraft.com
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <p className="text-sm font-semibold text-gray-500 mb-1">📞 Call Us</p>
              <a href="tel:+919876543210" className="text-[#4B4FCA] font-medium hover:underline">
                +91 98765 43210
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <p className="text-sm font-semibold text-gray-500 mb-1">💬 Support Hours</p>
              <p className="text-gray-700 font-medium">Mon–Sat, 9AM–8PM IST</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-medium text-sm shadow hover:opacity-90 transition"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <Toaster />
    </div>
  );
}
