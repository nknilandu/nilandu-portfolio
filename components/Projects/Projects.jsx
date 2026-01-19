import React from "react";
import project1 from "../../src/assets/proj1.png";
import project2 from "../../src/assets/proj2.png";
import project3 from "../../src/assets/proj3.png";
import { FaGithub, FaRocket } from "react-icons/fa";

const projects = [
  {
    title: "AssetVerse - Corporate Asset Management System",
    description:
      "AssetVerse is a modern, enterprise-grade web application designed to help companies manage their internal assets efficiently. The platform streamlines the process of assigning assets, requesting assets, affiliating employees with companies, and tracking resources in a fully automated environment.",
    img: project1,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Netlify",
      "Vercel",
    ],
    github: "https://github.com/nknilandu/AssetVerse.git",
    live: "https://asset-verse-com.netlify.app/",
    imgHoverScale: "scale-105",
  },
  {
    title: "Import Export Hub",
    description:
      "Import Export Hub is a modern web platform designed to simplify global trade management. Users can browse exportable products, import items directly into their personal dashboard, and manage exports with ease — all within a single, secure, and responsive web application. This is a single-page application (SPA) built with a clean and modern UI, real-time synchronization user management.",
    img: project2,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Netlify",
      "Vercel",
    ],
    github: "https://github.com/nknilandu/hero-app-react-a8.git",
    live: "https://heroio-nknilandu.netlify.app/",
    imgHoverScale: "scale-105",
  },
  {
    title: "HERO.IO – Productive App Landing Page",
    description:
      "A modern, responsive landing page built for showcasing mobile applications. HERO.IO focuses on clean UI, strong visual hierarchy, and conversion-friendly sections to present apps in a professional and engaging way. Designed to highlight app features, platform availability, and user trust with a sleek hero section and polished layout.",
    img: project3,
    tech: ["React.js", "Tailwind CSS", "Recharts", "JavaScript", "Netlify"],
    github: "https://github.com/nknilandu/hero-app-react-a8.git",
    live: "https://heroio-nknilandu.netlify.app/",
    imgHoverScale: "scale-105",
  },

  // Add more projects here
];

const ProjectCard = ({ project }) => (
  <div className="bg-base-content/5 rounded-2xl border border-base-content/10 backdrop-blur-lg group overflow-hidden">
    <div className="h-60 overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        className={`w-full h-full object-top object-cover group-hover:scale-103 transition-all`}
      />
    </div>
    <div className="p-5">
      <h1 className="text-xl font-bold text-base-content">{project.title}</h1>
      <p className="text-base-content/50 mt-2">{project.description}</p>
      <div className="flex flex-wrap mt-3 gap-2">
        {project.tech.map((tech, idx) => (
          <p
            key={idx}
            className="bg-base-content/5 border border-base-content/10 px-3 py-1 rounded-md text-xs"
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-3 mt-5 mb-2">
        <a
          href={project.github}
          target="_blank"
          className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-base-content border border-primary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 bg-primary/5 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
        >
          GitHub <FaGithub size={15} />
        </a>
        <a
          href={project.live}
          target="_blank"
          className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-base-content border border-secondary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300 bg-secondary/5 hover:bg-secondary/10 hover:text-secondary hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:-translate-y-0.5"
        >
          Live Demo <FaRocket size={15} />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="mt-25">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Project{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-secondary bg-clip-text text-transparent">
          Overview
        </span>
      </h1>
      <p className="text-center text-base-content/50">Recent 3 Projects</p>
      {/* ============ */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
