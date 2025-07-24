import { motion } from "framer-motion";

export default function PrivacyTerms() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white text-gray-800 py-2 px-4 sm:px-8 lg:px-24"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl p-4 sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
            Privacy Policy & Terms
          </h1>
          {/* <p className="text-gray-600 text-lg">Updated July 2025</p> */}
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Privacy Policy</h2>
          <p className="mb-4 text-gray-700">
            Your trust matters to us. We’re committed to protecting your personal and design-related information with the highest standards of confidentiality and care.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>We collect only essential information (e.g., name, email, files) solely to process your orders and communicate with you effectively.</li>
            <li>All data is stored securely using encrypted systems and access is restricted to authorized personnel only.</li>
            <li>We never sell, rent, or share your information with third parties for marketing or commercial purposes.</li>
            <li>Your artwork and files remain your intellectual property and are deleted upon request after project completion.</li>
            <li>Cookies may be used for a smoother browsing experience; you can opt out at any time.</li>
            <li>You have full rights to request, review, or delete any data we store about you at any time—just email us.</li>
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Terms and Conditions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>By uploading artwork, you confirm you have the legal rights or necessary permission to use it.</li>
            <li>We maintain the right to decline any order containing offensive, copyrighted, or policy-violating content.</li>
            <li>Due to the custom nature of our work, payments are non-refundable once the design process begins.</li>
            <li>Final deliverables will be shared in the file formats you request (e.g., DST, AI, SVG, PNG).</li>
            <li>We strive to meet estimated turnaround times and will proactively inform you of any unexpected delays.</li>
            <li>By using our services, you agree to abide by these terms and understand your responsibilities.</li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} StitchCraft. Your privacy and trust are our priority. All rights reserved.
        </div>
      </div>
    </motion.section>
  );
}
