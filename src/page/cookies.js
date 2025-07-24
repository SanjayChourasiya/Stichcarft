import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 bg-gray-900 text-white p-5 rounded-xl shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-4 z-50 border border-purple-700 animate-fade-in">
      <p className="text-sm sm:text-base text-center sm:text-left font-medium leading-relaxed">
       
          We use cookies to improve website functionality, enhance user experience, and analyze performance. You can accept or decline.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleDecline}
          className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-full text-sm shadow transition"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 hover:brightness-110 text-white px-5 py-2 rounded-full text-sm shadow transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
