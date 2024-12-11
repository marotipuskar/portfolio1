import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FaceMash",
    description: "A fun app to compare faces.",
    image: "/assets/facemash.png",
    github: "https://github.com/yourusername/facemash",
    demo: "https://facemash-demo.com",
  },
  {
    title: "StaySmart Chatbot",
    description: "Real-time chatbot for StaySmart.",
    image: "/assets/staysmart.png",
    github: "https://github.com/yourusername/staysmart-chatbot",
    demo: "https://staysmart-demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;