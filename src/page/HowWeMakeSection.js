import { useState } from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { id: 1, before: "/img/4-before.jpg", after: "/img/4-after.jpg" },
  { id: 2, before: "/img/4-before.jpg", after: "/img/4-after.jpg" },
  { id: 3, before: "/img/4-before.jpg", after: "/img/4-after.jpg" },
  { id: 4, before: "/img/4-before.jpg", after: "/img/4-after.jpg" },
]

function BeforeAfter({ before, after }) {
  const [pos, setPos] = useState(50);
  const handleMove = e => {
    const b = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - b.left;
    setPos(Math.max(0, Math.min(100, (x / b.width) * 100)));
  };
  return (
    <div
      onMouseMove={handleMove}
      className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white group transition-all duration-300"
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
      />

      {/* Before Image (Overlay) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white z-30"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />

      {/* Draggable Handle */}
      <div
        className="absolute top-1/2 w-10 h-10 bg-white/80 border border-gray-300 backdrop-blur-md rounded-full shadow-lg z-40 flex items-center justify-center transition duration-300 group-hover:scale-110"
        style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="w-1 h-6 bg-gray-600 rounded" />
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-4 text-[11px] font-semibold text-gray-600 tracking-wider uppercase bg-white/70 px-2 py-0.5 rounded">
        Before
      </span>
      <span className="absolute bottom-3 right-4 text-[11px] font-semibold text-gray-600 tracking-wider uppercase bg-white/70 px-2 py-0.5 rounded">
        After
      </span>
    </div>

  );
}

export default function PortfolioSection() {
  return (
    <section className="py-10 bg-white px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl text-center font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text drop-shadow mb-4">
          Transform Before and After
        </h2>
        <p className="text-gray-600 text-md sm:text-lg text-center max-w-2xl mx-auto">
          See the precision, creativity, and craftsmanship that go into transforming your designs — from concept to final result. Every detail is intentional. Every outcome, impactful.
        </p>

      </div>

      <motion.div
        className="grid gap-8 grid-cols-1 py-10 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {portfolioItems.map(item => (
          <motion.div key={item.id} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
            <BeforeAfter before={item.before} after={item.after} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
