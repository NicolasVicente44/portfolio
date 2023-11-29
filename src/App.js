import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [theme, setTheme] = useState("dark"); // Default theme
  const [nav, setNav] = useState(false); // Define the nav state

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar toggleTheme={toggleTheme} theme={theme} setNav={setNav} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills nav={nav} theme={theme} /> {/* Pass nav to Skills */}
      <Work nav={nav} theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
