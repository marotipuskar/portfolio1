// import React from "react";

// const Home = () => {
//   return (
//     <div className="bg-background h-screen flex flex-col justify-center items-center">
//       <h1 className="text-5xl font-bold text-primary mb-4">Welcome to My Portfolio</h1>
//       <p className="text-secondary text-lg">Explore my work and get in touch!</p>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-accent to-secondary min-h-screen flex flex-col justify-center items-center text-white relative">
      {/* Hero Text */}
      <div className="text-center animate_animated animate_fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-accent">Maroti Puskar</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A passionate front-end developer specializing in React.js, Tailwind CSS, and crafting responsive, user-friendly interfaces.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-10">
        <Link to="/projects">
          <button className="bg-white text-primary px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all">
            Download my Resume
          </button>
        </Link>
      </div>
      <div className="App">
      {/* <div style={{ height: "2000px" }}> 
        Scroll down to see the "Back to Top" button.
      </div> */}
      <BackToTop />
    </div>

      {/* Background Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-primary rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Home;