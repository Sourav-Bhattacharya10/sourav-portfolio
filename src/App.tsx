import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
