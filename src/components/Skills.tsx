import React from "react";
import { skillGroups } from "../data";

const skillLogos: Record<string, string> = {
  "React.js": "react.svg",
  "Redux Toolkit": "reduxtoolkit.svg",
  "Redux Saga": "reduxsaga.svg",
  "Micro-Frontend Development":
    "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
  ".NET Core": "dotnet.svg",
  "Node.js": "node.svg",
  Python: "python.svg",
  Rust: "rust.svg",
  "Cosmos DB": "cosmosdb.svg",
  MongoDB: "mongodb.svg",
  PostgreSQL: "postgresql.svg",
  Azure: "azure.svg",
  AWS: "aws.svg",
  Docker: "docker.svg",
  Terraform: "terraform.svg",
};

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Technical Expertise</h2>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill, sIndex) => {
                const logoUrl =
                  group.title === "Frontend" ||
                  group.title === "Backend" ||
                  group.title === "Database & Cloud"
                    ? skillLogos[skill]
                    : null;
                return logoUrl ? (
                  <div key={sIndex} className="skill-item">
                    <img
                      src={logoUrl}
                      alt={skill}
                      title={skill}
                      className="skill-logo"
                    />
                    <span className="skill-name">{skill}</span>
                  </div>
                ) : (
                  <span key={sIndex} className="skill-tag">
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
