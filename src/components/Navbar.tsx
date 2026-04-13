import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <strong>Deviac93</strong>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              CLOSE
            </span>
          ) : (
            <span style={{ fontSize: "1.5rem" }}>☰</span>
          )}
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>
            Intro
          </a>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#education" onClick={() => setIsOpen(false)}>
            Education
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
