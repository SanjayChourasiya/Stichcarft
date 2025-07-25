import React, { useState } from "react";
import {
  Briefcase,
  Globe,
  Target,
  Users,
  CheckCircle,
  Settings,
  BarChart,
  Rocket,
  Shield,
  Lightbulb,
  ArrowRight,
  BadgeDollarSign,
  Clock,
  Layers,
} from "lucide-react";
import Feature from "../page/featurecard"

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import RequestQuoteModal from "../page/RequestQuoteModal";
import { Toaster, toast } from "react-hot-toast";
// ✅ Add this (or from 'react-hot-toast' if that's what you use)

function About() {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const handleContactClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/contact";
    }, 1000);
  };

  return (
    <>
      {/* MAIN SECTIONS */}
      <div>
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
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-purple-800 px-3 py-1 rounded-full font-semibold shadow-md z-20 text-sm">
            Real Craft in Action
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


        {/* Why Choose Us */}
   <section className="bg-gradient-to-br from-white to-gray-50 py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center ">
            <div className="w-16 h-1 bg-purple-600 rounded-full  mx-auto" />
            <h2 className="text-3xl  p-4 sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
              Why Choose Us
            </h2>
            <p className="text-black    text-base sm:text-lg max-w-3xl mx-auto">
              Trusted by print shops, designers, and apparel decorators globally —
              our commitment to quality and service sets us apart.
            </p>
          </div>

        <div className="py-8"></div>  {/* Features Grid */}
       <Feature />

          {/* CTA Button */}
          <div className="mt-14 pb-4  text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white font-bold text-base sm:text-lg rounded-full shadow hover:scale-105 transition duration-300"
            >
              Know More
            </button>
          </div>
        </div>
      </section>
      </div>

      {/* MODAL & TOASTER */}
      <AnimatePresence>
        {isModalOpen && (
          <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>

      <Toaster />
    </>
  );
}

export default About;
