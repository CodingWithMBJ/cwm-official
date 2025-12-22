import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../data/navigation";

function Navbar({ isOpened, closeMenu, darkTheme }) {
  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex items-center gap-8">
          {navigation.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : darkTheme
                      ? "text-stone-200 hover:text-white"
                      : "text-stone-700 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay */}
      <button
        type="button"
        onClick={closeMenu}
        aria-label="Close menu overlay"
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${darkTheme ? "bg-black/60" : "bg-black/40"}`}
      />

      {/* Mobile slide panel */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-screen w-[80vw] max-w-sm z-50
          border-l backdrop-blur
          transition-transform duration-300
          ${isOpened ? "translate-x-0" : "translate-x-[150vw]"}
          ${
            darkTheme
              ? "bg-stone-950/70 border-stone-800 text-stone-100"
              : "bg-white/80 border-stone-200 text-stone-900"
          }
        `}
      >
        <div className="p-6 pt-24">
          <ul className="flex flex-col gap-6">
            {navigation.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base uppercase tracking-wide transition-colors ${
                      isActive
                        ? "text-cyan-400"
                        : darkTheme
                        ? "text-stone-200 hover:text-white"
                        : "text-stone-700 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
