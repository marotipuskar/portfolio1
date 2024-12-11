// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-primary text-white p-4 fixed top-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Portfolio</h1>
//         <ul className="hidden md:flex space-x-6">
//           <li><Link to="about" >About</Link></li>
//           <li><Link to="projects" >Projects</Link></li>
//           <li><Link to="contact" >Contact</Link></li>
//         </ul>
//         <div className="md:hidden">Menu</div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Portfolio</Link>
        </h1>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="md:hidden">Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;