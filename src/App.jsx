import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function getInitialTheme() {
  const saved = localStorage.getItem("theme"); // "dark" | "light" | null
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return false; // default
}

function App() {
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
    // keep other classes intact, only toggle theme classes
    document.body.classList.toggle("dark-theme", darkTheme);
    document.body.classList.toggle("light-theme", !darkTheme);
  }, [darkTheme]);

  // optional: prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened]);

  return (
    <div className="">
      <Header
        darkTheme={darkTheme}
        isOpened={isOpened}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <button
        type="button"
        onClick={handleThemeToggle}
        className="ml-4 text-sm opacity-70 hover:opacity-100 transition flex items-center fixed bottom-5 left-2 cursor-pointer z-60"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <ion-icon
          className="text-2xl"
          name={darkTheme ? "moon-outline" : "sunny-outline"}
        ></ion-icon>
      </button>
    </div>
  );
}

export default App;
