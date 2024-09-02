const Resume = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12">A Summary of My Resume</h3>
    
    <div className="flex flex-wrap gap-16 justify-left">
    <div className="w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">Career Objective</h2>
       <p>Dynamic and results-driven Full stack developer with a proven track record in designing and deploying robust web applications using HTML, CSS, Tailwind CSS, Javascript, React, Node.js, Express.js, and MongoDB. Possessing strong expertise in API integrations, authentication (JWT), and performance optimization, I am committed to delivering high-quality user experiences. Eager to join an innovative company where I can contribute to cutting-edge projects, drive technological advancements, and grow within a collaborative and fast-paced environment.</p>
      </div>
       {[
         { 
           section: "My Education", 
           items: [
             { 
               title: "Master in Computer Engineering", 
               institution: "Harvard University", 
               period: "2015 - 2017", 
               description: "Specialized in advanced computer engineering with a focus on system design, algorithms, and programming languages."
             },
             {
               title: "Bachelor in Computer Science",
               institution: "MIT",
               period: "2011 - 2015",
               description: "Gained a strong foundation in software development, data structures, and web technologies."
             }
           ]
         }, 
         { 
           section: "My Experience", 
           items: [
             { 
               title: "Senior Software Engineer", 
               institution: "Google", 
               period: "2018 - Present", 
               description: "Led a team to develop scalable web applications, enhancing user experience and implementing cutting-edge technologies."
             },
             {
               title: "Software Engineer",
               institution: "Facebook",
               period: "2017 - 2018",
               description: "Contributed to both front-end and back-end development, improving performance and user engagement."
             }
           ]
         },
         {
           section: "Skills",
           items: [
             {
               title: "Web Development",
               description: "HTML, CSS, Tailwind CSS"
             },
             {
               title: "Front-End",
               description: "JavaScript, React.js, Next.js, React Router, React Authentication"
             },
             {
               title: "Back-End",
               description: "Express.js, MongoDB, RESTful APIs, Axios, JSON Web Tokens (JWT)"
             },
             {
               title: "Programming Language",
               description: "JavaScript, Python"
             },
             {
               title: "Distribution/Deploy",
               description: "GitHub, Firebase, Netlify, Vercel"
             }
           ]
         }
       ].map(({ section, items }) => (
         <div key={section} className="w-full  bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
           <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8">{section}</h3>
           {items.map(({ title, institution, period, description }) => (
             <div key={title} className="mb-8">
               <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">{title}</h2>
               {institution && <h3 className="text-lg text-gray-600 dark:text-gray-300">{institution} <span className="text-gray-500">/ {period}</span></h3>}
               <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
             </div>
           ))}
         </div>
       ))}
     </div>

       <div className="text-center mt-12">
         <button className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-medium rounded-full hover:bg-green-700 transition-colors duration-300 shadow-xl">
           <i className="fa-solid fa-arrow-down mr-3"></i>Download CV
         </button>
       </div>
 </section>
  );
};

export default Resume;