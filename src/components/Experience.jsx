import React from "react";
import { experience } from "../data/experiences";

function formatRange(exp) {
  const start = `${exp.start?.month ?? ""} ${exp.start?.year ?? ""}`.trim();
  if (!exp.end) return start ? `${start} — Present` : "Present";

  const end = `${exp.end?.month ?? ""} ${exp.end?.year ?? ""}`.trim();
  if (!start && !end) return "";
  return `${start} — ${end}`.trim();
}

function Experience({ darkTheme }) {
  // ✅ Match Hero tokens
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-500";

  const line = darkTheme ? "bg-white/10" : "bg-black/10";
  const dot = darkTheme
    ? "bg-sky-400 ring-white/10"
    : "bg-sky-600 ring-black/10";

  const card = darkTheme
    ? "bg-stone-900/70 ring-white/10"
    : "bg-white/70 ring-black/5";

  return (
    <section id="experience" className="scroll-mt-24 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className={`mt-2 ${textMuted}`}>
            Roles I’ve held and what I worked on.
          </p>
        </header>

        {/* Wrapper */}
        <div className="relative">
          {/* ✅ Only show timeline line on desktop (lg+) */}
          <div
            className={`hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] ${line}`}
            aria-hidden="true"
          />

          <ul className="space-y-10">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <li key={exp.id} className="relative">
                  {/* ✅ Only show dots on desktop (lg+) */}
                  <span
                    className={`
                      hidden lg:block
                      absolute left-1/2 top-6 -translate-x-1/2
                      h-4 w-4 rounded-full ring-4 ${dot}
                    `}
                    aria-hidden="true"
                  />

                  {/* ✅ Desktop alternating timeline (lg+) */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
                    {/* LEFT */}
                    <div className={`lg:pr-10 ${isLeft ? "" : "opacity-0"}`}>
                      {isLeft ? (
                        <TimelineCard
                          exp={exp}
                          darkTheme={darkTheme}
                          cardClass={card}
                          textMain={textMain}
                          textSub={textSub}
                          textMuted={textMuted}
                          range={formatRange(exp)}
                        />
                      ) : null}
                    </div>

                    {/* RIGHT */}
                    <div className={`lg:pl-10 ${!isLeft ? "" : "opacity-0"}`}>
                      {!isLeft ? (
                        <TimelineCard
                          exp={exp}
                          darkTheme={darkTheme}
                          cardClass={card}
                          textMain={textMain}
                          textSub={textSub}
                          textMuted={textMuted}
                          range={formatRange(exp)}
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* ✅ Mobile + Tablet single column (below lg) */}
                  <div className="lg:hidden">
                    <TimelineCard
                      exp={exp}
                      darkTheme={darkTheme}
                      cardClass={card}
                      textMain={textMain}
                      textSub={textSub}
                      textMuted={textMuted}
                      range={formatRange(exp)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  exp,
  darkTheme,
  cardClass,
  textMain,
  textSub,
  textMuted,
  range,
}) {
  return (
    <article
      className={`
        relative rounded-2xl p-5 ring-1 backdrop-blur-xl shadow-2xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-sky-500/20
        ${cardClass}
      `}
    >
      {/* soft glow (same as Hero) */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -inset-0.5 rounded-2xl blur-2xl opacity-60
          ${darkTheme ? "bg-sky-500/10" : "bg-sky-400/10"}
        `}
      />

      <div className="relative flex items-start gap-4">
        {/* Logo */}
        <div
          className={`
            w-12 h-12 rounded-xl overflow-hidden shrink-0
            ${darkTheme ? "bg-white/5" : "bg-black/5"}
          `}
        >
          {exp.logo ? (
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center text-xs font-semibold ${textSub}`}
            >
              {(exp.company || "XP").slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="min-w-0">
              <h3 className={`text-lg font-semibold ${textMain}`}>
                {exp.title}
              </h3>

              <p className={`${textSub}`}>
                <span className="font-medium">{exp.company}</span>
                {exp.employmentType ? (
                  <span className={` ${textMuted}`}>
                    {" "}
                    • {exp.employmentType}
                  </span>
                ) : null}
              </p>

              <p className={`text-sm ${textMuted}`}>
                {exp.location}
                {exp.locationType ? ` • ${exp.locationType}` : ""}
              </p>
            </div>

            {range ? (
              <p className={`text-sm ${textMuted} sm:whitespace-nowrap`}>
                {range}
              </p>
            ) : null}
          </div>

          {exp.summary ? (
            <p className={`mt-3 leading-relaxed ${textSub}`}>{exp.summary}</p>
          ) : null}

          {Array.isArray(exp.highlights) && exp.highlights.length > 0 ? (
            <ul className="mt-3 list-disc pl-5 space-y-1">
              {exp.highlights.map((item, idx) => (
                <li key={`${exp.id}-hl-${idx}`} className={`${textSub}`}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {Array.isArray(exp.tech) && exp.tech.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <li
                  key={`${exp.id}-tech-${t}`}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium transition-colors
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
        </div>
      </div>
    </article>
  );
}

export default Experience;
