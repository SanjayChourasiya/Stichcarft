// App.jsx
import React, { useState, useEffect } from "react";
import CookieBanner from "../src/page/cookies"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import {
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import Privacy from "../src/page/privacy"
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
import GalleryPage from "../src/page/GalleryPage"

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
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 p-2 rounded">
                        <FaPhoneAlt className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-300 whitespace-nowrap">
                        <span className="text-white font-semibold">+91 98765 43210</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 p-2 rounded">
                        <FaEnvelope className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-300 whitespace-nowrap">
                        <span className="text-white font-semibold">info@stitchcraft.co</span>
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-4">
                    <span className="text-gray-400">Follow Us:</span>
                    <div className="flex gap-3">
                      <a href="#" className="p-2 rounded transition">
                        <FaFacebookF className="text-gray-300 hover:text-[#1877F2] transition-colors duration-200" />
                      </a>
                      <a href="#" className="p-2 rounded transition">
                        <FaInstagram className="text-gray-300 hover:text-[#E4405F] transition-colors duration-200" />
                      </a>
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
                <ul className="hidden md:flex items-center space-x-6 font-bold relative">
                  <li>
                    <NavLink to="/" className={navLinkClass}>
                      Home
                    </NavLink>
                  </li>

                  <li className="relative group ">
                    {/* Services dropdown button */}
                    <div className="flex items-center gap-1 cursor-pointer font-bold group-hover:text-[#4B4FCA]">
                      <span>Services</span>
                      <FaChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </div>

                    {/* Dropdown with container padding */}
                    <div className="absolute left-0 top-full mt-0 w-[230px] bg-white shadow-xl rounded-md z-50 hidden group-hover:flex flex-col py-4 px-2 space-y-2">
                      <NavLink
                        to="/emd"
                        className={navLinkClass}
                      >
                        Embroidery Digitising
                      </NavLink>
                      <NavLink
                        to="/Vd"
                        className={navLinkClass}
                      >
                        Vector Artwork Conversion
                      </NavLink>
                    </div>
                  </li>

                  <li>
                    <NavLink to="/gallery" className={navLinkClass}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkClass}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkClass}>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="shine-button hidden md:inline-block ml-4 px-6 py-2 font-bold rounded-lg bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow-md hover:scale-105 transition duration-300"
                >
                  <span className="relative z-10">Upload Your Artwork</span>
                </button>


                <button
                  onClick={() => setIsMobileMenuOpen((m) => !m)}
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
                        onClick={() => setIsMobileServicesOpen((s) => !s)}
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
                    <li><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>


                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                    <li>
                      <button
                        onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                        className="w-full py-2 mt-2 font-bold rounded bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600"
                      >
                       Upload Your Artwork
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
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/privacy" element={<Privacy  />} />


              <Route path="/product/:productName" element={<SingleProductPage />} />
            </Routes>

            {/* Footer */}
          <footer className="bg-[#0e0e16] text-gray-300 mt-20 pt-8 pb-2 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white">StitchCraft</h2>
          <p className="mt-4 text-white text-sm leading-relaxed">
            StichKart is a leading provider of embroidery digitizing services and vector artwork services, trusted by apparel decorators, promotional product companies, embroidery businesses, and print shops around the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-pink-400">Privacy & Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/emd" className="hover:text-pink-400">Embroidery Digitizing</Link></li>
              <li><Link to="/vd" className="hover:text-pink-400">Vector Art</Link></li>
            </ul>
          </div>
        </div>

        <div className="bg-[#161620] rounded-xl p-6 shadow-md">
          <h4 className="text-white text-lg font-semibold mb-4">Get Connected</h4>
          <ul className="text-sm space-y-3 mb-6">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500" />
              support@stitchcraft.com
            </li>
          </ul>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white text-sm font-bold rounded-full shadow hover:scale-105 transition duration-300"
          >
            Get Connected
          </button>
        </div>
      </div>

      <div className="mt-14 border-t border-gray-700 pt-6 px-6 text-sm flex flex-col md:flex-row justify-between items-center p-4">
        <p className="text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} <span className="text-white font-semibold">StitchCraft</span>. All rights reserved.
        </p>
        <div className="flex gap-4 items-center mb-4 md:mb-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-8 object-contain" />
        </div>
      </div>
    </footer>

            {/* Modal */}
            <AnimatePresence>
              {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
            <CookieBanner />
          </>
        )}
      </div>
    </Router>
  );
}
