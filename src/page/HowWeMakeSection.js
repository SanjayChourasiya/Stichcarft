import { useState } from "react";

// --- Before/After Card Component ---
function SoftBeforeAfter({ before, after }) {
  const [pos, setPos] = useState(50);

  const handleMove = (clientX, el) => {
    const bounds = el.getBoundingClientRect();
    const x = clientX - bounds.left;
    const percent = Math.max(0, Math.min(100, (x / bounds.width) * 100));
    setPos(percent);
  };

  return (
    <div
      className="relative w-full h-[390px] sm:h-[280px] md:h-[320px] rounded-xl overflow-hidden group cursor-ew-resize"
      onMouseMove={(e) => handleMove(e.clientX, e.currentTarget)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget)}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image with Gradient Mask */}
      <div
        className="absolute inset-0 bg-black/30"
        style={{
          width: "100%",
          maskImage: `linear-gradient(to right, black ${pos}%, transparent ${pos + 5}%)`,
          WebkitMaskImage: `linear-gradient(to right, black ${pos}%, transparent ${pos + 5}%)`,
        }}
      >
        <img
          src={before}
          alt="Before"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 border shadow transition"
        style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
      >
        ⇄
      </div>
    </div>
  );
}

// --- Grid Layout with Multiple Cards ---
export default function BeforeAfterGrid() {
  const portfolio = [
    { before: "/img/hb.jpg", after: "/img/bz.jpg" },
    { before: "/img/bc2.png", after: "/img/bc.png" },
    { before: "/img/bc5.jpg", after: "/img/bc3.png" },
    { before: "/img/bc7.png", after: "/img/bc9.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="w-16 h-1 bg-purple-600 rounded-full mb-3 mx-auto" />
        <h2 className="text-3xl p-4 sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
          Before & After Showcase
        </h2>
        <p className="text-black text-base sm:text-lg max-w-3xl mx-auto">
          See the precision, creativity, and craftsmanship that go into
          transforming your designs — from concept to final result. Every
          detail is intentional. Every outcome, impactful.
        </p>
      </div>

      {/* Grid of Before/After Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolio.map((item, i) => (
          <SoftBeforeAfter key={i} before={item.before} after={item.after} />
        ))}
      </div>
    </section>
  );
}
