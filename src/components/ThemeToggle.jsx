import React from "react";

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center relative h-7 w-12 rounded-full bg-stone-700/80 px-0.75 transition-colors duration-300"
    >
      <span
        className={`
          w-5 h-5 rounded-full bg-white shadow-sm
          transform transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
}

export default ThemeToggle;
