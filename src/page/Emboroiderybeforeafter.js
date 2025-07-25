import { useState } from "react";

export default function EmbroideryHeroSection({ setIsModalOpen }) {
    const [pos, setPos] = useState(50);

    const handleMove = (clientX, el) => {
        const bounds = el.getBoundingClientRect();
        const x = clientX - bounds.left;
        const percent = Math.max(0, Math.min(100, (x / bounds.width) * 100));
        setPos(percent);
    };

    return (
        <section className="bg-gradient-to-r from-white to-gray-50 py-20 md:px-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-4xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text animate-headingGlow">
                        Embroidery Digitizing Services
                    </h2>

                    <p className="text-lg mb-4 text-black">
                        At <span className="font-bold text-blue-800">Stitchkraft</span>, we expertly convert logos, artwork, and illustrations into high-quality, machine-readable embroidery files.
                    </p>
                    <p className="text-lg mb-4 text-black">
                        Our team ensures clean stitching, minimal thread breaks, and detail perfection across every file—suited for caps, jackets, shirts, and more.
                    </p>
                    <p className="text-lg mb-6 text-black">
                        We deliver files in <span className="font-bold text-blue-800">.DST, .PES, .EXP, .JEF</span> and all major formats with lightning-fast turnaround and unbeatable precision.
                    </p>

                    <ul className="space-y-3 mb-6">
                        {[
                            "✅ 12–24 Hour Delivery Time",
                            "✅ Clean Stitch Path & Detailing",
                            "✅ Affordable & Reliable",
                            "✅ Supports All Embroidery Machines"
                        ].map((item, idx) => (
                            <li key={idx} className="text-lg font-semibold text-gray-800">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="shine-button w-full md:w-auto font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Upload Your Design
                    </button>
                </div>

                {/* Right Side — Before/After Image Slider with Container Border */}
                <div className="relative p-[8px] bg-gradient-to-br from-[#4B4FCA] via-purple-500 to-pink-500 rounded-2xl shadow-2xl animate-glow">
                    <div
                        className="relative h-[400px] sm:h-[420px] md:h-[460px] lg:h-[500px] w-full rounded-2xl overflow-hidden group cursor-ew-resize bg-white"

                        onMouseMove={(e) => handleMove(e.clientX, e.currentTarget)}
                        onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget)}
                    >
                        {/* After Image (Full BG) */}
                        <img

                            src="/img/bc3.png"

                            alt="After"
                            className="absolute inset-0 w-full h-full object-contain"
                        />

                        {/* Before Image (masked) */}
                        <div
                            className="absolute inset-0"
                            style={{
                                width: "100%",
                                maskImage: `linear-gradient(to right, black ${pos}%, transparent ${pos + 5}%)`,
                                WebkitMaskImage: `linear-gradient(to right, black ${pos}%, transparent ${pos + 5}%)`,
                            }}
                        >
                            <img
                                src="/img/bc5.jpg"
                                alt="Before"
                                className="w-full h-full object-contain opacity-90"
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
                </div>
            </div>
        </section>
    );
}
