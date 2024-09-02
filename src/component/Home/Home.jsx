import React from 'react';
import Banner from './Banner';
import BlogPost from '../Blog/BlogPost';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  // Sample projects data
  const projects = [
    {
      title: "Project One",
      imgSrc: "https://via.placeholder.com/300",
      description: "An innovative web application that solves complex problems with a sleek interface.",
      link: "https://recipe-7.web.app/"
    },
    {
      title: "Project Two",
      imgSrc: "https://via.placeholder.com/300",
      description: "A mobile app that enhances user experience with intuitive navigation and powerful features.",
      link: "https://pet-client-10e14.web.app/"
    },
    {
      title: "Project Three",
      imgSrc: "https://via.placeholder.com/300",
      description: "A full-stack solution that integrates modern technologies for optimal performance.",
      link: "https://real-estate-residensial-9.web.app/"
    }
  ];

  // Carousel controls
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Banner />
        <main className="max-w-screen-lg mx-auto px-6 py-12">
          {/* About Me Section */}
          <section className="bg-green-200 dark:bg-gray-800 rounded-lg mb-12 p-20">
            <h3 className="text-5xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-11">About Me</h3>
            <p className="text-gray-600 text-1xl dark:text-gray-300 text-center mb-7">
              A passionate Full Stack Software Developer 🚀 with experience in building Web applications using JavaScript, React.js, Node.js, Express.js, MongoDB, and other modern frameworks and tools.
            </p>
            <ul className='mb-7 text-1xl text-gray-600 dark:text-gray-300 ml-9'>
              <li>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</li>
              <li>⚡ Integration of third-party services such as Firebase, AWS, Digital Ocean</li>
              <li>⚡ Deployment with Netlify, Surge, Vercel, Firebase, GitHub Pages</li>
            </ul>
            <div className="flex flex-wrap text-1xl justify-around">
              <div className="text-center mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">Name:</h4>
                <p className="text-gray-600 dark:text-gray-300">Israt Jahan</p>
              </div>
              <div className="text-center mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">Email:</h4>
                <p className="text-gray-600 dark:text-gray-300">israt8291jahan@gmail.com</p>
              </div>
              <div className="text-center mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">Date of Birth:</h4>
                <p className="text-gray-600 dark:text-gray-300">28 August 2010</p>
              </div>
              <div className="text-center mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">From:</h4>
                <p className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </div>
          </section>

          {/* What I Do Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">What I Do</h3>
            <div className="flex flex-wrap justify-around gap-8">
              {[
                { title: "HTML", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUY1o4B9UKG-3fvZyrh5tome3-rNuaHAyyxiSF37iXg&s", description: "Structured content with semantic markup." },
                { title: "CSS", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtZoUI6Nx9qriuW8xfrSx_p4Z8uM7R4Bvb_FqTuooaA&s", description: "Styling with modern CSS techniques." },
                { title: "JavaScript", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUArcEppY_uFuc9-bGIbqnH9oyUgwPizKQNqwRYepNQ&s", description: "Dynamic and interactive web pages." },
                { title: "Node.js", imgSrc: "https://nextsoftware.io/files/images/logos/main/nodejs-logo.png", description: "Backend development with JavaScript." },
                { title: "React.js", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", description: "Building modern user interfaces." },
                { title: "Express.js", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", description: "Fast and minimalist backend framework." },
                { title: "MongoDB", imgSrc: "https://webimages.mongodb.com/_com_assets/cms/kuyj8dpkv0cj53h27-JavaScript.svg?auto=format%2Ccompress", description: "NoSQL database for scalable applications." },
                { title: "Python", imgSrc: "https://www.python.org/static/community_logos/python-logo.png", description: "Versatile programming for backend development." },
              ].map(({ title, imgSrc, description }) => (
                <div key={title} className="group flex flex-col items-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-[45%] lg:w-[30%] transition transform hover:scale-105 hover:shadow-2xl">
                  <img className="w-24 h-24 mb-4 rounded-full bg-gray-200 dark:bg-gray-700 p-2" src={imgSrc} alt={title} />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Featured Projects</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {projects.map((project) => (
                <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
                  <img className="w-full h-48 object-cover" src={project.imgSrc} alt={project.title} />
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <a href={project.link} className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500" target="_blank" rel="noopener noreferrer">View Project</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">What People Say</h3>
            <div className="relative">
              {/* Carousel Container */}
              <motion.div
                className="flex overflow-hidden"
                initial={{ x: 0 }}
                animate={{ x: -currentIndex * 100 + '%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {[
                  {
                    name: "Khairul Islam",
                    feedback: "Israt is an exceptional developer. Her attention to detail and commitment to delivering high-quality work is remarkable.",
                    imgSrc: "https://via.placeholder.com/100"
                  },
                  {
                    name: "Johirul Islam Hamim",
                    feedback: "I had a great experience working with Israt. She brought our ideas to life with her innovative solutions and expertise.",
                    imgSrc: "https://via.placeholder.com/100"
                  },
                  {
                    name: "Bahadur Khan",
                    feedback: "Highly recommended! Israt's professionalism and technical skills exceeded our expectations. She is a true asset to any project.",
                    imgSrc: "https://via.placeholder.com/100"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <img className="w-24 h-24 mb-4 rounded-full mx-auto" src={testimonial.imgSrc} alt={testimonial.name} />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{testimonial.feedback}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
