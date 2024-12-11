import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="shadow-lg p-4 bg-white rounded-md hover:scale-105 transition-all">
      <img src={project.image} alt={project.title} className="rounded-t-md" />
      <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
      <p className="text-secondary mt-2">{project.description}</p>
      <div className="flex space-x-4 mt-4">
        <a href={project.github} className="text-primary">GitHub</a>
        <a href={project.demo} className="text-primary">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;