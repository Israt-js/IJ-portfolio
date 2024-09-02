import React from "react";

const AboutMe = () => {
  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="src/component/Home/isratdevpic.png"
            alt="Israt Jahan"
            className="rounded-full shadow-lg mx-auto"
          />
        </div>

        {/* Introduction Section */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I am Israt Jahan
          </h3>
          <h4 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Software Developer
          </h4>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            A passionate Full Stack Software Developer 🚀 with experience in
            building Web applications using JavaScript, React.js, Node.js,
            Express.js, MongoDB, and other modern frameworks and tools.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            ⚡ Develop highly interactive Front end / User Interfaces for your
            web and mobile applications
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            ⚡ Integration of third-party services such as Firebase, AWS, Digital
            Ocean
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            ⚡ Deployment with Netlify, Surge, Vercel, Firebase, GitHub Pages
          </p>
          <a
            href="/getin"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Web Development Journey Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          My Web Development Journey
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I started my web development journey in 2023, driven by
          a fascination with how websites work and a desire to create interactive
          and user-friendly applications. My first steps were learning HTML, CSS,
          and JavaScript, and over the years, I've expanded my expertise to
          include modern frameworks like React.js and back-end technologies like
          Node.js and Express.js. Today, I enjoy bringing ideas to life through
          code and continue to explore new tools and technologies to enhance my
          skills.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Skills
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Firebase, AWS, Digital Ocean</li>
          <li>Deployment: Netlify, Surge, Vercel, Firebase, GitHub Pages</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Education
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong>[Full-stack Web Development]</strong> - [Programming Hero] (2023 - 2024)
          </li>
          <li>
            <strong>[Secondary School Certificate]</strong> - [Nischintapur Dewan Idris High School] (2021 - 2026)
          </li>
        </ul>
      </div>

      {/* Course Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Courses and Training
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I honed my skills through the comprehensive web development course
          offered by <strong>Programming Hero</strong>. This course provided me
          with in-depth knowledge and hands-on experience in building full-stack
          applications using modern technologies like JavaScript, React.js,
          Node.js, Express.js, and MongoDB. The curriculum was focused on
          practical learning, enabling me to build real-world projects and gain
          confidence in my development abilities.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Contact Information
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          <strong>Name:</strong> Israt Jahan
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:israt8291jahan@gmail.com"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            israt8291jahan@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          <strong>Date of Birth:</strong> 28 August 2010
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          <strong>From:</strong> Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
