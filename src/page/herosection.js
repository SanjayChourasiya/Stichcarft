import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import RequestQuoteModal from "../page/RequestQuoteModal";
import { Toaster } from "react-hot-toast";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = ["quote", "journey", "vectorArt"];

  const headingVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 8000);
    };
    const stopAutoScroll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    if (!isPaused) startAutoScroll();
    return () => stopAutoScroll();
  }, [isPaused, slides.length]);


  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  const sliderRef = useRef(null);

  const renderSlide = (type) => {
    const animationProps = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
      transition: { duration: 0.6 },
    };

    if (type === "quote") {
      return (
        <motion.section
          className="h-auto sm:h-[80vh] bg-[#150818] text-white flex items-center justify-center overflow-hidden px-4 sm:px-12 py-10 sm:py-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left space-y-6 z-10">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={headingVariant}
                className="text-2xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text animate-headingGlow"
              >
                Embroidery Digitizing <br className="hidden sm:block" />
                That Elevates Your Brand
              </motion.h1>
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={headingVariant}
                className="text-sm sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0"
              >
                Fast. Precise. Machine-Ready. From simple logos to complex artwork — we stitch your vision into reality.
              </motion.p>
              <motion.button
                custom={3}
                initial="hidden"
                animate="visible"
                variants={headingVariant}
                onClick={() => setIsModalOpen(true)}
                className="shine-button w-full md:w-auto text-lg py-3 px-6 rounded-lg bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow-md hover:scale-105 transition duration-300"
              >
                <span className="relative z-10">Get a Free Quote</span>
              </motion.button>
            </div>
            <div className="relative flex justify-center md:justify-end h-auto sm:h-[100vh] bg-[#150818] sm:bg-transparent">
              <div className="absolute inset-0 sm:bg-gradient-to-br sm:from-[#4B4FCA]/30 sm:via-purple-800/20 sm:to-pink-600/30 z-0 rounded-lg" />
              <img
                src="/img/co4.png"
                alt="Parrot"
                className="h-[300px] sm:h-full w-auto object-contain relative z-10"
              />
            </div>
          </div>
        </motion.section>
      );
    }

    if (type === "journey") {
      const steps = [
        { icon: "📤", title: "Step 1", desc: "Upload your logo or artwork (JPG, PNG, PDF, etc.)." },
        { icon: "📩", title: "Step 2", desc: "Get a quote and preview within 1–3 hours." },
        { icon: "💳", title: "Step 3", desc: "Approve and pay via PayPal,or bank transfer." },
        { icon: "📧", title: "Step 4", desc: "Receive final files via email within 12–24 hours." },
      ];

      const visibleSteps = steps;

      return (
        <motion.section
          className="relative bg-gradient-to-r from-blue-950 via-indigo-800 to-purple-800 text-white h-fit sm:min-h-[60vh] flex items-center px-4 sm:px-12 py-10 sm:py-16 overflow-hidden"
          {...animationProps}
        >
          <div className="relative z-10 max-w-7xl mx-auto w-full text-center space-y-6 sm:space-y-10">
            <div className="space-y-3 sm:space-y-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 sm:mb-4">
                How It Works
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Follow your embroidery project from upload to delivery — clearly, confidently, and in style.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {visibleSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition"
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{step.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-white text-blue-900 font-semibold text-sm rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
            >
              Start Building Yours
            </button>

          </div>
        </motion.section>

      );
    }

    if (type === "vectorArt") {
      return (
        <motion.section
          className="relative bg-gradient-to-tr from-purple-900 via-pink-700 to-red-600 text-white px-4 sm:px-12 "
          {...animationProps}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* Left Text Content */}
            <div className="pt-10 sm:pt-0 space-y-5 sm:space-y-8 text-center sm:text-left">
              <h1 className="text-xl sm:text-5xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-2">
                Vector Art That Amplifies Your Brand
              </h1>

              <p className="text-sm sm:text-lg text-white/90 mb-4 sm:mb-6 max-w-md sm:max-w-xl mx-auto sm:mx-0">
                Crisp. Scalable. Print-Ready. From bold graphics to detailed illustrations — we convert your ideas into flawless vector designs.
              </p>

              <motion.button
                custom={3}
                initial="hidden"
                animate="visible"
                variants={headingVariant}
                onClick={() => setIsModalOpen(true)}
                className="shine-button w-full sm:w-auto text-base sm:text-lg py-3 px-6 rounded-lg bg-gradient-to-r text-white shadow-md hover:scale-105 transition duration-300"
              >
                <span className="relative z-10">Get a Free Quote</span>
              </motion.button>
            </div>


            {/* Right Static Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-full px-2 sm:px-4"
            >
              <div className="max-w-xl mx-auto relative flex items-center justify-center">
                {/* Glowing Background */}
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 blur-3xl opacity-60 rounded-full z-0 animate-pulse" />

                {/* Foreground Image */}
                <img
                  src="/img/slv4.png"
                  alt="Vector Art Example"
                  className="relative z-10 w-full h-auto object-contain"
                />
              </div>
            </motion.div>

          </div>
        </motion.section>

      );
    }

    return null;
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <div key={currentIndex}>{renderSlide(slides[currentIndex])}</div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-30">
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)} className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100">
          <FaArrowLeft className="text-lg" />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-30">
        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)} className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100">
          <FaArrowRight className="text-lg" />
        </button>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center items-center space-x-2 z-30">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? "bg-white scale-125" : "bg-white/40"}`} />
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <Toaster />
    </section>
  );
}
