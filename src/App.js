// App.js
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
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    embroidery_needs: "",
  });
  const [fileName, setFileName] = useState("Upload your design file");
  const [formStatus, setFormStatus] = useState("");
 
  

  // ✅ Add this:
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
      <div className="min-h-screen bg-gray-100">
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Header */}
<header className="sticky top-0 z-50 bg-white shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
    {/* Logo */}
    <Link
      to="/"
      className="text-xl sm:text-2xl font-extrabold text-black hover:text-[#4B4FCA]"
    >
      Stitch<span className="text-[#4B4FCA]">Craft</span>
    </Link>

    {/* Desktop Nav */}
    <ul className="hidden md:flex space-x-6 text-sm md:text-base font-lg font-bold text-gray-700">
      {["Home", "About us", "Product", "Blog"].map((item) => (
        <li key={item}>
          <a
            href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
            className="hover:text-[#4B4FCA] transition-colors duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <button
      onClick={() => setIsModalOpen(true)}
      className="ml-4 bg-[#4B4FCA] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
    >
      Get a Quote
    </button>
  </div>

  {/* Mobile Scrollable Nav */}
  <div className="md:hidden w-full overflow-x-auto px-4 pb-2">
    <ul className="flex space-x-6 text-sm font-medium text-gray-700 whitespace-nowrap">
      {["Home", "About us", "Product", "Blog", "Contact us"].map((item) => (
        <li key={item}>
          <a
            href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
            className="hover:text-[#4B4FCA] transition-colors duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
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

            {/* Quote Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white w-full max-w-xl p-4 sm:p-6 rounded-xl shadow-lg relative max-h-[90vh] overflow-y-auto"
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
                  >
                    ×
                  </button>
                  <h2 className="text-3xl font-bold mb-1 mt-2 text-center text-black">
                    Request a <span className="text-[#4B4FCA]">Quote</span>
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white p-6 sm:p-8 rounded-md "
                  >
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      className="w-full p-2 border border-[#D1D5FA] rounded"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email Address"
                      className="w-full p-3 border border-[#D1D5FA] rounded"
                      value={formData.email_address}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-[#D1D5FA] rounded"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="embroidery_needs"
                      placeholder="Tell us your embroidery needs..."
                      rows="4"
                      className="w-full p-3 border border-[#D1D5FA] rounded"
                      value={formData.embroidery_needs}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="relative border border-[#D1D5FA] rounded p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
                      <input
                        type="file"
                        id="file-upload"
                        name="design_file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload" className="text-gray-600 truncate mr-2">
                        {fileName}
                      </label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#4B4FCA]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-[#4B4FCA] text-white py-3 rounded hover:bg-[#3B3FBA] transition font-semibold"
                    >
                      Submit Request
                    </motion.button>
                    {formStatus && (
                      <p
                        className={`text-center text-sm font-semibold ${formStatus.includes("successfully")
                            ? "text-green-600"
                            : "text-red-600"
                          }`}
                      >
                        {formStatus}
                      </p>
                    )}
                  </form>
                </motion.div>
              </div>
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
