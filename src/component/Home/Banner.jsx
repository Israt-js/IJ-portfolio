import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaCode, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-b from-green-100 to-green-200 py-[30px] md:py-[40px]">
      {/* Background Pattern with Animation */}
      <div className="absolute inset-0 bg-[url('/path/to/your/background-pattern.png')] bg-cover bg-center opacity-20"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-green-200 to-transparent opacity-40" 
        animate={{ opacity: [0.1, 0.3, 0.5, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      <div className="relative flex flex-col md:flex-row justify-between items-center px-5 md:px-[100px] lg:px-[150px]">
        <div className="max-w-[100%] md:max-w-[450px] text-center md:text-left mb-8 md:mb-0 relative z-10">
          <h3 className="text-gray-700 text-[26px] sm:text-[32px] md:text-[42px] font-semibold mb-3">
            Hi, I am
          </h3>
          <h1 className="text-[35px] sm:text-[50px] md:text-[60px] font-bold text-gray-800">
            Israt Jahan
          </h1>
          <h4 className="text-gray-500 text-[18px] sm:text-[22px] md:text-[26px] font-medium mt-2">
            Full Stack Software Developer
          </h4>
          <p className="text-gray-600 text-[15px] sm:text-[17px] mt-5 leading-relaxed">
            A passionate Full Stack Software Developer 🚀 with experience in building Web applications using JavaScript, React, Node.js, Express.js, MongoDB, and other modern frameworks and tools.
          </p>
          <div className="mt-4 text-gray-600 text-[16px] sm:text-[18px] font-medium">
            <p>"Turning ideas into reality through code."</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-8 space-x-4">
            <button className="rounded bg-green-600 text-white text-[15px] sm:text-[17px] font-medium px-6 sm:px-8 py-2 sm:py-3 hover:bg-green-700 transition-colors duration-300 shadow-md flex items-center">
              <FaDownload className="mr-2" /> Download CV
            </button>
            <a 
              href="/resume" 
              className="bg-gray-800 text-white text-[15px] sm:text-[17px] px-6 py-2 sm:py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 flex items-center"
            >
              <FaDownload className="mr-2" /> View Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-start mt-6 space-x-6">
            <a 
              href="https://www.linkedin.com/in/israt-jahan-undefined-2277b7294/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Israt-js" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://twitter.com/IsratJahan17001"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
            <a 
              href="mailto:israt8291jahan@gmail.com" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start mt-8">
            <p className="text-gray-700 text-[16px] sm:text-[18px] mb-2">Want to see my work?</p>
            <a 
              href="/projects" 
              className="bg-green-600 text-white text-[15px] sm:text-[17px] px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center"
            >
              <FaCode className="mr-2" /> View Projects
            </a>
          </div>
        </div>
        <img
          className="w-[90%] md:w-[450px] mx-auto md:mx-0 shadow-lg rounded-lg"
          src="src/component/Home/make-removebg-preview.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;
