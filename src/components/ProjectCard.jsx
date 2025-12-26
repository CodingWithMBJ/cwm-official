import React from "react";
import { projects } from "../data/projects";

function ProjectCard({ darkTheme, limit }) {
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-500";

  const list = Number.isFinite(limit) ? projects.slice(0, limit) : projects;

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((project) => (
        <article
          key={project.id}
          className={`
            relative rounded-3xl overflow-hidden
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
          {/* Hero-style glow */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute -inset-0.5 rounded-3xl blur-2xl opacity-60
              ${darkTheme ? "bg-sky-500/10" : "bg-sky-400/10"}
            `}
          />

          <div className="relative">
            {/* Image */}
            <div className="p-2">
              <img
                className="w-full h-40 object-cover rounded-2xl"
                src={project.previewImg}
                alt={project.title}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-5">
              <h3 className={`text-lg font-semibold ${textMain}`}>
                {project.title}
              </h3>

              <p className={`mt-1 text-sm leading-relaxed ${textSub}`}>
                {project.description}
              </p>

              {/* Tech chips (if you have them) */}
              {Array.isArray(project.tech) && project.tech.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 6).map((t) => (
                    <li
                      key={`${project.id}-${t}`}
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
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Links (optional) */}
              <div className="mt-5 flex items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      text-sm font-medium underline underline-offset-4
                      ${
                        darkTheme
                          ? "text-sky-300 hover:text-sky-200"
                          : "text-sky-700 hover:text-sky-600"
                      }
                    `}
                  >
                    Live
                  </a>
                ) : null}

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      text-sm font-medium underline underline-offset-4
                      ${
                        darkTheme
                          ? "text-stone-300 hover:text-stone-200"
                          : "text-stone-700 hover:text-stone-900"
                      }
                    `}
                  >
                    Code
                  </a>
                ) : null}

                {project.liveUrl || project.repoUrl ? (
                  <span className={`ml-auto text-xs ${textMuted}`}>
                    {project.year || ""}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProjectCard;
