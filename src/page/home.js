import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Sparkles, ScissorsSquare, Headphones } from "lucide-react";

import Herosection from "../page/herosection";
import Howemake from "../page/HowWeMakeSection";
import PartnerSlider from "../page/PartnerSlider";
import RequestQuoteModal from "../page/RequestQuoteModal";

const services = [
  {
    title: "Vector Art",
    desc: "Scalable, clean vector art for high-quality printing and branding.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
  },
  {
    title: "Embroidery Digitizing",
    desc: "Tailored, precise stitch files optimized for any fabric or machine.",
    icon: <ScissorsSquare className="w-6 h-6 text-white" />,
  },
  {
    title: "24/7 Support",
    desc: "We’re always here to ensure your designs are perfect and on time.",
    icon: <Headphones className="w-6 h-6 text-white" />,
  },
];

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
         <section className="relative bg-white py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-sm uppercase text-purple-600 font-semibold tracking-wide mb-4">
              About Us
            </p>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
              Why StitchCraft?
            </h2>
            <p className="text-gray-700 mb-4">
              We were tired of boring, outdated embroidery. StitchCraft was born to
              fuse cutting-edge technology with artisan creativity — delivering
              embroidery that’s fast, bold, and brand-defining.
            </p>
            <p className="text-gray-600 mb-6">
              Whether it’s uniforms, gifting, or merchandise — you bring the vision,
              we bring the stitch-perfect detail.
            </p>
            <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left mt-4">
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

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group h-[300px] sm:h-[380px]">
              <img
                src="/img/about.jpeg"
                alt="About StitchCraft"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-sm text-purple-800 px-4 py-1 rounded-full font-semibold shadow-md z-20">
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
        className="relative bg-gradient-to-br from-white to-gray-50 py-10 px-4 sm:px-10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-14 h-1 bg-purple-600 rounded-full mb-6 mx-auto" />
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            From vector refinement to flawless digitizing, we deliver excellence in every stitch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <a
              onClick={() => setIsModalOpen(true)}
             
              className="px-6 py-3 bg-purple-700 text-white text-sm font-medium rounded-full hover:bg-purple-800 transition"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </motion.section>
   

      <section>
        <Howemake />
      </section>

      {/* FAQ Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 py-8 px-4 sm:px-10">
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
      </section>

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
