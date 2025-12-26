import React, { useEffect, useMemo, useState } from "react";
import { certifications } from "../data/certifications";

function formatDate(d) {
  if (!d) return "";
  return `${d.month ?? ""} ${d.year ?? ""}`.trim();
}

function CertificationCard({ darkTheme }) {
  const [activeId, setActiveId] = useState(null);

  // Hover-capable devices (desktop) vs touch devices (mobile/tablet)
  const canHover = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
  }, []);

  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-500";

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  // Esc closes overlay
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert) => {
        const issued = formatDate(cert.issued);
        const isActive = activeId === cert.id;

        // On desktop hover devices: hover handles overlay.
        // On touch devices: click toggles overlay.
        const clickToToggle = !canHover;

        return (
          <article
            key={cert.id}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            onClick={() => (clickToToggle ? toggle(cert.id) : undefined)}
            onKeyDown={(e) => {
              if (!clickToToggle) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(cert.id);
              }
            }}
            className={`
              group relative h-72 rounded-3xl overflow-hidden
              ring-1 shadow-2xl backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-sky-500/30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
              ${clickToToggle ? "cursor-pointer" : "cursor-default"}
              ${
                darkTheme
                  ? "bg-stone-900/70 ring-white/10"
                  : "bg-white/70 ring-black/5"
              }
            `}
          >
            {/* Background image (clear by default) */}
            {cert.logo ? (
              <img
                src={cert.logo}
                alt={cert.name}
                loading="lazy"
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-all duration-700
                  brightness-100 contrast-105 saturate-105
                  group-hover:scale-105
                  ${isActive ? "scale-105 blur-[1px] brightness-90" : ""}
                  ${
                    canHover
                      ? "group-hover:blur-[1px] group-hover:brightness-90"
                      : ""
                  }
                `}
              />
            ) : (
              <div
                className={`
                  absolute inset-0 flex items-center justify-center
                  text-sm font-semibold tracking-wide
                  ${
                    darkTheme
                      ? "bg-white/5 text-stone-300"
                      : "bg-black/5 text-stone-600"
                  }
                `}
              >
                Certificate Preview
              </div>
            )}

            {/* Overlay tint ONLY when overlay is visible */}
            <div
              aria-hidden
              className={`
                absolute inset-0 transition-opacity duration-300
                ${darkTheme ? "bg-stone-900/25" : "bg-white/25"}
                ${isActive ? "opacity-100" : "opacity-0"}
                ${canHover ? "group-hover:opacity-100" : ""}
              `}
            />

            {/* Glow (Hero style) */}
            <div
              aria-hidden
              className={`
                pointer-events-none absolute -inset-0.5 rounded-3xl blur-2xl opacity-60
                ${darkTheme ? "bg-sky-500/10" : "bg-sky-400/10"}
              `}
            />

            {/* Touch hint (only when closed) */}
            {!canHover && !isActive ? (
              <div
                className={`
                  absolute bottom-3 left-3 right-3
                  rounded-2xl px-3 py-2 text-xs font-medium
                  backdrop-blur-xl ring-1
                  ${
                    darkTheme
                      ? "bg-stone-900/60 text-stone-200 ring-white/10"
                      : "bg-white/70 text-stone-700 ring-black/5"
                  }
                `}
              >
                Tap to view details
              </div>
            ) : null}

            {/* Content overlay: hover (desktop) OR active (touch) */}
            <div
              className={`
                absolute inset-0 p-5 flex flex-col justify-between
                transition-all duration-300
                ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }
                ${
                  canHover
                    ? "group-hover:opacity-100 group-hover:pointer-events-auto"
                    : ""
                }
              `}
            >
              {/* Glass panel */}
              <div
                className={`
                  rounded-2xl p-4 backdrop-blur-xl ring-1
                  ${
                    darkTheme
                      ? "bg-stone-900/70 ring-white/10"
                      : "bg-white/80 ring-black/5"
                  }
                `}
              >
                <p
                  className={`
                    text-xs uppercase tracking-[0.25em]
                    ${darkTheme ? "text-sky-300" : "text-sky-700"}
                  `}
                >
                  Certification
                </p>

                <h3
                  className={`mt-2 text-lg font-semibold leading-snug ${textMain}`}
                >
                  {cert.name}
                </h3>

                <p className={`mt-1 ${textSub}`}>
                  <span className="font-medium">{cert.issuer}</span>
                </p>

                {issued ? (
                  <p className={`mt-1 text-sm ${textMuted}`}>Issued {issued}</p>
                ) : null}

                {Array.isArray(cert.skills) && cert.skills.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {cert.skills.slice(0, 4).map((skill) => (
                      <li
                        key={`${cert.id}-${skill}`}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${
                            darkTheme
                              ? "bg-sky-400/10 text-sky-200 ring-1 ring-white/10"
                              : "bg-sky-100 text-sky-800 ring-1 ring-black/5"
                          }
                        `}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* CTA row */}
              <div className="flex items-center justify-between">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`
                      inline-flex items-center gap-2 text-sm font-medium
                      underline underline-offset-4 transition-colors
                      ${
                        darkTheme
                          ? "text-sky-300 hover:text-sky-200"
                          : "text-sky-700 hover:text-sky-600"
                      }
                    `}
                  >
                    View certificate <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span className={`text-sm ${textMuted}`}>No link added</span>
                )}

                {!canHover ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveId(null);
                    }}
                    className={`
                      px-3 py-2 rounded-xl text-sm font-medium
                      ring-1 backdrop-blur-xl transition-colors
                      ${
                        darkTheme
                          ? "bg-white/5 text-stone-100 ring-white/10 hover:bg-white/10"
                          : "bg-black/5 text-stone-900 ring-black/10 hover:bg-black/10"
                      }
                    `}
                  >
                    Close
                  </button>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default CertificationCard;
