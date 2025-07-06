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
              <p className="text-black    mb-4 text-justify">
                StichKart is a leading provider of embroidery digitizing services and vector artwork services, trusted by apparel decorators, promotional product companies, embroidery businesses, and print shops around the globe. With a deep understanding of the embroidery industry and years of hands-on experience, we specialize in converting artwork into high-quality embroidery files and clean, scalable vector graphics.
                At StichKart, we focus on delivering digitizing for embroidery machines that ensures smooth stitching, fewer thread breaks, and enhanced design clarity. Whether you need left chest logos, cap digitizing, 3D puff digitizing, or complex vector conversions, our expert team is equipped to handle it all — with precision and care.
              </p>
              <p className="text-black    mb-8 text-justify">
                We take pride in:
                Fast turnaround times (within 24 hours),
                Affordable pricing without compromising on quality,
                Skilled professionals using the latest digitizing software,
                Exceptional customer support and satisfaction.
                Our mission is to help businesses grow by providing custom embroidery digitizing and vector conversion services that are production-ready, machine-friendly, and visually stunning.
                Partner with StichKart to turn your ideas into flawless embroidery designs and ready-to-print vector files — quickly, affordably, and reliably.
              </p>

              {/* Stats */}
              <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left mt-6">
                <div>
                  <h3 className="text-3xl font-bold text-purple-800">
                    {inView && <CountUp end={3} duration={2} suffix="M+" />}
                  </h3>
                  <p className="text-sm text-black    mt-1">Products Digitized</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-800">
                    {inView && <CountUp end={1} duration={2} suffix="K+" />}
                  </h3>
                  <p className="text-sm text-black    mt-1">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-800">
                    {inView && <CountUp end={10} duration={2} suffix="+" />}
                  </h3>
                  <p className="text-sm text-black    mt-1">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-800">
                    {inView && <CountUp end={25} duration={2} />}
                  </h3>
                  <p className="text-sm text-black    mt-1">Team Members</p>
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

        {/* Why Choose Us */}
   <section className="bg-gradient-to-br from-white to-gray-50 py-10px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-3 mx-auto" />
            <h2 className="text-3xl  p-4 sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
              Why Choose Us
            </h2>
            <p className="text-black    text-base sm:text-lg max-w-3xl mx-auto">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-black   ">{feature.desc}</p>
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
