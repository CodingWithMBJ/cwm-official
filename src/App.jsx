import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProjectsArchives from "./pages/ProjectsArchives";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

function getInitialTheme() {
  const saved = localStorage.getItem("theme"); // "dark" | "light" | null
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return false; // default
}

function App() {
  const location = useLocation();
  const isArchivePage = location.pathname === "/projects";
  const isResumePage = location.pathname === "/resume";
  const hideNav = isArchivePage || isResumePage;

  const [darkTheme, setDarkTheme] = useState(() => getInitialTheme());
  const [isOpened, setIsOpened] = useState(false);

  const handleThemeToggle = () => {
    setDarkTheme((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const openMenu = () => setIsOpened((prev) => !prev);
  const closeMenu = () => setIsOpened(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
    document.body.classList.toggle("light-theme", !darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    document.body.style.overflow = isOpened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened]);

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-5 pb-25">
      {/* Theme toggle buttons */}
      <button
        type="button"
        onClick={handleThemeToggle}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-60 cursor-pointer"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <ion-icon
          className="text-2xl rotate-180"
          name="bulb-outline"
        ></ion-icon>
      </button>

      <button
        type="button"
        onClick={handleThemeToggle}
        className="text-sm opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center fixed top-0 right-0 cursor-pointer z-60"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <span
          className={`h-8 w-0.5 ${darkTheme ? "bg-stone-100" : "bg-stone-950"}`}
        ></span>
        <ion-icon
          name="pin-outline"
          className="rotate-180 text-3xl active:-translate-y-0.5 -translate-y-1 transition-transform"
        ></ion-icon>
      </button>

      {/* ✅ Hide navbar on archive page */}
      {!hideNav && (
        <Navbar
          darkTheme={darkTheme}
          isOpened={isOpened}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
      )}

      <Routes>
        <Route path="/" element={<Home darkTheme={darkTheme} />} />
        <Route
          path="/projects"
          element={<ProjectsArchives darkTheme={darkTheme} />}
        />
        <Route path="/resume" element={<Resume darkTheme={darkTheme} />} />
      </Routes>

      <Footer darkTheme={darkTheme} />
    </div>
  );
}

export default App;
