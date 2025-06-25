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

import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/Contact";
import Blog from "./page/blog";
import Loader from "./page/Loder";
import Product from "./page/product";
import SingleProductPage from "./page/Productpage";

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-100">
        {loading ? (
          <Loader />
        ) : (
          <>
            <header className="sticky top-0 z-50 bg-white shadow-md">
              <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 ">
                <Link
                  to="/"
                  className="text-xl sm:text-2xl font-extrabold text-black hover:text-[#4B4FCA]"
                >
                  Stitch<span className="text-[#4B4FCA]">Craft</span>
                </Link>

                {/* Desktop Navbar */}
                <ul className="hidden md:flex space-x-6 text-sm md:text-base font-bold text-gray-700 items-center relative">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About us</Link></li>

                  {/* Product Dropdown */}
                  <li className="relative" ref={productRef}>
                    <button
                      onClick={() => setIsProductDropdownOpen((prev) => !prev)}
                      className="flex items-center gap-1 hover:text-[#4B4FCA]"
                    >
                      Prod
                      <svg className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isProductDropdownOpen && (
                      <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-44 z-50">
                        <li><Link to="/product" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProductDropdownOpen(false)}>All Products</Link></li>

                      </ul>
                    )}
                  </li>

                  {/* Services Dropdown */}
                  <li className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                      className="flex items-center gap-1 hover:text-[#4B4FCA]"
                    >
                      Services
                      <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesDropdownOpen && (
                      <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-64 z-50">
                        <li>
                          <a
                            href="#bulk"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            Embroidery Digitising
                          </a>
                        </li>
                        <li>
                          <a
                            href="#branding"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            Vector Artwork
                          </a>
                        </li>
                      </ul>

                    )}
                  </li>

                  <li><Link to="/blog">Blog</Link></li>
                </ul>

                <button
                  onClick={openModal}
                  className="hidden md:inline-block ml-4 bg-[#4B4FCA] text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  Get a Quote
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="block lg:hidden text-sm font-bold text-white bg-[#4B4FCA] px-4 py-3 rounded shadow"
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
                        onClick={() => setIsMobileProductOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full py-1 border-b border-gray-700"
                      >
                        Product
                        <span>{isMobileProductOpen ? "▲" : "▼"}</span>
                      </button>
                      {isMobileProductOpen && (
                        <ul className="ml-4 mt-2 space-y-1 text-sm">
                          {/* <li><Link to="/product" onClick={() => { setIsMobileProductOpen(false); setIsMobileMenuOpen(false); }}>Po</Link></li> */}
                          <li><Link to="/" onClick={() => { setIsMobileProductOpen(false); setIsMobileMenuOpen(false); }}>Shirts</Link></li>
                          <li><Link to="/" onClick={() => { setIsMobileProductOpen(false); setIsMobileMenuOpen(false); }}>Caps</Link></li>
                          <li><Link to="/" onClick={() => { setIsMobileProductOpen(false); setIsMobileMenuOpen(false); }}>Hoodies</Link></li>
                          <li><Link to="/" onClick={() => { setIsMobileProductOpen(false); setIsMobileMenuOpen(false); }}>Jackets</Link></li>
                        </ul>
                      )}
                    </li>
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
                          <li><a href="#bulk" onClick={() => { setIsMobileServicesOpen(false); setIsMobileMenuOpen(false); }}>Embroidery digitising</a></li>
                          <li><a href="#branding" onClick={() => { setIsMobileServicesOpen(false); setIsMobileMenuOpen(false); }}>Vector Artwork Conversion</a></li>
                        </ul>
                      )}
                    </li>
                    <li><Link to="/" className="block py-1 border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/" className="block py-1 border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                    <li>
                      <button
                        onClick={() => {
                          openModal();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-[#4B4FCA] text-white py-2 rounded mt-2 font-bold"
                      >
                        Get a Quote
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
              <Route path="/product/:productName" element={<SingleProductPage />} />
            </Routes>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-12">
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                <div>
                  <h2 className="text-xl font-bold">Diziting Kart</h2>
                  <p className="mt-3 text-gray-400 text-sm">
                    Empowering local businesses and customers with a seamless
                    shopping experience. Shop local, shop smart with Diziting Kart!
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Categories</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Groceries</li>
                    <li>Home Essentials</li>
                    <li>Fashion</li>
                    <li>Electronics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Seller Services</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Sell on Diziting Kart</li>
                    <li>Vendor Support</li>
                    <li>Seller Dashboard</li>
                    <li>Promote Your Products</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/product">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Follow Us</h3>
                  <div className="mt-4 flex space-x-4">
                    <FaFacebook size={20} />
                    <FaTwitter size={20} />
                    <FaInstagram size={20} />
                    <FaLinkedin size={20} />
                    <FaYoutube size={20} />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-4 text-xs sm:text-sm">
                © {new Date().getFullYear()} Diziting Kart. All rights reserved.
              </div>
            </footer>

            {/* Modal */}
            {/* (Modal code remains unchanged...) */}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
