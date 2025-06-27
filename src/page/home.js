// --- Imports ---
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import Herosection from "../page/herosection";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Howemake from "..//page/HowWeMakeSection"
import {
  Sparkles,
  ScissorsSquare,
  Headphones,
} from "lucide-react";

// --- Components ---
import PartnerSlider from "../page/PartnerSlider";
import RequestQuoteModal from "../page/RequestQuoteModal";

// --- Static Data ---
const partners = [
  { id: 1, name: "Partner 1", image: "/img/part3.jpeg" },
  { id: 2, name: "Partner 2", image: "/img/images.png" },
  { id: 3, name: "Partner 3", image: "/img/part1.png" },
  { id: 4, name: "Partner 4", image: "/img/trustpartner.png" },
  { id: 5, name: "Partner 5", image: "/img/images.png" },
  { id: 6, name: "Partner 6", image: "/img/part1.png" },
];

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

const products = [
  {
    name: "Shirts",
    category: "Apparel",
    image: "/img/shopping.png",
    rating: 4,
    discount: 20,
    price: 999.99,
  },
  {
    name: "Sweatshirts",
    category: "Apparel",
    image: "/img/swetshirt.png",
    rating: 5,
    price: 999.99,
  },
  {
    name: "Caps",
    category: "Accessories",
    image: "/img/image.png",
    rating: 3,
    discount: 15,
    price: 999.99,
  },
  {
    name: "jacket",
    category: "Accessories",
    image: "/img/jacket.png",
    rating: 4,
    price: 999.99,
  },
  {
    name: "Hoodie",
    category: "Business",
    image: "/img/hoodie.png",
    rating: 5,
    discount: 10,
    price: 999.99,
  },
  {
    name: "Shirt",
    category: "Business",
    image: "/img/shopping.png",
    rating: 4,
    price: 999.99,
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Stichkart transformed the way we manage projects!",
    company: "CEO, TechCorp",
    image: "/img/review.jpeg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    text: "An amazing tool for productivity and team collaboration.",
    company: "Manager, DevHub",
    image: "/img/review.jpeg",
  },
  {
    id: 3,
    name: "Michael Lee",
    text: "A must-have for efficient project tracking and execution.",
    company: "Founder, StartupX",
    image: "/img/review.jpeg",
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

// --- Main Home Component ---
function Home() {
  const categories = ["All Products", "Apparel", "Accessories", "Business"];
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Herosection />
      <PartnerSlider />



<section className="relative bg-white py-10 px-4 sm:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
    {/* Text Content */}
    <div className="md:col-span-7">
      <p className="text-sm uppercase text-purple-600 font-semibold tracking-wide mb-4">
        About Us
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
        Why StitchCraft?
      </h2>
      <p className="text-gray-700 text-base sm:text-lg mb-4">
        We were tired of boring, outdated embroidery. StitchCraft was born to
        fuse cutting-edge technology with artisan creativity — delivering
        embroidery that’s fast, bold, and brand-defining.
      </p>
      <p className="text-gray-600 text-base sm:text-lg mb-6">
        Whether it’s uniforms, gifting, or merchandise — you bring the vision,
        we bring the stitch-perfect detail.
      </p>

      {/* CountUp Stats */}
      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 text-left mt-4"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-800">
            {inView && <CountUp end={3} duration={2} suffix="M+" />}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Products Digitized</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-800">
            {inView && <CountUp end={1} duration={2} suffix="K+" />}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-800">
            {inView && <CountUp end={10} duration={2} suffix="+" />}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-800">
            {inView && <CountUp end={25} duration={2} />}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Team Members</p>
        </div>
      </div>
    </div>

    {/* Image Content */}
    <div className="md:col-span-5">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl group h-[300px] sm:h-[380px]">
        <img
          src="/img/about.jpeg"
          alt="Embroidery Machine"
          className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-sm text-purple-800 px-4 py-1 rounded-full font-semibold shadow-md z-20">
          Real Craft in Action
        </div>
      </div>
    </div>
  </div>
</section>
  <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-white to-gray-50 py-10 px-4 sm:px-10"
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Decorative line */}
        <div className="w-14 h-1 bg-purple-600 rounded-full mb-6 mx-auto" />

        {/* Heading */}
        <div className="mb-12 relative">
          <p className="text-sm uppercase text-purple-600 font-semibold tracking-wide mb-2">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-sm mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From vector refinement to flawless digitizing, we deliver excellence in every stitch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Icon in circle */}
              <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center shadow-md mb-4 mx-auto">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {service.desc}
              </p>
              <span className="inline-block text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                {service.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-purple-700 text-white text-sm font-medium rounded-full hover:bg-purple-800 transition"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </motion.section>
    <section>

<Howemake




/>


    </section>









      {/* Other sections if any */}
      <AnimatePresence>
        {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={closeModal} />}
      </AnimatePresence>
      <Toaster />
    </div>
  );
}

export default Home;
