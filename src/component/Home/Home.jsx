import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <main className="max-w-screen-lg mx-auto px-6 py-12">
          {/* About Me Section */}
          <section className="bg-green-200 dark:bg-gray-800 rounded-lg mb-12 p-8">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              I’m a designer & developer with a passion for web design. I enjoy developing simple, clean, and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me, delivering work within time and budget which meets clients' requirements.
            </p>
            <div className="flex flex-wrap justify-around">
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
          <section className="py-12">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-8">What I Do</h3>
            <div className="flex flex-wrap justify-around space-y-6">
              {[
                { title: "HTML", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUY1o4B9UKG-3fvZyrh5tome3-rNuaHAyyxiSF37iXg&s", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cons?" },
                { title: "JavaScript", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUArcEppY_uFuc9-bGIbqnH9oyUgwPizKQNqwRYepNQ&s", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque." },
                { title: "CSS", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtZoUI6Nx9qriuW8xfrSx_p4Z8uM7R4Bvb_FqTuooaA&s", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!" },
                { title: "Node.JS", imgSrc: "https://nextsoftware.io/files/images/logos/main/nodejs-logo.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptu!" }
              ].map(({ title, imgSrc, description }) => (
                <div key={title} className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <img className="w-24 h-24 mb-4" src={imgSrc} alt={title} />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Resume Section */}
          <section className="py-12">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-8">A Summary of My Resume</h3>
            <div className="flex flex-wrap gap-12">
              {[
                { section: "My Education", items: [{ title: "Master in Computer Engineering", institution: "Harvard University", period: "2015 - 2017", description: "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula egete icons available. Aenean commodo ligula eget." }] },
                { section: "My Experience", items: [{ title: "Master in Computer Engineering", institution: "Harvard University", period: "2015 - 2017", description: "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor e icons available. Aenean commodo ligula eget." }] }
              ].map(({ section, items }) => (
                <div key={section} className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">{section}</h3>
                  {items.map(({ title, institution, period, description }) => (
                    <div key={title} className="resume-item mb-6">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
                      <h3 className="text-lg text-gray-600 dark:text-gray-300">{institution} / {period}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="btn-primary">
                <i className="fa-solid fa-arrow-down mr-2"></i>Download CV
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
