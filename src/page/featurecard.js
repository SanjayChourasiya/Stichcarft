import React, { useState } from "react";
import { BadgeDollarSign, Clock, Layers, CheckCircle } from "lucide-react";
import "../../src/FlipCard.css";

const features = [
  {
    title: "Affordable Pricing",
    desc: "Affordable digitizing for embroidery & vector artwork without sacrificing quality.",
    icon: <BadgeDollarSign className="w-8 h-8 text-purple-700" />,
  },
  {
    title: "Fast Turnaround",
    desc: "12–24 hour delivery to keep your business moving.",
    icon: <Clock className="w-8 h-8 text-purple-700" />,
  },
  {
    title: "All Formats Supported",
    desc: "We support DST, PES, EMB, and all major file types.",
    icon: <Layers className="w-8 h-8 text-purple-700" />,
  },
  {
    title: " Guarantee",
    desc: "Unlimited edits + 100% satisfaction guarantee.",
    icon: <CheckCircle className="w-8 h-8 text-purple-700" />,
  },
];

export default function FeatureCards() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {features.map((feature, i) => (
        <div
          className={`flip-card max-w-sm mx-auto ${
            flippedIndex === i ? "flipped" : ""
          }`}
          key={i}
          onClick={() => handleFlip(i)}
        >
          <div className="flip-card-inner h-[220px]">
            {/* Front */}
            <div className="flip-card-front bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
              <div className="flex justify-center items-center bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            </div>

            {/* Back */}
            <div className="flip-card-back bg-purple-400 text-white p-4 rounded-2xl shadow border border-purple-500 text-center">
              <p className="text-lg">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
