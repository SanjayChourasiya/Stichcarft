import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Sparkles, ScissorsSquare, Headphones } from "lucide-react";
import { Image, Rocket, Layers } from "lucide-react";
import { BadgeDollarSign, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialSection from "../page/TestimonialSection"
import Feature from "../page/featurecard"
import Herosection from "../page/herosection";
import Howemake from "../page/HowWeMakeSection";
import PartnerSlider from "../page/PartnerSlider";
import RequestQuoteModal from "../page/RequestQuoteModal";


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
      {/* <PartnerSlider /> */}

      {/* Why StitchCraft Section */}
<section className="relative bg-white px-4 py-10 sm:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
    
    {/* Text Content */}
    <div className="md:col-span-7">
      <p className="text-xs sm:text-sm uppercase text-purple-600 font-semibold tracking-wide mb-2 sm:mb-3">
        About Us
      </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-justify bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow mb-4 sm:mb-6">
        Who We Are
      </h2>
      <p className="text-black mb-4 text-lg text-justify">
        <span className="font-bold text-purple-900">StichKart</span> is a leading provider of 
        <span className="font-bold text-purple-900"> embroidery digitizing services</span> and 
        <span className="font-bold text-purple-900"> vector artwork services</span>, trusted by apparel decorators, promotional product companies, embroidery businesses, and print shops around the globe. 
        With a deep understanding of the embroidery industry and years of hands-on experience, we specialize in converting artwork into high-quality embroidery files and clean, scalable vector graphics.
        At StichKart, we focus on delivering digitizing for embroidery machines that ensures 
        <span className="font-bold text-purple-900"> smooth stitching</span>, 
        <span className="font-bold text-purple-900"> fewer thread breaks</span>, and 
        <span className="font-bold text-purple-900"> enhanced design clarity</span>. 
        Whether you need 
        <span className="font-bold text-purple-900"> left chest logos</span>, 
        <span className="font-bold text-purple-900"> cap digitizing</span>, 
        <span className="font-bold text-purple-900"> 3D puff digitizing</span>, or 
        complex vector conversions, our expert team is equipped to handle it all — with precision and care.
      </p>

      <div className="mb-4 text-lg text-black">
        <p className="mb-2 font-semibold text-black">We take pride in:</p>
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li><span className=" text-black">Fast turnaround times</span> (within 24 hours)</li>
          <li><span className="text-black">Affordable pricing</span> without compromising on quality</li>
          <li><span className=" text-black">Skilled professionals</span> using the latest digitizing software</li>
          <li><span className=" text-black">Exceptional customer support</span> and satisfaction</li>
        </ul>
      </div>

      <p className="text-black text-lg text-justify">
        Our mission is to help businesses grow by providing 
        <span className="font-bold text-purple-900"> custom embroidery digitizing</span> and 
        <span className="font-bold text-purple-900"> vector conversion services</span> that are production-ready, machine-friendly, and visually stunning. 
        Partner with StichKart to 
        <span className="font-bold text-purple-900"> turn your ideas into flawless embroidery designs</span> and 
        <span className="font-bold text-purple-900"> ready-to-print vector files</span> — 
        <span className="font-bold text-purple-900"> quickly</span>, 
        <span className="font-bold text-purple-900"> affordably</span>, and 
        <span className="font-bold text-purple-900"> reliably</span>.
      </p>
    </div>

    {/* Image Section */}
    <div className="md:col-span-5 mt-0 md:mt-0">
      <div className="relative p-[8px] bg-gradient-to-br from-[#4B4FCA] via-purple-500 to-pink-500 rounded-2xl shadow-2xl animate-glow">
        <div className="rounded-2xl overflow-hidden w-full h-80 sm:h-[500px] relative bg-black">
          <img
            src="/img/bz.jpg"
            alt="About StichKart"
            className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-purple-900 px-3 py-1 rounded-full font-semibold shadow-md z-20 text-sm">
            Real Craft in Action
          </div>
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
  className="bg-white py-8 px-4 sm:px-6 lg:px-10"
>
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
        What We Do
      </h2>
      <p className="text-black text-base sm:text-lg max-w-2xl mx-auto">
        We offer two specialized services crafted for modern apparel brands.
      </p>
    </div>

    {/* Services */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Service 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-start sm:items-center gap-4 mb-4">
          <div className="min-w-[48px] min-h-[48px] bg-gradient-to-br from-[#4B4FCA] to-pink-600 rounded-full flex items-center justify-center">
            <ScissorsSquare className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 leading-snug">
            Embroidery Digitizing Services
          </h3>
        </div>
        <p className="text-black text-lg leading-relaxed text-justify">
          We convert your artwork into 
          <span className="font-semibold text-purple-900"> machine-ready embroidery files</span> with 
          <span className="font-semibold text-purple-900"> sharp detailing</span>, 
          <span className="font-semibold text-purple-900"> accurate stitch paths</span>, and 
          <span className="font-semibold text-purple-900"> minimal thread breaks</span>. 
          Our team is skilled in 
          <span className="font-semibold text-purple-900"> left chest logo digitizing</span>, 
          <span className="font-semibold text-purple-900"> cap and hat digitizing</span>, 
          <span className="font-semibold text-purple-900"> 3D puff digitizing</span>, 
          <span className="font-semibold text-purple-900"> appliqué digitizing</span>, and 
          <span className="font-semibold text-purple-900"> monogram and lettering digitizing</span>. 
          Each file is 
          <span className="font-semibold text-purple-900"> tested for production quality</span> and 
          <span className="font-semibold text-purple-900"> optimized for smooth operation</span> on major embroidery machines like 
          <span className="font-semibold text-purple-900"> Tajima</span>, 
          <span className="font-semibold text-purple-900"> Barudan</span>, 
          <span className="font-semibold text-purple-900"> Brother</span>, and more.
        </p>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="min-w-[48px] min-h-[48px] bg-gradient-to-br from-[#4B4FCA] to-pink-600 rounded-full flex items-center justify-center">
            <Image className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 leading-snug mt-2">
            Vector Artwork Conversion
          </h3>
        </div>
        <p className="text-black text-lg leading-relaxed text-justify">
          We transform 
          <span className="font-semibold text-purple-900"> low-resolution images</span>, 
          <span className="font-semibold text-purple-900"> hand-drawn logos</span>, or 
          <span className="font-semibold text-purple-900"> blurry artwork</span> into 
          <span className="font-semibold text-purple-900"> clean, scalable vector files</span> ready for 
          <span className="font-semibold text-purple-900"> screen printing</span>, 
          <span className="font-semibold text-purple-900"> DTF</span>, 
          <span className="font-semibold text-purple-900"> sublimation</span>, and 
          <span className="font-semibold text-purple-900"> vinyl cutting</span>. 
          Our services include 
          <span className="font-semibold text-purple-900"> raster to vector conversion</span>, 
          <span className="font-semibold text-purple-900"> logo recreation</span>, 
          <span className="font-semibold text-purple-900"> color separation for printing</span>, and 
          <span className="font-semibold text-purple-900"> redrawing complex artwork</span>. 
          We support 
          <span className="font-semibold text-purple-900"> AI</span>, 
          <span className="font-semibold text-purple-900"> EPS</span>, 
          <span className="font-semibold text-purple-900"> PDF</span>, 
          <span className="font-semibold text-purple-900"> SVG</span>, and 
          <span className="font-semibold text-purple-900"> CDR</span> formats.
        </p>
      </motion.div>
    </div>

    {/* CTA */}
    <div className="mt-14 text-center">
      <Link to="/emd">
        <button className="px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white text-base sm:text-lg font-semibold rounded-full shadow hover:scale-105 transition duration-300">
          Explore All Services
        </button>
      </Link>
    </div>
  </div>
</motion.section>


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
          <div className="mt-14 pb-4 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-bold text-base sm:text-lg rounded-full shadow hover:scale-105 transition duration-300"
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
            <p className="text-black   text-lg max-w-2xl mx-auto">
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
                        className="px-5 pb-5 text-black text-sm sm:text-base bg-white"
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
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-sm text-purple-900 px-4 py-1 rounded-full font-semibold shadow-md z-20">
                Clarity in Every Answer
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <TestimonialSection />

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
          <p className="text-black   text-lg max-w-2xl mx-auto mb-12">
            Whether it's a custom request, a question about our services, or just a friendly hello — we're here and ready to help.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <p className="text-sm font-semibold text-black   mb-1">📧 Email Us</p>
              <a href="mailto:support@stitchcraft.com" className="text-[#4B4FCA] font-medium hover:underline">
                support@stitchcraft.com
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <p className="text-sm font-semibold text-black   mb-1">📞 Call Us</p>
              <a href="tel:+919876543210" className="text-[#4B4FCA] font-medium hover:underline">
                +91 98765 43210
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <p className="text-sm font-semibold text-black   mb-1">💬 Support Hours</p>
              <p className="text-black font-medium">Mon–Sat, 9AM–8PM IST</p>
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
