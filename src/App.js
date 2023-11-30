import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  // system theme preference at the start
  const systemTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(systemTheme); // Set default theme based on system preference
  const [nav, setNav] = useState(false); // Define the nav state

  useEffect(() => {
    // saved theme from localStorage or fallback to system theme
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    setTheme(savedTheme);
  }, [systemTheme]);

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
      <Skills nav={nav} theme={theme} />
      <Work nav={nav} theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
