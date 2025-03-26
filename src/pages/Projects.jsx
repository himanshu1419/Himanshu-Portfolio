import React from "react";

const projects = [
  {
    name: "BookMartApp",
    live: "https://bookmart-app.vercel.app",
    repo: "https://github.com/himanshu1419/MERN-BookMart-App.git",
    image: "/BookMartPage.png",
  },
  {
    name: "TrendSphereApp",
    live: "https://trendsphere-app.vercel.app",
    repo: "https://github.com/himanshu1419/MERN-TrendSphere-App.git",
    image: "/TrendSpherePage.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
          My Projects
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border-amber-400 border-1 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover hover:opacity-80 transition"
                />
              </a>

              {/* Project Info */}
              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold text-amber-400">
                  {project.name}
                </h3>

                {/* Live Demo & GitHub Links */}
                <div className="mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                     Live Demo
                  </a>
                  <span className="mx-2 text-gray-400">|</span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                     GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

