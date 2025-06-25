import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import Herosection from "../page/herosection"



import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

// --- QuoteForm Component (Included directly) ---
const QuoteForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    embroidery_needs: "",
  });

  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState("Upload Design (optional)");
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];
        setFileData({
          name: file.name,
          type: file.type,
          content: base64,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading(
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
        <span>Submitting...</span>
      </div>
    );


    const payload = { ...formData, file: fileData };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxdOHvU198NLp3uh2VA3ohw_DD0UvMaAED7cmyc5PbbsIMSKp5pOTDdI67494mYz4hmKQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      toast.dismiss(loadingToast); // Remove loading toast
      toast.success("Form submitted successfully!", {
        duration: 4000,
        position: "top-center",
      });

      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        embroidery_needs: "",
      });
      setFileData(null);
      setFileName("Upload Design (optional)");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Submission failed: " + error.message, {
        duration: 5000,
        position: "top-center",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email_address"
        placeholder="Email Address"
        value={formData.email_address}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <input
        type="tel"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <textarea
        name="embroidery_needs"
        placeholder="Tell us your embroidery needs..."
        rows="4"
        value={formData.embroidery_needs}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      ></textarea>

      {/* File Upload Field */}
      <div className="relative border border-gray-300 rounded p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
        <input
          type="file"
          name="design_file"
          id="file-upload"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf"
        />
        <label htmlFor="file-upload" className="text-gray-600 truncate">
          {fileName}
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>

      <button
        type="submit"
        className="w-full bg-[#4B4FCA] text-white py-3 rounded hover:bg-[#3B3FBA]"
      >
        Submit Request
      </button>

      {formStatus && (
        <p className="text-center mt-4 font-semibold">
          {formStatus}
        </p>
      )}
    </form>
  );
};

// --- RequestQuoteModal Component (Included directly) ---
const RequestQuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Request a <span className="text-[#4B4FCA]">Quote</span>
        </h2>
        <QuoteForm /> {/* Uses the QuoteForm component defined above */}
      </motion.div>
    </motion.div>
  );
};

