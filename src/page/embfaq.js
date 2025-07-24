import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What image formats do you accept for conversion?",
        answer:
            "JPG, PNG, PDF, BMP, or even hand-drawn sketches.",
    },
    {
        question: "What embroidery file types do you deliver?",
        answer:
            "DST, PES, EMB, EXP, JEF, VP3, and others.",
    },
    {
        question: "Are edits or revisions included?",
        answer:
            "Yes. All basic edits and corrections are free.",
    },
    {
        question: "What payment methods do you support?",
        answer:
            "PayPal, Wise, and bank transfer.",
    },
    {
        question: "Can I contact you during my business hours?",
        answer:
            "Yes! Our support team is available Monday to Saturday.",
    },
];

export default function FAQSection() {
    const [openIndices, setOpenIndices] = useState([]);
    const faqRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (faqRef.current && !faqRef.current.contains(event.target)) {
                setOpenIndices([]);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggle = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter((i) => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <section className="bg-white md:py-10 sm:py-2 px-4 sm:px-6 md:px-10">
            <div className="max-w-5xl mx-auto" ref={faqRef}>
                {/* Heading */}
                <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
                    Frequently Asked Questions About Our Services
                </h2>

                {/* Subheading */}
                <p className="text-black text-center text-sm md:text-lg mb-10 max-w-2xl mx-auto">
                    Get quick answers to common questions about our services, file types, and support.
                </p>

                {/* FAQ Items */}
                <div className="space-y-4 sm:space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndices.includes(index);
                        return (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300 bg-white"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left text-sm sm:text-lg font-medium sm:font-semibold transition-colors duration-200 ${
                                        isOpen
                                            ? "bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white"
                                            : "text-gray-800 hover:bg-gray-100"
                                    }`}
                                >
                                    <span className="w-[85%] text-lg">{faq.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 transform transition-transform duration-300 ${
                                            isOpen ? "rotate-180 text-white" : "text-black"
                                        }`}
                                    />
                                </button>

                                {/* Answer */}
                                {isOpen && (
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 sm:pt-4 text-black text-lg bg-white">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
