import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageCircle,
  Upload,
  Clock4,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    embroidery_needs: "",
  });
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState("Upload a file");

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
      await fetch(
        "https://script.google.com/macros/s/AKfycbxdOHvU198NLp3uh2VA3ohw_DD0UvMaAED7cmyc5PbbsIMSKp5pOTDdI67494mYz4hmKQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      toast.dismiss(loadingToast);
      toast.success("Form submitted successfully!");
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        embroidery_needs: "",
      });
      setFileData(null);
      setFileName("Upload a file");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Submission failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6 bg-white shadow-xl rounded-xl p-6">
        {/* Help & Support */}
        <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md space-y-6 border border-gray-200">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent">
            Help & Support
          </h2>
          <p className="text-black text-sm">
            We’re here to assist you with any queries or artwork needs.
          </p>

          <div className="space-y-4 text-sm text-gray-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-base font-medium">
                support@ditizingkart.com
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-base font-medium">+91 9876543210</span>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-yellow-100 rounded-full">
                <Clock4 className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-base font-semibold">Support Hours</p>
                <p className="text-sm text-gray-600">Monday – Saturday</p>
                <p className="text-sm text-gray-600 font-medium">
                 5:30 AM – 2:30 PM (BST)
                 {/* 4:30 AM – 1:30 PM (GMT) */}


                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white p-4 rounded-xl shadow-md space-y-4">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent">
            Hi, Send Your Artwork – Let's Get Started.
          </h2>
          <p className="text-gray-700 text-center text-sm">
            Feel free to ask for details, don’t hold back!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name *"
                required
                value={formData.full_name}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email Address *"
                required
                value={formData.email_address}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
            </div>
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone Number *"
              required
              pattern="\d{10}"
              maxLength="10"
              value={formData.phone_number}
              onChange={handleChange}
              title="Phone number must be exactly 10 digits"
              className="p-3 border rounded-lg w-full"
            />
            <textarea
              name="embroidery_needs"
              placeholder="Requirements: File Format, Design Size, Fabric, etc. *"
              rows="4"
              required
              value={formData.embroidery_needs}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
            ></textarea>

            {/* File Upload */}
            <div className="relative border border-dashed border-gray-400 p-4 rounded-lg bg-gray-50">
              <label
                htmlFor="file-upload"
                className="flex items-center justify-between cursor-pointer"
              >
                <span className="text-sm font-medium text-indigo-600">
                  {fileName}
                </span>
                <Upload className="w-5 h-5 text-indigo-600" />
              </label>
              <input
                type="file"
                id="file-upload"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Accepted file types: JPG, PNG, PDF, etc. — Max size: 20MB
            </p>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white text-lg font-bold rounded-full shadow hover:scale-105 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
