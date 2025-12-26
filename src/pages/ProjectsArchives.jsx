import React, { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function ProjectsArchives({ darkTheme }) {
  const [query, setQuery] = useState("");

  const filteredCount = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects.length;

    return projects.filter((p) => {
      const hay = `${p.title ?? ""} ${p.description ?? ""} ${(
        p.tech || []
      ).join(" ")}`.toLowerCase();
      return hay.includes(q);
    }).length;
  }, [query]);

  return (
    <section className="px-4 py-16 w-full">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1
              className={`text-3xl font-semibold ${
                darkTheme ? "text-stone-100" : "text-stone-900"
              }`}
            >
              Project Archives
            </h1>
            <p
              className={`mt-2 ${
                darkTheme ? "text-stone-400" : "text-stone-600"
              }`}
            >
              All projects I’ve built — experiments, real-world apps, and UI
              work.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`text-sm ${
                darkTheme ? "text-stone-400" : "text-stone-600"
              }`}
            >
              {filteredCount} projects
            </span>

            <Link
              to="/"
              className={`
                text-sm font-medium underline underline-offset-4
                ${
                  darkTheme
                    ? "text-cyan-300 hover:text-cyan-200"
                    : "text-cyan-700 hover:text-cyan-600"
                }
              `}
            >
              ← Back home
            </Link>
          </div>
        </header>

        {/* Search */}
        <div className="mb-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (title, description, tech)..."
            className={`
              w-full rounded-2xl px-4 py-3 ring-1 outline-none
              ${
                darkTheme
                  ? "bg-stone-900/60 text-stone-100 ring-white/10 placeholder:text-stone-500"
                  : "bg-white/70 text-stone-900 ring-black/10 placeholder:text-stone-500"
              }
            `}
          />
        </div>

        {/* ALL Projects */}
        <ProjectCard darkTheme={darkTheme} />
      </div>
    </section>
  );
}

export default ProjectsArchives;
