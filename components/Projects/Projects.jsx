import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { Link } from "react-router";

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
        <Link
          to={`/projects/${project.id}`}
          className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-base-content border border-primary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 bg-primary/5 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
        >
          Details <MdInfo size={15} />
        </Link>
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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="100" className="mt-25">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Project{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-secondary bg-clip-text text-transparent">
          Overview
        </span>
      </h1>
      <p className="text-center text-base-content/50">Recent 3 Projects</p>
      {/* ============ */}

      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader border-t-4 border-secondary rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : !projects ? (
        <div className="h-[50vh] flex items-center justify-center font-semibold text-gray-600">
          Project not found.
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
