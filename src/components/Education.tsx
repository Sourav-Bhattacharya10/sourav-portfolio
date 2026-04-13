import React from "react";
import { education, awards } from "../data";

const Education: React.FC = () => {
  return (
    <section id="education">
      <div className="education-awards-grid">
        <div>
          <h2>Education</h2>
          <div className="skill-group" style={{ border: "none", padding: 0 }}>
            <h3>{education.degree}</h3>
            <p className="exp-company">{education.institution}</p>
            <p className="exp-duration">{education.duration}</p>
            <p>Score: {education.score}</p>
          </div>
        </div>
        <div>
          <h2>Awards</h2>
          <ul className="exp-details" style={{ paddingLeft: "20px" }}>
            {awards.map((award, index) => (
              <li key={index} style={{ marginBottom: "10px", fontWeight: "bold" }}>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
