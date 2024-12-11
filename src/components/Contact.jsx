import React from "react";

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
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded-md"
          rows="4"
        ></textarea>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;