import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QrCode from "./components/QrCode";

function App() {
  // system theme preference at the start
  const systemTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  // Initialize the theme state with a temporary value
  const [theme, setTheme] = useState("light");
  const [nav, setNav] = useState(false); // Define the nav state

  useEffect(() => {
    // saved theme from localStorage or fallback to system theme
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    setTheme(savedTheme);
  }, [systemTheme]);

  useEffect(() => {
    // If no theme preference is stored, set the default theme to light
    if (!localStorage.getItem("theme")) {
      setTheme("light");
    }
  }, []);

  // After the useEffect has run, update the theme to the correct value
  useEffect(() => {
    setTheme((prevTheme) => {
      localStorage.setItem("theme", prevTheme);
      return prevTheme;
    });
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar toggleTheme={toggleTheme} theme={theme} setNav={setNav} />
      <Routes>
        <Route path="/" element={<Hero nav={nav} theme={theme} />} />
        <Route path="/about" element={<About nav={nav} theme={theme} />} />
        <Route path="/skills" element={<Skills nav={nav} theme={theme} />} />
        <Route path="/work" element={<Work nav={nav} theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/qrcode" element={<QrCode theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
