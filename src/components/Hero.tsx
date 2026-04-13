import React from "react";
import { personalInfo } from "../data";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <img
        src="/profile.jpg"
        alt={personalInfo.name}
        className="profile-img"
      />
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.role}</h2>
      <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
        Senior Fullstack Developer with {personalInfo.experience} of experience building 
        scalable web applications and APIs. Expert in React, .NET Core, Rust, 
        and Cloud technologies.
      </p>
      
      <div className="hero-btns">
        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
        <a href="#contact" className="btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
