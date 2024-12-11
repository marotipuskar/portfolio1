import React from "react";
import ProjectCard from "./ProjectCard";
import BackToTop from "./BackToTop";

const projects = [
    {
        title: "YT Music",
        description: "Clone of you tube music",
        image: "/assets/facemash.png",
        status: "complted",
        github: "https://github.com/marotipuskar/ytmusic",
        demo: "https://marotipuskar.github.io/ytmusic/",
    },
    {
    title: "FaceMash",
    description: "A fun app to compare faces.",
    image: "/assets/facemash.png",
    status: "complted",
    github: "https://github.com/marotipuskar/facemash",
    demo: "https://face-mash1.vercel.app/",
  },
  {
    title: "StaySmart ",
    description: "Real-time rooms for students with StaySmart.",
    image: "/assets/staysmart.png",
    status: "working",
    // github: "https://github.com/yourusername/staysmart-chatbot",
    // demo: "https://staysmart-demo.com",
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
      <div className="App">
      {/* <div style={{ height: "2000px" }}> 
        Scroll down to see the "Back to Top" button.
      </div> */}
      <BackToTop />
    </div>
    </section>
  );
};

export default Projects;