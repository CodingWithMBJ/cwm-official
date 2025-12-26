import React, { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import ProjectPreviewModal from "../components/ProjectPreviewModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

function ProjectsArchives({ darkTheme }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((p) => {
      const hay = `${p.title ?? ""} ${p.description ?? ""} ${(
        p.tech || []
      ).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const openPreview = (p) => {
    setActiveProject(p);
    setOpen(true);
  };

  const closePreview = () => {
    setOpen(false);
    setActiveProject(null);
  };

  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-400" : "text-stone-600";
  const panel = darkTheme
    ? "bg-stone-900/60 ring-white/10"
    : "bg-white/70 ring-black/10";
  const rowHover = darkTheme ? "hover:bg-stone-800/40" : "hover:bg-white/90";

  return (
    <section className="px-4 py-16 w-full">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className={`text-3xl font-semibold ${textMain}`}>
              Project Archives
            </h1>
            <p className={`mt-2 ${textSub}`}>
              All projects I’ve built — experiments, real-world apps, and UI
              work.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-sm ${textSub}`}>
              {filtered.length} projects
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

        {/* LIST */}
        <div
          className={`rounded-3xl ring-1 shadow-2xl backdrop-blur-xl overflow-hidden ${panel}`}
        >
          {/* Desktop header row */}
          <div
            className={`
              hidden lg:grid grid-cols-[110px_1.2fr_1fr_250px]
              gap-4 px-5 py-3 text-xs uppercase tracking-wider ${textSub}
            `}
          >
            <span>Year</span>
            <span>Project</span>
            <span>Tech</span>
            <span className="text-right">Actions</span>
          </div>

          <ul className="divide-y divide-white/5">
            {filtered.map((p) => (
              <li key={p.id}>
                <div
                  className={`
                    px-5 py-4 grid gap-3
                    lg:grid-cols-[110px_1.2fr_1fr_250px] lg:items-center
                    transition-colors ${rowHover}
                  `}
                >
                  {/* Year */}
                  <div className={`text-sm ${textSub}`}>{p.year || "—"}</div>

                  {/* Title + desc */}
                  <div>
                    <div className={`font-semibold ${textMain}`}>{p.title}</div>
                    <p className={`mt-1 text-sm leading-relaxed ${textSub}`}>
                      {p.description}
                    </p>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {(p.tech || []).slice(0, 6).map((t) => (
                      <span
                        key={`${p.id}-${t}`}
                        className={`
                          px-2.5 py-1 rounded-full text-xs font-medium ring-1
                          ${
                            darkTheme
                              ? "bg-cyan-400/10 text-cyan-200 ring-white/10"
                              : "bg-cyan-100 text-cyan-800 ring-black/5"
                          }
                        `}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions (ONE LINE) */}
                  <div
                    className="
                      flex items-center gap-2
                      justify-start lg:justify-end
                      whitespace-nowrap
                    "
                  >
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          shrink-0 inline-flex items-center gap-2
                          px-3 py-2 rounded-full text-sm font-medium ring-1 transition
                          ${
                            darkTheme
                              ? "bg-stone-900/30 text-cyan-200 ring-white/10 hover:bg-stone-900/60"
                              : "bg-white/70 text-cyan-700 ring-black/10 hover:bg-white"
                          }
                        `}
                        aria-label={`Open live site for ${p.title}`}
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        Live
                      </a>
                    ) : null}

                    {p.repoUrl ? (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          shrink-0 inline-flex items-center gap-2
                          px-3 py-2 rounded-full text-sm font-medium ring-1 transition
                          ${
                            darkTheme
                              ? "bg-stone-900/30 text-stone-200 ring-white/10 hover:bg-stone-900/60"
                              : "bg-white/70 text-stone-800 ring-black/10 hover:bg-white"
                          }
                        `}
                        aria-label={`Open repo for ${p.title}`}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Repo
                      </a>
                    ) : null}

                    {/* Desktop-only preview */}
                    <button
                      type="button"
                      onClick={() => openPreview(p)}
                      className={`
                        shrink-0 hidden lg:inline-flex items-center gap-2
                        px-3 py-2 rounded-full text-sm font-medium ring-1 transition
                        ${
                          darkTheme
                            ? "bg-cyan-500/10 text-cyan-200 ring-white/10 hover:bg-cyan-500/20"
                            : "bg-cyan-100 text-cyan-800 ring-black/10 hover:bg-cyan-200/80"
                        }
                      `}
                      aria-label={`Preview ${p.title}`}
                    >
                      <FontAwesomeIcon icon={faEye} />
                      Preview
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop modal */}
        <ProjectPreviewModal
          open={open}
          onClose={closePreview}
          project={activeProject}
          darkTheme={darkTheme}
        />
      </div>
    </section>
  );
}

export default ProjectsArchives;