// --- Static Data (kept for completeness) ---
const partners = [
  { id: 1, name: "Partner 1", image: "/img/part3.jpeg" },
  { id: 2, name: "Partner 2", image: "/img/images.png" },
  { id: 3, name: "Partner 3", image: "/img/part1.png" },
  { id: 4, name: "Partner 4", image: "/img/trustpartner.png" },
  { id: 5, name: "Partner 5", image: "/img/images.png" },
  { id: 6, name: "Partner 6", image: "/img/part1.png" },
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

// --- FAQSection Component (Included directly) ---
function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState({});
  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-6 md:py-16 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 sm:px-6">
        {/* Left Column: FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-gray-50"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-base sm:text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">{openIndexes[index] ? "−" : "+"}</span>
              </button>

              {openIndexes[index] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 text-gray-700 bg-white rounded-b-lg text-sm sm:text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center items-start md:items-center mt-6 md:mt-0">
          <img
            src="/img/faq.png"
            alt="FAQ Illustration"
            className="w-full max-w-sm h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

// --- PartnerSlider Component (Included directly) ---
function PartnerSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA]  via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-sm">
          Trusted Partner
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
          Empowering brands with reliable service and quality
        </p>
      </div>


      <div
        ref={containerRef}
        className="overflow-hidden flex whitespace-nowrap w-full px-4"
      >
        <motion.div className="flex gap-6" style={{ minWidth: "max-content" }}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-none w-40 h-40 flex justify-center items-center bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>

  );
}

// --- ClientTestimonials Component (Included directly) ---
function ClientTestimonials() {
  return (
    <section className="py-4 md:py-16 bg-white text-gray-900">
      <motion.div
        className="text-center font-bold text-2xl sm:text-3xl mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>What Clients Say About Us</h1>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 border-4 border-blue-500 object-cover"
            />
            <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
              “{testimonial.text}”
            </p>
            <h3 className="mt-4 font-semibold text-lg sm:text-xl text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">{testimonial.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// --- Main Home Component ---
function Home() {
  const categories = ["All Products", "Apparel", "Accessories", "Business"];
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Banner */}
      <Herosection />

      {/* Partner */}
      <PartnerSlider />
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background Decoration */}
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-2xl"></div>

  <div className="max-w-3xl mx-auto text-center relative z-10 mb-16">
    <p className="uppercase text-xs font-semibold text-indigo-600 tracking-widest mb-2">Services</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA]  via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-sm">
      Turning Threads & Pixels Into Perfection
    </h1>
    <p className="mt-4 text-gray-600 text-sm sm:text-base font-medium">
      We bring your designs to life with professional embroidery digitizing, crisp vector art, and dedicated support — every detail crafted with care.
    </p>
  </div>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
    {/* Card 1 */}
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:border hover:border-indigo-300 transition-all duration-300 text-center group">
      <div className="flex justify-center mb-4">
        <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full group-hover:scale-110 transform transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v5m0 0v5a2 2 0 002 2h5m0-12h5a2 2 0 012 2v5m0 0v5a2 2 0 01-2 2h-5" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Vector Art</h3>
      <p className="text-gray-600 text-sm">
        High-quality, scalable artwork for apparel, branding, and print. Delivered in AI, SVG, or EPS formats with clean lines and pro touch.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:border hover:border-purple-300 transition-all duration-300 text-center group">
      <div className="flex justify-center mb-4">
        <div className="bg-purple-100 text-purple-600 p-4 rounded-full group-hover:scale-110 transform transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.105 0-2 .895-2 2s.895 2 2 2m0 0c1.105 0 2-.895 2-2s-.895-2-2-2zm0 0V4m0 8v8m-4-4h8" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Embroidery Digitizing</h3>
      <p className="text-gray-600 text-sm">
        Clean, machine-ready stitch files with flawless detailing — optimized for caps, polos, patches, and more. Fast turnaround guaranteed.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:border hover:border-pink-300 transition-all duration-300 text-center group">
      <div className="flex justify-center mb-4">
        <div className="bg-pink-100 text-pink-600 p-4 rounded-full group-hover:scale-110 transform transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414a1 1 0 000 1.414L20.243 12l-3.293 3.536a1 1 0 000 1.414l1.414 1.414M5.636 18.364l1.414-1.414a1 1 0 001.414 0L12 20.243l3.536-3.293a1 1 0 001.414 0l1.414 1.414" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Priority Support</h3>
      <p className="text-gray-600 text-sm">
        Need revisions, changes, or rework? We’re just a message away with fast replies and unmatched care for every project.
      </p>
    </div>
  </div>
</section>







      {/* Products */}


      {/* Pricing */}
      {/* <section id="pricing" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-[#2C2E55] mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.h2>

          <motion.p
            className="mb-10 sm:mb-16 text-[#5C5F7C] max-w-md sm:max-w-xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transparent, flexible pricing crafted for every need.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                title: "Basic",
                price: "$49",
                features: ["10 items", "Single color", "5-day delivery"],
              },
              {
                title: "Standard",
                price: "$99",
                features: ["25 items", "Multi-color", "3-day delivery"],
              },
              {
                title: "Premium",
                price: "$149",
                features: ["50 items", "2-day delivery", "Full customization"],
              },
            ].map(({ title, price, features }, idx) => (
              <motion.div
                key={title}
                className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto rounded-3xl shadow-md border border-gray-200 p-6 sm:p-8 flex flex-col items-center text-center transition hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C2E55] mb-3">
                  {title}
                </h3>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#4B4FCA] mb-5">
                  {price}
                </div>
                <ul className="text-[#5C5F7C] space-y-2 mb-6 text-sm sm:text-base">
                  {features.map((f, i) => (
                    <li key={i}>✅ {f}</li>
                  ))}
                </ul>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#4B4FCA] text-white py-2.5 rounded-full hover:bg-[#3B3FBA] transition font-semibold"
                  onClick={openModal}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Testimonials */}
      <ClientTestimonials />

      {/* FAQs */}
      <FAQSection />

      {/* Request Quote Modal */}
      <AnimatePresence>
        {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
}

export default Home;