import React, { useState } from "react";
import {
  Briefcase,
  Globe,
  Target,
  Users,
  CheckCircle,
  Settings,
  BarChart,
  Rocket,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const [loading, setLoading] = useState(false);

  const handleContactClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/contact";
    }, 1000);
  };

  return (
    <section className="bg-white text-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Intro Section */}
        <motion.div className="text-center space-y-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-transparent bg-clip-text">
            Empowering the Future of Digital Productivity
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Ditizing Kart, we build tools that automate, simplify, and elevate your business. Our platform is your partner in digital growth.
          </p>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard icon={Globe} title="Vision" text="Lead the global shift toward smarter, intuitive digital workflows." />
          <FeatureCard icon={Target} title="Mission" text="To empower people and teams with tools that simplify work and accelerate growth." />
          <FeatureCard icon={Users} title="Values" text="Innovation, transparency, and user-focused simplicity guide everything we do." />
        </div>

        {/* What Makes Us Unique */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600">What Makes Us Unique</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">We don't just build tools – we create digital ecosystems that transform the way you work, grow, and succeed.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AdvantageCard icon={CheckCircle} title="Smart Efficiency" text="Automate repetitive tasks with ease." />
          <AdvantageCard icon={Settings} title="Tailored Experience" text="Customize workflows that match your process." />
          <AdvantageCard icon={Briefcase} title="Scalable Design" text="Grows with you – from small startups to large enterprises." />
          <AdvantageCard icon={BarChart} title="Insightful Analytics" text="Make smarter decisions with real-time data." />
          <AdvantageCard icon={Rocket} title="Innovative Approach" text="New-age tech built to future-proof your team." />
          <AdvantageCard icon={Shield} title="Ironclad Security" text="Enterprise-grade data security & compliance." />
        </div>

        {/* How We Work */}
  

      

        {/* Call to Action */}
        <motion.div
          className="text-center space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Ready to level up your productivity?
          </h3>
          <p className="text-gray-600">Let’s build something extraordinary together.</p>
          <div className="flex justify-center">
            <button
              onClick={handleContactClick}
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300
                bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 hover:opacity-90 shadow-lg ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full"></div>
                  Loading...
                </>
              ) : (
                <>
                  Contact Us <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable card components
const FeatureCard = ({ icon: Icon, title, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white border border-purple-200 p-6 rounded-xl shadow-md text-center transition duration-300 hover:shadow-xl"
  >
    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </motion.div>
);

const AdvantageCard = ({ icon: Icon, title, text }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex items-start gap-4 p-6 rounded-lg border border-pink-300 bg-white hover:shadow-lg transition"
  >
    <div className="p-3 rounded-full bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  </motion.div>
);

export default About;
