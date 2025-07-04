import { useState } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    embroidery_needs: "",
  });
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState("Upload Design");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 20 * 1024 * 1024; // 20MB

    if (file.size > maxSize) {
      toast.error("File size exceeds 20MB limit.");
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setFileData({ name: file.name, type: file.type, content: base64 });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fileData) {
      toast.error("Please upload a file (max 20MB).");
      return;
    }

    const loadingToast = toast.loading("Submitting...");
    const payload = { ...formData, file: fileData };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxdOHvU198NLp3uh2VA3ohw_DD0UvMaAED7cmyc5PbbsIMSKp5pOTDdI67494mYz4hmKQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast.dismiss(loadingToast);
      toast.success("Form submitted successfully!");

      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        embroidery_needs: "",
      });
      setFileData(null);
      setFileName("Upload Design");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Submission failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        name="full_name"
        placeholder="Full Name *"
        value={formData.full_name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <input
        name="email_address"
        type="email"
        placeholder="Email Address *"
        value={formData.email_address}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <input
        name="phone_number"
        type="tel"
        placeholder="Phone Number *"
        value={formData.phone_number}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <textarea
        name="embroidery_needs"
        placeholder="Enter your requirements: file format, design size, product/fabric details*"
        rows="4"
        value={formData.embroidery_needs}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded"
      ></textarea>

      <div className="relative border border-gray-300 rounded p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="text-gray-600 truncate">
          {fileName === "Upload Design" ? "Upload Design *" : fileName}
        </label>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Accepted file types: JPG, PNG, PDF, etc. — Max size: 20MB
      </p>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-3 rounded hover:opacity-90 transition shadow"
      >
        Submit Request
      </button>
    </form>
  );
};

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
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800 hover:opacity-90 transition">
          Request a Quote
        </h2>
        <QuoteForm />
      </motion.div>
    </motion.div>
  );
};

export default RequestQuoteModal;
