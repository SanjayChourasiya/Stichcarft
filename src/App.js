// App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";


import ScrollToTop from "../src/page/ScrollToTop";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/Contact";
import Blog from "./page/blog";
import Loader from "./page/Loder";
import Product from "./page/product";
import SingleProductPage from "./page/Productpage";
import Ditizing from "../src/page/EmbroideryDigitizing";
import Vector from "../src/page/VectorArt";
import RequestQuoteModal from "../src/page/RequestQuoteModal";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
  isActive
    ? "bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent font-bold"
    : "text-gray-700 hover:bg-gradient-to-r hover:from-[#4B4FCA] hover:via-purple-800 hover:to-pink-600 hover:bg-clip-text hover:text-transparent font-bold transition";


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-100">
        {loading ? (
          <Loader />
        ) : (
          <>
            <header className="sticky top-0 z-50 bg-white shadow-md overflow-visible">
              {/* Top Bar */}
              <div className="w-full bg-[#1e1f26] text-white text-sm md:text-base py-2">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                  {/* Left Side: Contact Info */}
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 p-2 rounded">
                        <FaPhoneAlt className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-300 whitespace-nowrap">
                        <span className="text-white font-semibold">+91 98765 43210</span>
                      </span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 p-2 rounded">
                        <FaEnvelope className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-300 whitespace-nowrap">
                        <span className="text-white font-semibold">info@stitchcraft.co</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Social Icons (Only show on md and up) */}
                  <div className="hidden md:flex items-center gap-4">
                    <span className="text-gray-400">Follow Us:</span>
                    <div className="flex gap-3">
                      {/* Facebook */}
                      <a href="#" className="p-2 rounded transition">
                        <FaFacebookF className="text-gray-300 hover:text-[#1877F2] transition-colors duration-200" />
                      </a>

                      {/* Instagram */}
                      <a href="#" className="p-2 rounded transition">
                        <FaInstagram className="text-gray-300 hover:text-[#E4405F] transition-colors duration-200" />
                      </a>

                      {/* LinkedIn */}
                      <a href="#" className="p-2 rounded transition">
                        <FaLinkedinIn className="text-gray-300 hover:text-[#0077B5] transition-colors duration-200" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
              {/* Main Nav */}
              <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
                <Link
                  to="/"
                  className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent hover:brightness-110 transition"
                >
                  StitchCraft
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6 font-bold">
                  <li>
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                  </li>
                  <li className="relative group inline-block">
                    <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#4B4FCA]">
                      <span className="font-bold">Services</span>
                      <FaChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </div>
                    <ul className="absolute left-0 top-full mt-1 w-[250px] bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                      <li>
                        <NavLink to="/emd" className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent font-bold"
                            : "block px-4 py-2 hover:bg-gray-100"}>Embroidery Digitising</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Vd" className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent font-bold"
                            : "block px-4 py-2 hover:bg-gray-100"}>Vector Artwork Conversion</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
                  </li>
                </ul>

                {/* “Let’s Get Started” Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hidden md:inline-block ml-4 px-6 py-2 font-bold rounded-lg bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow-md hover:scale-105 transition duration-300"
                >
                  Let’s Get Started!
                </button>

                {/* Mobile Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(m => !m)}
                  className="block md:hidden px-4 py-2 font-bold text-white bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 rounded shadow hover:opacity-90 transition"
                >
                  {isMobileMenuOpen ? "✕ Close" : "☰ Menu"}
                </button>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 bg-gray-800 text-white">
                  <ul className="space-y-2 text-base">
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                    <li>
                      <button
                        onClick={() => setIsMobileServicesOpen(s => !s)}
                        className="flex items-center justify-between w-full py-2"
                      >
                        Services {isMobileServicesOpen ? "▲" : "▼"}
                      </button>
                      {isMobileServicesOpen && (
                        <ul className="ml-4 space-y-1">
                          <li><Link to="/emd" onClick={() => setIsMobileMenuOpen(false)}>Embroidery Digitising</Link></li>
                          <li><Link to="/Vd" onClick={() => setIsMobileMenuOpen(false)}>Vector Artwork Conversion</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                    <li>
                      <button
                        onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                        className="w-full py-2 mt-2 font-bold rounded bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600"
                      >
                        Get Started Free
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </header>


            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/product" element={<Product />} />
              <Route path="/emd" element={<Ditizing />} />
              <Route path="/Vd" element={<Vector />} />
              <Route path="/product/:productName" element={<SingleProductPage />} />
            </Routes>

            {/* Footer + Modal */}
            <footer className="bg-[#0e0e16] text-gray-300 mt-20 py-8">
              {/* … your footer … */}
            </footer>
            <AnimatePresence>
              {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
          </>
        )}
      </div>
    </Router>
  );
}
