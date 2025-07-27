import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "accepted") {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);

    toast.custom((t) => (
      <div className="px-5 py-3 rounded-xl shadow-2xl flex items-center gap-4 text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 animate-slide-in">
        <span className="text-xl">✅</span>
        <div>
          <p className="text-base font-bold">Thank you! Cookies accepted.</p>
        </div>
      </div>
    ), {
      duration: 2000,
      position: "top-center",
    });
  };

  const handleDecline = () => {
    toast.custom((t) => (
      <div className="px-5 py-3 rounded-xl shadow-2xl flex items-center gap-4 text-white bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 animate-slide-in">
        <span className="text-xl">⚠️</span>
        <div>
          <p className="text-base font-bold">Oops! You’ve declined cookies.</p>
        </div>
      </div>
    ), {
      duration: 1000,
      position: "top-center",
    });

    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="fixed bottom-5 left-4 right-4 sm:left-8 sm:right-8 bg-[#1f1f1f] text-white px-6 py-5 rounded-2xl shadow-2xl z-50 border border-purple-700 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm sm:text-base leading-relaxed font-medium text-white/90">
              We use cookies to improve website functionality, enhance user experience,
              and analyze performance. You can accept or decline.
            </p>
          </div>

          <div className="flex justify-center sm:justify-end gap-3 flex-wrap">
            <button
              onClick={handleDecline}
              className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-full text-sm font-medium transition"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 hover:brightness-110 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
