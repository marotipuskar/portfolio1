import React from "react";
import BackToTop from "./BackToTop";

const Contact = () => {
  return (
    <section id="contact" className="bg-background p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-secondary mb-4">Feel free to reach out!</p>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded-md"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded-md"
          rows="4"
          required
        ></textarea>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Send
        </button>
      </form>
      <div className="App">
      {/* <div style={{ height: "2000px" }}> 
        Scroll down to see the "Back to Top" button.
      </div> */}
      <BackToTop />
    </div>
    </section>
  );
};

export default Contact;