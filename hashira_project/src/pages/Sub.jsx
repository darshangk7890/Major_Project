"use client"
import React from "react";
import { FaHandshake, FaUserShield } from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";
import { MdAdminPanelSettings, MdPolicy } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Success Prediction",
      description: "Analyze visa trends and predict the likelihood of approval.",
      icon: <MdAdminPanelSettings />,
    },
    {
      title: "Trusted Partnerships",
      description: "Collaborate with industry leaders to enhance your digital identity ecosystem.",
      icon: <FaHandshake />,
    },
    {
      title: "Security & Privacy",
      description: "Safeguard your personal data with our robust security measures.",
      icon: <FaUserShield />,
    },
    {
      title: "Application Enhancement",
      description: "Identify common mistakes and suggest improvements to increase approval chances.",
      icon: <RiShieldUserFill />,
    },
    {
      title: "Compliance & Regulation",
      description: "Ensure your digital identity practices meet embassy standards and legal requirements.",
      icon: <MdPolicy />,
    },
    {
      title: "Multi-Visa Support",
      description: " Assist users in different visa categories like Student, Work, and Tourist across various countries.",
      icon: <FaLayerGroup />,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1.5, y: 0.5 } : {}}
      transition={{ duration: 1 }}
      className="flex flex-col items-center py-20 text-center min-h-screen"
    >
      <h2 className="text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
      <p className="text-lg text-gray-400 mb-10 max-w-xl">
        Discover how our platform enhances your visa application process, increasing approval chances with smart predictions and personalized guidance      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transform transition duration-300 hover:-translate-y-3 ${index % 2 === 0
                ? " text-white border-2 border-black shadow-lg shadow-black"
                : " text-white border-2 border-white shadow-lg shadow-white"
              }`}
          >
            <div className="text-4xl mb-4 flex justify-center text-white">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-black dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
