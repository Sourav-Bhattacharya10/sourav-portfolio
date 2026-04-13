import React from "react";
import { experience } from "../data";

const Experience: React.FC = () => {
  const bgColors = ["#f0f7ff", "#fff0f0", "#f0fff4", "#fffaf0", "#f5f0ff", "#f0faff"];
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experience.map((job, index) => (
          <div key={index} className="exp-item" style={{ backgroundColor: bgColors[index % bgColors.length] }}>
            <div className="exp-header">
              <div>
                <h3>{job.role}</h3>
                <span className="exp-company">{job.company}</span>
              </div>
              <span className="exp-duration">{job.duration}</span>
            </div>
            <ul className="exp-details">
              {job.details.map((detail, dIndex) => (
                <li key={dIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
