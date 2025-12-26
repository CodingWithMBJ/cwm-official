import React from "react";
import { Link } from "react-router-dom";
import { experience } from "../data/experiences";
import { certifications } from "../data/certifications";
import { skills } from "../data/skills";

function formatDate(d) {
  if (!d) return "";
  return `${d.month ?? ""} ${d.year ?? ""}`.trim();
}

function formatRange(exp) {
  const start = `${exp.start?.month ?? ""} ${exp.start?.year ?? ""}`.trim();
  if (!exp.end) return start ? `${start} – Present` : "Present";
  const end = `${exp.end?.month ?? ""} ${exp.end?.year ?? ""}`.trim();
  return `${start} – ${end}`.trim();
}

function Resume({ darkTheme }) {
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-700";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-600";

  const card = darkTheme
    ? "bg-stone-900 border border-white/10"
    : "bg-white border border-black/10";

  return (
    <main className="w-full px-4 py-16 print:px-0 print:py-0">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* HEADER */}
        <header className="space-y-3">
          <h1 className={`text-3xl font-semibold ${textMain}`}>
            Mohamed Jalloh
          </h1>
          <p className={`font-medium ${textSub}`}>
            Front-End Developer — React • TypeScript • Tailwind CSS
          </p>
          <p className={`text-sm ${textMuted}`}>
            United States · Remote / Hybrid · @CodingWithMBJ
          </p>

          {/* Actions (hidden in print) */}
          <div className="flex gap-4 pt-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="text-sm underline underline-offset-4"
            >
              Print / Save PDF
            </button>
            <Link to="/" className="text-sm underline underline-offset-4">
              Back to portfolio
            </Link>
          </div>
        </header>

        {/* SUMMARY */}
        <section>
          <p className={`leading-relaxed ${textSub}`}>
            Front-end developer focused on building clean, responsive, and
            accessible user interfaces. Experienced with React and modern
            JavaScript tooling, with working knowledge of APIs and backend
            collaboration to deliver real-world applications.
          </p>
        </section>

        {/* SKILLS */}
        <section className={`rounded-lg p-5 ${card}`}>
          <h2 className={`text-lg font-semibold ${textMain}`}>Skills</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.id}>
                <p className={`text-sm font-semibold ${textMain}`}>
                  {group.category}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`text-xs px-2 py-1 rounded border ${
                        darkTheme
                          ? "border-white/10 text-stone-300"
                          : "border-black/10 text-stone-700"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className={`rounded-lg p-5 ${card}`}>
          <h2 className={`text-lg font-semibold ${textMain}`}>Experience</h2>

          <div className="mt-5 space-y-6">
            {experience.map((exp) => (
              <article key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className={`font-semibold ${textMain}`}>{exp.title}</h3>
                  <span className={`text-sm ${textMuted}`}>
                    {formatRange(exp)}
                  </span>
                </div>

                <p className={`${textSub}`}>
                  {exp.company}
                  {exp.employmentType ? ` • ${exp.employmentType}` : ""}
                </p>

                <p className={`text-sm ${textMuted}`}>
                  {exp.location}
                  {exp.locationType ? ` • ${exp.locationType}` : ""}
                </p>

                {exp.summary && (
                  <p className={`mt-2 ${textSub}`}>{exp.summary}</p>
                )}

                {exp.highlights?.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className={textSub}>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className={`rounded-lg p-5 ${card}`}>
          <h2 className={`text-lg font-semibold ${textMain}`}>
            Certifications
          </h2>

          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.id}>
                <p className={`font-medium ${textMain}`}>{c.name}</p>
                <p className={`${textSub}`}>{c.issuer}</p>
                {c.issued && (
                  <p className={`text-sm ${textMuted}`}>
                    Issued {formatDate(c.issued)}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* FOOTER NOTE */}
        <p className={`text-xs ${textMuted} print:hidden`}>
          Tip: Use your browser’s “Save as PDF” for best results.
        </p>
      </div>
    </main>
  );
}

export default Resume;
