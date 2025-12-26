import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hero({ darkTheme }) {
  const [imgError, setImgError] = useState(false);
  const [showBio, setShowBio] = useState(false);

  // ✅ mobile-only collapse
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-500";

  // --- Smooth expand/collapse ---
  const bioRef = useRef(null);
  const [bioMaxH, setBioMaxH] = useState(0);

  const measureHeights = () => {
    const el = bioRef.current;
    if (!el) return;

    const full = el.scrollHeight;

    // ✅ Desktop: always fully open
    if (!isMobile) {
      setBioMaxH(full);
      return;
    }

    // ✅ Mobile: collapsed height (~1 line of the paragraph)
    const styles = window.getComputedStyle(el);
    const lh = parseFloat(styles.lineHeight || "24");
    const collapsed = Math.ceil(lh * 1 + 2);

    setBioMaxH(showBio ? full : collapsed);
  };

  // Track mobile/desktop
  useLayoutEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Re-measure when state changes
  useLayoutEffect(() => {
    measureHeights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBio, darkTheme, isMobile]);

  // Optional: when switching to desktop, reset showBio so it doesn't feel "stuck"
  useLayoutEffect(() => {
    if (!isMobile) setShowBio(false);
  }, [isMobile]);

  return (
    <section id="home" className="scroll-mt-24 px-4 py-16">
      <article
        className={`
          relative max-w-2xl mx-auto rounded-3xl p-6 sm:p-8
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
        {/* soft glow */}
        <div
          className={`
            pointer-events-none absolute -inset-0.5 rounded-3xl blur-2xl opacity-60
            ${darkTheme ? "bg-sky-500/10" : "bg-sky-400/10"}
          `}
        />

        <div className="relative">
          {/* TOP */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Avatar */}
            <div
              className={`
                w-24 h-24 rounded-full
                ring-2 shadow-md overflow-hidden
                ${darkTheme ? "ring-sky-400" : "ring-sky-500"}
              `}
            >
              {!imgError ? (
                <img
                  src="/src/assets/man-smile.png"
                  alt="Mohamed Jalloh"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-stone-700 text-white text-xl font-semibold">
                  MJ
                </div>
              )}
            </div>

            {/* Name + headline */}
            <div className="flex-1">
              <p
                className={`
                  text-xs uppercase tracking-[0.25em]
                  ${darkTheme ? "text-sky-300" : "text-sky-700"}
                `}
              >
                Front-End Developer
              </p>

              <div className="mt-1 flex max-sm:flex-col max-sm:items-start items-center gap-2">
                <h1
                  className={`text-3xl sm:text-4xl font-semibold ${textMain}`}
                >
                  Mohamed Jalloh
                </h1>

                <span
                  className={`
                    text-xs px-2 py-1 rounded-full border
                    ${
                      darkTheme
                        ? "border-white/10 text-stone-300 bg-white/5"
                        : "border-black/10 text-stone-700 bg-black/5"
                    }
                  `}
                >
                  @CodingWithMBJ
                </span>
              </div>

              <p className={`mt-2 ${textMuted}`}>
                I build clean, responsive, user-focused interfaces with React
                and modern tooling.
              </p>
            </div>
          </div>

          {/* BIO (animated, mobile-only collapse) */}
          <div className="mt-6">
            <div
              className="relative"
              style={{
                maxHeight: bioMaxH ? `${bioMaxH}px` : undefined,
                overflow: "hidden",
                transition: isMobile
                  ? "max-height 320ms ease, opacity 240ms ease"
                  : undefined,
                opacity: isMobile && !showBio ? 0.95 : 1,
              }}
            >
              {/* Fade mask only when collapsed on mobile */}
              {isMobile && !showBio ? (
                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute bottom-0 left-0 right-0 h-10
                    ${
                      darkTheme
                        ? "bg-gradient-to-t from-stone-900/80 to-transparent"
                        : "bg-gradient-to-t from-white/80 to-transparent"
                    }
                  `}
                />
              ) : null}

              <p ref={bioRef} className={`leading-relaxed ${textSub}`}>
                <span className="block text-md text-sky-500">
                  Briefly About Me:
                </span>
                I specialize in crafting polished UI, smooth interactions, and
                accessible components. I’m comfortable integrating APIs and
                backend services when needed to ship real-world features
                end-to-end.
              </p>
            </div>

            {/* Button only on mobile */}
            {isMobile && (
              <button
                type="button"
                onClick={() => setShowBio((prev) => !prev)}
                aria-expanded={showBio}
                className={`
                  mt-3 inline-flex items-center gap-2 text-sm font-medium
                  underline underline-offset-4 transition-colors
                  ${
                    darkTheme
                      ? "text-sky-300 hover:text-sky-200"
                      : "text-sky-700 hover:text-sky-600"
                  }
                `}
              >
                {showBio ? "Show less" : "Show more"}
                <span className="text-base leading-none">
                  {showBio ? "↑" : "↓"}
                </span>
              </button>
            )}
          </div>

          {/* SKILLS */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Vite",
              "Accessibility",
            ].map((skill) => (
              <li
                key={skill}
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
                {skill}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className={`text-sm ${textMuted}`}>
              Available for freelance & full-time roles.
            </div>

            <div className="flex gap-3">
              <Link
                to="/projects"
                className={`
                  px-5 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${
                    darkTheme
                      ? "bg-white/5 text-stone-100 ring-1 ring-white/10 hover:bg-white/10"
                      : "bg-black/5 text-stone-900 ring-1 ring-black/10 hover:bg-black/10"
                  }
                `}
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className={`
                  px-5 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${
                    darkTheme
                      ? "bg-sky-500 text-white hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
                      : "bg-sky-600 text-white hover:bg-sky-500"
                  }
                `}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
