import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Partner 1", image: "/img/part3.jpeg" },
  { id: 2, name: "Partner 2", image: "/img/images.png" },
  { id: 3, name: "Partner 3", image: "/img/part1.png" },
  { id: 4, name: "Partner 4", image: "/img/trustpartner.png" },
  { id: 5, name: "Partner 5", image: "/img/images.png" },
  { id: 6, name: "Partner 6", image: "/img/part1.png" },
];

function PartnerSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow-sm">
          Trusted Partner
        </h1>
        <p className="mt-2 text-gray-600 font-medium">
          Empowering brands with reliable service and quality
        </p>
      </div>
      <div ref={containerRef} className="overflow-hidden flex whitespace-nowrap w-full px-4">
        <motion.div className="flex gap-6" style={{ minWidth: "max-content" }}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-none w-40 h-40 flex justify-center items-center bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PartnerSlider;
