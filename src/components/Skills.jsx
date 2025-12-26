import React from "react";
import { skills } from "../data/skills";

function Skills({ darkTheme }) {
  // ✅ same tokens as Hero
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-500";

  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h2 className={`text-2xl font-semibold ${textMain}`}>Skills</h2>
          <p className={`mt-2 ${textMuted}`}>
            Technologies and tools I use to build modern web experiences.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <article
              key={skill.id}
              className={`
                relative rounded-2xl p-5
                backdrop-blur-xl ring-1 shadow-2xl
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-sky-500/20
                ${
                  darkTheme
                    ? "bg-stone-900/70 ring-white/10"
                    : "bg-white/70 ring-black/5"
                }
              `}
            >
              {/* ✅ same glow behavior as Hero */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none absolute -inset-0.5 rounded-2xl blur-2xl opacity-60
                  ${darkTheme ? "bg-sky-500/10" : "bg-sky-400/10"}
                `}
              />

              <div className="relative">
                {/* Category (match Hero label vibe) */}
                <p
                  className={`
                    text-xs uppercase tracking-[0.25em] mb-4
                    ${darkTheme ? "text-sky-300" : "text-sky-700"}
                  `}
                >
                  {skill.category}
                </p>

                {/* Items (✅ exactly same as Hero skills pills) */}
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item, index) => (
                    <li
                      key={index}
                      className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        transition-colors
                        ${
                          darkTheme
                            ? "bg-sky-400/10 text-sky-200 ring-1 ring-white/10"
                            : "bg-sky-100 text-sky-800 ring-1 ring-black/5"
                        }
                      `}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Optional small helper line (same tone as Hero textSub) */}
                <p className={`mt-4 text-sm ${textSub}`}>
                  Building UI with clean components and modern tooling.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
