import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const slides = [
  {
    image: "/img/slide4.jpeg", // Desktop image
    mobileImage: "/img/slidemob.png", // Mobile-specific image
    onlyImage: true,
  },
  {
    image: "/img/em28.jpeg",
    heading1: "Custom Embroidery Designs",
    heading2:
      "Make your brand shine with unique, high-resolution embroidery patterns designed specifically for fashion labels, promotional events, sports uniforms, and corporate branding. Crafted for both beauty and durability, our designs ensure your apparel makes a bold statement.",
    button: "View Designs",
  },
  {
    image: "/img/em20.jpeg",
    heading1: "How We Work",
    heading2:
      "From your first inquiry to the final stitch, our process is built around speed, precision, and transparent communication. Our expert team ensures a seamless workflow, delivering top-tier digitized designs with quick turnaround and reliable service every step of the way.",
    button: "Know More",
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
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden pb-12"
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
          <>
            {/* Mobile Slide */}
            <div className="relative sm:hidden h-[350px] w-full">
              <img
                src={slide.mobileImage ? slide.mobileImage : slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {!slide.onlyImage && (
                <>
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 z-10 flex items-center px-4">
                    <div className="text-white space-y-3 w-full">
                      <h1 className="text-2xl font-bold drop-shadow-md">
                        {slide.heading1}
                      </h1>
                      <p className="text-sm font-medium drop-shadow-md">
                        {slide.heading2}
                      </p>
                      {slide.button && (
                        <button className="mt-2 bg-[#4B4FCA] text-white hover:bg-white hover:text-[#4B4FCA] font-semibold px-4 py-2 rounded-md transition shadow">
                          {slide.button}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Desktop Slide */}
            <div className="hidden sm:block relative h-[690px]">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {!slide.onlyImage && (
                <div className="absolute inset-0 z-20 flex items-center justify-start px-10 lg:px-24">
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl max-w-xl w-full shadow-xl space-y-6">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
                      {slide.heading1}
                    </h1>
                    <p className="text-lg text-gray-800">{slide.heading2}</p>
                    {slide.button && (
                      <button className="bg-[#4B4FCA] text-white hover:bg-white hover:text-[#4B4FCA] border-2 border-[#4B4FCA] transition-all duration-300 font-semibold px-6 py-3 rounded-md shadow-md">
                        {slide.button}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 px-2 sm:px-6">
        <button
          onClick={prevSlide}
          className="bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition"
        >
          <FaArrowLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 px-2 sm:px-6">
        <button
          onClick={nextSlide}
          className="bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition"
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center items-center space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === i ? "bg-[#4B4FCA]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
