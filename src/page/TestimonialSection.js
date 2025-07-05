import { useRef, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    feedback:
      "Truly the best embroidery experience I've had. From inquiry to delivery — everything was smooth.",
    image: "/img/review.jpeg",
    rating: 5,
  },
  {
    name: "Riya Mehta",
    feedback:
      "Super fast, very responsive, and the stitching quality was mind-blowing.",
    image: "/img/rev5.jpg",
    rating: 5,
  },
  {
    name: "John Doe",
    feedback:
      "They digitized our brand logo exactly how we imagined. Highly recommended!",
    image: "/img/rev3.jpg",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    feedback:
      "Loved the attention to detail. We received compliments from our customers too!",
    image: "/img/rev4.jpg",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationId;
    const speed = 0.6;

    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += speed;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft >= scrollWidth - clientWidth) {
          containerRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-2 bg-[#f9f9ff]">
         <div className="w-14 h-1 bg-[#4B4FCA] rounded-full mb-6 mx-auto" />
          <p className="text-sm text-center uppercase text-[#4B4FCA] font-semibold tracking-wide ">
           Testimonial
          </p>
      <div className="text-center mb-12">
        <h2 className="text-4xl p-2 font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-700 to-pink-500 text-transparent bg-clip-text">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2 ">Genuine words from real people</p>
      </div>

      <div ref={containerRef} className="overflow-hidden px-4 w-full">
        <div className="flex gap-10 min-w-max pb-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="flex-none w-80 p-8 bg-white rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#4B4FCA] mb-5"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
              <div className="flex justify-center text-yellow-400 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                “{item.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
