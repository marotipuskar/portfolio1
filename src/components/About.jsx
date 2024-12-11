// import React from "react";

// const About = () => {
//   return (
//     <section id="about" className="bg-background p-8 text-center">
//       <h2 className="text-3xl font-bold mb-4">About Me</h2>
//       <p className="text-secondary">
//         I'm a front-end developer specializing in React.js, Tailwind CSS, and JavaScript. I enjoy building interactive and responsive web applications.
//       </p>
//     </section>
//   );
// };

// export default About;
import React from "react";
import BackToTop from "./BackToTop";

const About = () => {
  return (
    <section className="bg-background p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-primary mb-6">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-lg text-secondary text-center leading-relaxed">
          I'm a dedicated front-end developer with a passion for building
          user-friendly, interactive, and responsive web applications. My focus
          is on crafting clean and efficient code while delivering seamless user
          experiences. I enjoy learning new technologies and pushing my
          boundaries to create innovative solutions.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "REST APIs"].map(
              (skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                  <p className="text-lg font-medium text-primary">{skill}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            My Journey
          </h3>
          <div className="border-l-2 border-primary pl-4">
            {[
              {
                year: "2019",
                event:  "I completed my schooling and went to science journey with sant tukaram college parbhani",
              },
              {
                year: "2021",
                event: " i completed my 12th std with 92.33 percentage and wents to engineering college where i enhances various skills   Started my journey in web development.",
              },
              {
                year : "2023",
                event : "completed my  FaceMash, ytmusic projects and soon "
              },
              {
                year: "2024",
                
                event: "currently i pursuing BTech final year and exploring advanced React.js and animations.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6 animate_animated animate_fadeInUp">
                <h4 className="text-xl font-bold">{item.year}</h4>
                <p className="text-secondary">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
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

export default About;