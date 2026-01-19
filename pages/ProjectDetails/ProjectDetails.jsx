import React, { useEffect, useState } from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProject(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load project:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="max-w-5xl min-h-[85vh] mx-auto py-10 px-5">
      <div data-aos="fade-up" data-aos-delay="100">
        {loading ? (
          <div className="flex justify-center items-center h-[85vh]">
            <div className="loader border-t-4 border-secondary rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : project ? (
          <div>
            <div className="flex flex-col md:flex-row md:gap-10 ">
              {/* Project Image */}
              <div className="mb-8 md:w-1/3">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-top object-cover rounded-2xl border border-base-content/10 bg-base-content/5"
                />
              </div>

              <div className="md:w-2/3">
                {/* Project Title & Description */}
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-base-content/70 mb-6">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <h2 className="text-xl font-semibold mb-3">Technology Used:</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-base-content/5 border border-base-content/10 px-3 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Challenge Faced & Future Improvement */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
              <ul className="list-disc list-inside text-base-content/70">
                {project.challengeFaced.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Future Improvements:
              </h2>
              <ul className="list-disc list-inside text-base-content/70">
                {project.futureImprovement.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-base-content border border-primary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 bg-primary/5 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
              >
                GitHub <FaGithub size={15} />
              </a>
              <a
                href={project.live}
                target="_blank"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-base-content border border-secondary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300 bg-secondary/5 hover:bg-secondary/10 hover:text-secondary hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:-translate-y-0.5"
              >
                Live Demo <FaRocket size={15} />
              </a>
            </div>
          </div>
        ) : (
          <div className="h-[85vh] flex items-center justify-center font-semibold text-gray-600">
            Project not found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
