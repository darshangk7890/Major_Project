"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaHandshake, FaUserShield } from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";
import { MdAdminPanelSettings, MdPolicy } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import { GoDiscussionClosed } from "react-icons/go";
import { TbArrowGuide } from "react-icons/tb";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Real-Time Policy Updates & Alerts",
      description: " Stay informed about visa rule changes and deadlines.",
      icon: <Image src="/alert.svg" alt="Success Prediction" width={50} height={50} />,
    },
    {
      title: "Visa Eligibility Checker",
      description: "Instantly check if you meet the visa requirements.",
      icon: <Image src="/check.svg" alt="Success Prediction" width={50} height={50} />,
    },
    {
      title: "Mock Visa Interviews ",
      description: "Practice and improve your chances of passing visa interviews.",
      icon: <GoDiscussionClosed />,
    },
    {
      title: "Country-Specific Visa Assistance",
      description: " Get tailored advice for different visa types and destinations.",
      icon: <FaHandshake />,
    },
    {
      title: "Step-by-Step Application Assistance",
      description: " Simplify the application process with guided steps.",
      icon: <Image src="/steps.svg" alt="Success Prediction" width={50} height={50} />,
    },
    {
      title: "Personalized Consultation & Guidance ",
      description: " Assist users in different visa categories like Student, Work, and Tourist across various countries.",
      icon: <TbArrowGuide />,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1.5, y: 0.5 } : {}}
      transition={{ duration: 1 }}
      className="flex flex-col items-center py-20 text-center "
    >
      <h2 className="text-4xl font-bold text-white mb-4">OUR <span className="text-blue-500">SERVICES</span></h2>
      <p className="text-lg text-gray-400 mb-10 max-w-xl">
        Discover how our platform enhances your visa application process, increasing approval chances with smart predictions and personalized guidance      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transform transition duration-300 hover:-translate-y-3 ${index % 2 === 0
                ? " text-white border-2 border-blue-500 shadow-lg shadow-blue-500"
                : " text-white border-2 border-black shadow-lg shadow-black"
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
