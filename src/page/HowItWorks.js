import React, { useEffect, useRef, useState } from "react";
import { CloudUpload, ChevronDown, Mail } from "lucide-react";

const steps = [
    {
        title: "STEP 1",
        heading: "Send your artwork!",
        desc: "We take all image file types like jpeg, png, gif, web, heic, tiff, pdf, ai, svg, and more.",
        icon: CloudUpload,
    },
    {
        title: "STEP 2",
        heading: "Our digitizers get to work.",
        desc: "We manually digitize your design using Wilcom, Hatch, Pulse DG/ML and more.",
        icon: ChevronDown,
    },
    {
        title: "STEP 3",
        heading: "You've got an embroidery file!",
        desc: "We deliver DST, EMB, PES, JEF, EXP, VP3 and more formats.",
        icon: Mail,
    },
];

const HowItWorks = () => {
    const sectionRef = useRef(null);
    const iconRefs = useRef([]);
    const stepRefs = useRef([]);
    const [activeStep, setActiveStep] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const [grayLineHeight, setGrayLineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
            const scrollMid = window.scrollY + window.innerHeight / 2;

            let active = 0;
            stepRefs.current.forEach((ref, index) => {
                const offset = ref.offsetTop + sectionTop;
                if (scrollMid >= offset) {
                    active = index;
                }
            });
            setActiveStep(active);

            const start = iconRefs.current[0]?.getBoundingClientRect().top + window.scrollY;
            const end = iconRefs.current[iconRefs.current.length - 1]?.getBoundingClientRect().top + window.scrollY;
            const progress = Math.min(1, Math.max(0, (scrollMid - start) / (end - start)));
            const totalDistance = end - start;
            const height = progress * totalDistance;

            setLineHeight(height);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateGrayLine = () => {
            const start = iconRefs.current[0]?.getBoundingClientRect().top + window.scrollY;
            const end = iconRefs.current[iconRefs.current.length - 1]?.getBoundingClientRect().top + window.scrollY;
            const total = end - start;
            setGrayLineHeight(total);
        };

        updateGrayLine();
        window.addEventListener("resize", updateGrayLine);
        return () => window.removeEventListener("resize", updateGrayLine);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16"
        >
            {/* LEFT */}
            <div className="lg:w-1/2 space-y-4">
                <p className="text-blue-800 font-bold uppercase">How It Works</p>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text">
                    The process is fast and easy.
                </h2>
                <p className="text-black text-xl">
                    Just follow three easy steps for a seamless experience. We ensure fast and accurate delivery of your embroidery files.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white text-base sm:text-lg font-semibold rounded-full shadow hover:scale-105 transition duration-300">
                    Get a Free Quote
                </button>
            </div>

            {/* RIGHT */}
            <div className="relative lg:w-1/2">
                {/* Gray background line */}
                <div
                    className="absolute left-5 top-[34px] w-1 bg-gray-200 rounded"
                    style={{ height: `${grayLineHeight}px` }}
                />

                {/* Blue progress line */}
                <div
                    className="absolute left-5 top-[20px] w-1 bg-gradient-to-b from-[#4B4FCA] via-purple-800 to-pink-600 rounded transition-all duration-300"
                    style={{ height: `${lineHeight}px` }}
                />

                {/* Steps */}
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = activeStep >= index;

                    return (
                        <div
                            key={index}
                            ref={(el) => (stepRefs.current[index] = el)}
                            className="relative flex items-start pl-16 mb-20"
                        >
                            {/* ICON */}
                            <div
                                ref={(el) => (iconRefs.current[index] = el)}
                                className="absolute left-0 top-0 flex flex-col items-center z-10"
                            >
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                                        ${isActive
                                            ? "bg-gradient-to-b from-[#4B4FCA] via-purple-800 to-pink-600 text-white scale-110 shadow-xl"
                                            : "bg-white border-2 border-gray-300 text-gray-400"
                                        }`}
                                >
                                    <Icon size={18} />
                                </div>
                            </div>

                            {/* CARD */}
                            <div className="bg-white p-6 rounded-xl shadow-md w-full ml-2 border border-gray-100">
                                <p className="text-blue-800 text-sm font-semibold mb-1">{step.title}</p>
                                <h3 className="text-xl font-bold text-black mb-2">{step.heading}</h3>
                                <p className="text-black leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowItWorks;
