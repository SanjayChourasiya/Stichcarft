import React, { useState } from "react";
import { Mail, Phone, Users, FileText, User, MessageCircle, Upload } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function ContactPage() {
  const [result, setResult] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "fd0af42c-c6cb-43b3-8ae4-e8d6a8e1551f");

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setSelectedFile(null);
      toast.success("Form submitted successfully!");
    } else {
      setResult(data.message);
      toast.error("Form submission failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-4 bg-white shadow-lg rounded-xl p-6">
        {/* Contact Info Panel */}
        <div className="md:col-span-1 space-y-6 bg-gray-100 p-6 rounded-xl">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent">
            Help & Support
          </h2>
          {/* <p className="text-gray-700 text-sm">Have a question or issue? Contact us:</p> */}
          <div className="space-y-4">

            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-800 text-sm">support@ditizingkart.com</span>
            </div>

          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-gray-800 text-sm">+91 9876543210</span>
          </div>
        </div>

        {/* Form Panel */}
        <div className="md:col-span-2 p-2 space-y-2 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 bg-clip-text text-transparent">
            Hi, How Can We Help?
          </h2>
          <p className="text-gray-700 text-center text-sm">
            Feel free to ask for details, don't save any questions!
          </p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name *"
                  required
                  className="pl-10 p-3 border rounded-lg w-full"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email *"
                  required
                  className="pl-10 p-3 border rounded-lg w-full"
                />
              </div>
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-500" />
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number *"
                required
                className="pl-10 p-3 border rounded-lg w-full"
              />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-500" />
              <textarea
                name="message"
                placeholder="Enter your requirements: file format, design size, product/fabric details. *"
                maxLength="500"
                className="pl-10 p-3 border rounded-lg w-full h-32"
                required
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="relative border border-dashed border-gray-400 p-4 rounded-lg bg-gray-50">
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Upload className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-600">
                  {selectedFile ? `Selected: ${selectedFile.name}` : "Upload a file"}
                </span>
              </label>
              <input
                type="file"
                id="file-upload"
                name="file "
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />

            </div>
            <p className="text-sm text-gray-500 mt-1">
              Accepted file types: JPG, PNG, PDF, etc. — Max size: 20MB
            </p>

            {/* Submit Button */}
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
