import React from "react";
import { personalInfo } from "../data";

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>
          I'm currently open to new opportunities and interesting projects.
        </p>
        <a href={`mailto:${personalInfo.email}`} className="btn email-btn">
          {personalInfo.email}
        </a>
        <div className="contact-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p style={{ marginTop: "40px", fontSize: "0.8rem", opacity: 0.7 }}>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & eInk Aesthetic.
        </p>
      </div>
    </section>
  );
};

export default Contact;
