import React from "react";

const GetInTouch = () => {
  return (
    <div className="">

      {/* Personal Information Section */}
      <div className="flex justify-around bg-[#f3f4f6] p-12 mt-24">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Personal Information
          </h3>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            <strong>Name:</strong> Israt Jahan
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:israt8291jahan@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              israt8291jahan@gmail.com
            </a>
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            <strong>Location:</strong> Dhaka, Bangladesh
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left">
            <strong>Skills:</strong> JavaScript, React, Node.js, Express.js, MongoDB, Firebase, AWS, Digital Ocean
          </p>
        </div>

        {/* Additional Contact Information Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Additional Contact Information
          </h3>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            For any inquiries or collaborations, you can also reach out to me through the following platforms:
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/israt-jahan-undefined-2277b7294/"
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/israt-jahan/
            </a>
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Israt-js"
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://github.com/Israt-js
            </a>
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            <strong>Twitter:</strong>{" "}
            <a
              href="https://twitter.com/IsratJahan17001"
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://twitter.com/IsratJahan17001
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around bg-[#63e7a9] p-12 mt-24">
        {/* Let's Connect Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Let's Connect
          </h3>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            Please fill out the form on this section to contact me or call between
            9:00 A.M and 8:00 P.M ET, Monday through Friday. I look forward to
            connecting with you!
          </p>
          <p className="text-gray-600 text-base text-center sm:text-left mb-4">
            As a Full Stack Software Developer with experience in JavaScript, React, Node.js, and more, I’m always excited to collaborate on innovative projects. Whether you’re looking to discuss potential work opportunities, exchange ideas, or just network, don’t hesitate to reach out!
          </p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-xl"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Message Me Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Message Me
          </h3>
          <form action="" className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <input
              className="w-full bg-green-600 text-white p-3 rounded-md cursor-pointer hover:bg-green-700 transition-colors duration-300"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-wrap justify-around bg-[#f9fafb] p-12 mt-24">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            My Projects
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Project One
              </h4>
              <p className="text-gray-600 mb-4">
                A brief description of Project One. It showcases [key features or technologies used].
              </p>
              <a
                href="https://recipe-7.web.app/"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Project Two
              </h4>
              <p className="text-gray-600 mb-4">
                A brief description of Project Two. It demonstrates [key features or technologies used].
              </p>
              <a
                href="https://pet-client-10e14.web.app/"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Project Three
              </h4>
              <p className="text-gray-600 mb-4">
                A brief description of Project Three. This project includes [key features or technologies used].
              </p>
              <a
                href="https://real-estate-residensial-9.web.app/"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
