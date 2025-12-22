import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header({ darkTheme, isOpened, openMenu, closeMenu }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      if (goingDown && y > 80) setHidden(true);
      if (!goingDown) setHidden(false);

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 left-0 flex justify-center items-center p-4 z-50
        transition-transform duration-300
        ${hidden ? "-translate-y-24" : "translate-y-0"}
      `}
    >
      <div
        className={`w-full max-w-5xl mx-auto px-4 py-3 rounded-2xl border backdrop-blur transition-colors 
          flex items-center justify-between gap-4
          ${
            darkTheme
              ? "bg-black/40 border-stone-800 text-stone-100"
              : "bg-white/70 border-stone-300 text-stone-900"
          }
        `}
      >
        <Link to={"/"} aria-label="Home" className="text-2xl flex items-center">
          <ion-icon name="finger-print-outline"></ion-icon>
        </Link>
        {/* Desktop nav + Mobile slide-in nav */}
        <Navbar
          isOpened={isOpened}
          closeMenu={closeMenu}
          darkTheme={darkTheme}
        />

        <button
          onClick={openMenu}
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden relative w-10 h-10 grid place-items-center rounded-xl  z-50
             hover:bg-black/10 dark:hover:bg-white/10 transition"
        >
          {/* Top line */}
          <span
            className={`
      absolute block h-[2px] w-6
      transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${darkTheme ? "bg-stone-100" : "bg-stone-900"}
      ${
        isOpened
          ? "rotate-45 translate-y-0 scale-105"
          : "-translate-y-2 scale-100"
      }
    `}
          />

          {/* Bottom line */}
          <span
            className={`
      absolute block h-[2px] w-6
      transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${darkTheme ? "bg-stone-100" : "bg-stone-900"}
      ${
        isOpened
          ? "-rotate-45 translate-y-0 scale-105"
          : "translate-y-2 scale-100"
      }
    `}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
