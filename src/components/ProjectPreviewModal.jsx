import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectPreviewModal({ open, onClose, project, darkTheme }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !project) return null;

  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";

  return (
    <div
      className="hidden lg:block fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="min-h-full flex items-center justify-center p-6">
        <div
          className={`
            relative w-full max-w-xl rounded-3xl overflow-hidden ring-1 shadow-2xl
            ${
              darkTheme
                ? "bg-stone-900/80 ring-white/10"
                : "bg-white/85 ring-black/10"
            }
          `}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-4">
            <div>
              <div className={`text-xs ${textSub}`}>{project.year || ""}</div>
              <h3 className={`text-lg font-semibold ${textMain}`}>
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`
                inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 transition
                ${
                  darkTheme
                    ? "bg-stone-900/40 text-stone-200 ring-white/10 hover:bg-stone-900/70"
                    : "bg-white/70 text-stone-800 ring-black/10 hover:bg-white"
                }
              `}
              aria-label="Close preview"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 pb-4">
            <img
              src={project.previewImg}
              alt={project.title}
              className="w-full h-48 object-cover rounded-2xl"
              loading="lazy"
            />

            <p className={`mt-4 text-sm leading-relaxed ${textSub}`}>
              {project.description}
            </p>

            {!!project.tech?.length && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 10).map((t) => (
                  <li
                    key={`${project.id}-${t}`}
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium ring-1
                      ${
                        darkTheme
                          ? "bg-cyan-400/10 text-cyan-200 ring-white/10"
                          : "bg-cyan-100 text-cyan-800 ring-black/10"
                      }
                    `}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            <div className="mt-5 flex items-center gap-3 whitespace-nowrap">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ring-1 transition
                    ${
                      darkTheme
                        ? "bg-cyan-500/10 text-cyan-200 ring-white/10 hover:bg-cyan-500/20"
                        : "bg-cyan-100 text-cyan-800 ring-black/10 hover:bg-cyan-200/80"
                    }
                  `}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Live
                </a>
              ) : null}

              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ring-1 transition
                    ${
                      darkTheme
                        ? "bg-stone-900/40 text-stone-200 ring-white/10 hover:bg-stone-900/70"
                        : "bg-white/70 text-stone-800 ring-black/10 hover:bg-white"
                    }
                  `}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Repo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreviewModal;
