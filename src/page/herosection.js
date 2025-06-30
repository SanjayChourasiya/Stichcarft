import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    customComponent: "quote",
  },
  {
    customComponent: "journey",
  },
  {
    customComponent: "vectorArt",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderCustomComponent = (type) => {
    if (type === "quote") {
      return (
        <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                Embroidery Digitizing <br /> That Elevates Your Brand
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Fast. Precise. Machine-Ready. From simple logos to complex artwork — we stitch your vision into reality.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold text-sm rounded-full shadow hover:bg-gray-100 transition"
              >
                Get a Free Quote
              </a>
            </div>
            <div className="relative">
              <div className="w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/img/about.jpeg"
                  alt="Embroidery Preview"
                  className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white text-indigo-700 text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                Real Stitch Results
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (type === "journey") {
      return (
        <section className="relative bg-gradient-to-r from-blue-950 via-indigo-800 to-purple-800 text-white py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto text-center space-y-10">
            <div className="space-y-5">
              <h2 className="text-4xl sm:text-5xl font-extrabold">
                Track Your Order Journey
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Follow your embroidery project from upload to delivery — clearly, confidently, and in style.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Upload Artwork",
                  desc: "Kickstart your project by submitting your logo or concept.",
                  icon: "📤",
                },
                {
                  title: "We Digitize",
                  desc: "We transform it into precise, machine-ready embroidery files.",
                  icon: "🧵",
                },
                {
                  title: "Approve Preview",
                  desc: "You get to approve and request tweaks before production.",
                  icon: "✅",
                },
                {
                  title: "Final Delivery",
                  desc: "Receive clean, high-quality files ready for stitching or printing.",
                  icon: "🚚",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl transform transition-all duration-300 hover:scale-[1.03] group"
                >
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:rotate-6">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/80">{step.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#"
                className="inline-block mt-8 px-8 py-3 bg-white text-blue-900 font-semibold text-sm rounded-full shadow hover:bg-gray-100 transition"
              >
                Explore the Full Process
              </a>
            </div>
          </div>
        </section>
      );
    }

    if (type === "vectorArt") {
      return (
        <section className="relative bg-gradient-to-tr from-purple-900 via-pink-700 to-red-600 text-white py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Custom Embroidery & Vector Art
              </h2>
              <p className="text-lg text-white/90">
                We transform your rough ideas into machine-ready vector art and detailed embroidery files. Perfect for printing, stitching, or promotional branding.
              </p>
              <button className="inline-block px-6 py-3 bg-white text-pink-700 font-semibold text-sm rounded-full shadow hover:bg-gray-100 transition">
                Start Your Design
              </button>
            </div>
            <div>
              <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src="https://via.placeholder.com/600x400.png?text=AI+Vector+Art+Preview"
                  alt="Vector Art Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? "block" : "hidden"
          } transition-all duration-700 ease-in-out`}
        >
          {slide.customComponent ? (
            renderCustomComponent(slide.customComponent)
          ) : (
            <>
              {/* Mobile Slide */}
              <div className="relative sm:hidden h-[400px] w-full">
                <img
                  src={slide.mobileImage || slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {!slide.onlyImage && (
                  <div className="absolute inset-0 bg-black/50 flex items-center px-4 z-10">
                    <div className="text-white space-y-4">
                      <h1 className="text-2xl font-bold">{slide.heading1}</h1>
                      <p className="text-sm">{slide.heading2}</p>
                      {slide.button && (
                        <button className="bg-[#4B4FCA] px-4 py-2 rounded-md font-semibold text-white hover:bg-white hover:text-[#4B4FCA] transition">
                          {slide.button}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Slide */}
              <div className="hidden sm:block relative h-[550px] w-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {!slide.onlyImage && (
                  <div className="absolute inset-0 flex items-center justify-start px-10 lg:px-24 bg-black/40">
                    <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-xl space-y-5">
                      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        {slide.heading1}
                      </h1>
                      <p className="text-gray-700">{slide.heading2}</p>
                      {slide.button && (
                        <button className="bg-[#4B4FCA] text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#4B4FCA] border border-[#4B4FCA] transition-all">
                          {slide.button}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowLeft className="text-lg" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowRight className="text-lg" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center items-center space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-[#4B4FCA]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
