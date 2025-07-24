import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function ThankYouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger celebration confetti burst
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Thank You Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center relative z-10"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your embroidery service request has been received. We'll get back to you shortly with the details.
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white py-3 rounded hover:opacity-90 transition shadow text-sm sm:text-base"
        >
          Back to Home
        </button>
      </motion.div>
    </motion.div>
  );
}
