// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import ScrollToTop from "../src/page/ScrollToTop"

import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/Contact";
import Blog from "./page/blog";
import Loader from "./page/Loder";
import Product from "./page/product";
import SingleProductPage from "./page/Productpage";
import Ditizing from "../src/page/EmbroideryDigitizing"
import Vector from "../src/page/VectorArt"
import RequestQuoteModal from "../src/page/RequestQuoteModal";
function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  //  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState({});

  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    embroidery_needs: "",
  });
  const [fileName, setFileName] = useState("Upload your design file");
  const [formStatus, setFormStatus] = useState("");

  const productRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) {
        setIsProductDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  // const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "Upload your design file");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormStatus("Request submitted successfully!");
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        embroidery_needs: "",
      });
      setFileName("Upload your design file");
    }, 1000);
  };

  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-100">
        {loading ? (
          <Loader />
        ) : (
          <>

            <header className="sticky top-0 z-50 bg-white shadow-md">
              {/* Top Header Bar - visible on all screens with responsive layout */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-3 md:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-6 w-full max-w-7xl mx-auto">

                  {/* Contact Info */}
                  <div className="flex justify-center md:justify-start items-center gap-6 flex-wrap text-sm md:text-base">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-2 hover:text-[#4B4FCA] transition"
                    >
                      <FaPhoneAlt className="w-5 h-5 text-white" />
                      <span>+91 9876543210</span>
                    </a>
                    <a
                      href="mailto:info@stitchcraft"
                      className="flex items-center gap-2 hover:text-[#4B4FCA] transition"
                    >
                      <FaEnvelope className="w-5 h-5 text-white" />
                      <span>info@stitchcraft</span>
                    </a>
                  </div>

                  {/* Social Icons: hidden on mobile, visible on desktop */}
                  <div className="hidden md:flex items-center gap-6">
                    <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2] transition">
                      <FaTwitter size={22} />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-[#1877F2] transition">
                      <FaFacebook size={22} />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-[#C13584] transition">
                      <FaInstagram size={22} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-[#0077B5] transition">
                      <FaLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>


              {/* Main Header */}
              <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
                <Link
                  to="/"
                  className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent hover:brightness-110 transition"
                >
                  StitchCraft
                </Link>

                {/* Desktop Navbar */}
                <ul className="hidden md:flex space-x-6 text-sm md:text-base font-bold text-gray-700 items-center relative">
                  <li><Link to="/">Home</Link></li>

                  {/* Services Dropdown */}
                  <li className="relative group" ref={servicesRef}>
                    {/* Trigger */}
                    <div className="flex items-center gap-1 hover:text-[#4B4FCA] cursor-pointer">
                      Services
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Dropdown */}
                    <ul className="absolute left-0 top-full mt-1 w-[200px] bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                      <li>
                        <a
                          href="#bulk"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Embroidery Digitising
                        </a>
                      </li>
                      <li>
                        <a
                          href="#branding"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Vector Artwork
                        </a>
                      </li>
                    </ul>
                  </li>


                  {/* New Gallery Dropdown */}
                  <li><Link to="/">Gallery </Link></li>

                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>

                <button
                  onClick={openModal}
                  className="relative overflow-hidden hidden md:inline-block ml-4 font-bold py-2 px-6 rounded-lg bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow-md hover:scale-105 transform transition duration-300"
                >
                  <span className="relative z-10">Let’s Get Started!</span>
                  <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 transform skew-x-[-20deg] animate-shine"></span>
                </button>



                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="block md:hidden text-sm font-bold text-white bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 px-4 py-3 rounded shadow hover:opacity-90 transition"
                >
                  {isMobileMenuOpen ? '✕ Close' : '☰ Menu'}
                </button>
              </div>


              {/* Mobile Navbar */}
              <div className="md:hidden px-4 pb-2">
                {isMobileMenuOpen && (
                  <ul className="mt-4 space-y-2 text-base font-medium bg-gray-800 text-white p-4 rounded-md">
                    <li><Link to="/" className="block py-1 border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="block py-1 border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                    <li>
                      <button
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full py-1 border-b border-gray-700"
                      >
                        Services
                        <span>{isMobileServicesOpen ? "▲" : "▼"}</span>
                      </button>
                      {isMobileServicesOpen && (
                        <ul className="ml-4 mt-2 space-y-1 text-sm">
                          <li><a href="#bulk" onClick={() => { setIsMobileServicesOpen(false); setIsMobileMenuOpen(false); }}>Embroidery Digitising</a></li>
                          <li><a href="#branding" onClick={() => { setIsMobileServicesOpen(false); setIsMobileMenuOpen(false); }}>Vector Artwork Conversion</a></li>
                        </ul>
                      )}
                    </li>
                    {/* <li><Link to="/" className="block py-1 border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li> */}
                    <li><Link to="/contact" className="block py-1 border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                    <li>
                      <button
                        onClick={() => {
                          openModal();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-2 rounded mt-2 font-bold hover:opacity-90 transition"
                      >
                        Get Started Free
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </header>


            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/product" element={<Product />} />
              <Route path="/emd" element={< Ditizing />} />
              <Route path="/Vd" element={< Vector />} />
              <Route path="/product/:productName" element={<SingleProductPage />} />
            </Routes>

            {/* Footer */}
            <footer className="bg-[#0e0e16] text-gray-300 mt-20 pt-8 pb-2 relative z-10">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* 1. Logo & Description */}
                <div>
                  <h2 className="text-3xl font-bold text-white">StitchCraft</h2>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    StichKart is a leading provider of embroidery digitizing services and vector artwork services, trusted by apparel decorators, promotional product companies, embroidery businesses, and print shops around the globe
                  </p>
                </div>

                {/* 2. Navigation */}
                <div className="grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      <li><a href="/" className="hover:text-pink-400">Home</a></li>
                      <li><a href="#about" className="hover:text-pink-400">About Us</a></li>
                      <li><a href="#contact" className="hover:text-pink-400">Contact Us</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                      <li><a href="#embroidery" className="hover:text-pink-400">Embroidery Digitizing</a></li>
                      <li><a href="#vector" className="hover:text-pink-400">Vector Art</a></li>
                    </ul>
                  </div>
                </div>

                {/* 3. Get Connected Box */}
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
                    onClick={openModal}
                    className="w-full px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white text-sm font-bold rounded-full shadow hover:scale-105 transition duration-300"
                  >
                    Get Connected
                  </button>
                </div>
              </div>

              {/* Bottom Line with Payment & Copyright */}
              <div className="mt-14 border-t border-gray-700 pt-6 px-6 text-sm flex flex-col md:flex-row justify-between items-center p-4 ">
                {/* Copyright */}
                <p className="text-gray-400 text-center md:text-right">
                  © {new Date().getFullYear()} <span className="text-white font-semibold">StitchCraft</span>. All rights reserved.
                </p>
                {/* Payment Methods */}
                <div className="flex gap-4 items-center mb-4 md:mb-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                    alt="Visa"
                    className="h-6 object-contain"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    alt="MasterCard"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                    alt="PayPal"
                    className="h-8 object-contain"
                  />
                  <img
                    src="/img/rupay.png"
                    alt="RuPay"
                    className="h-8 object-contain"
                  />
                </div>


              </div>
            </footer>

            <AnimatePresence>
              {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>

            <Toaster />
            {/* Modal */}
            {/* (Modal code remains unchanged...) */}

          </>
        )}
      </div>
    </Router>

  );
}

export default App;
