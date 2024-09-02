import React from "react";

const projects = [
  {
    id: 1,
    title: "Recipe App",
    description:
      "Discover and save your favorite recipes. A culinary companion for all your cooking adventures.",
    link: "https://recipe-7.web.app/",
  },
  {
    id: 2,
    title: "Pet Client",
    description:
      "Manage pet-related services, bookings, and client interactions with ease.",
    link: "https://pet-client-10e14.web.app/",
  },
  {
    id: 3,
    title: "Real Estate Residential",
    description:
      "Browse, buy, and sell residential real estate properties with our user-friendly platform.",
    link: "https://real-estate-residensial-9.web.app/",
  },
];

const Project = () => {
  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">
        My Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden p-8 hover:bg-gray-200 transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
            >
              Visit Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
