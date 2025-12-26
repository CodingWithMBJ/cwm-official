import React from "react";
import CertificationCard from "./CertificationCard";

function Certifications({ darkTheme }) {
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textMuted = darkTheme ? "text-stone-400" : "text-stone-500";

  return (
    <section id="certifications" className="scroll-mt-24 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 className={`text-2xl font-semibold ${textMain}`}>
            Certifications
          </h2>
          <p className={`mt-2 ${textMuted}`}>
            Credentials that support my frontend skills and tooling knowledge.
          </p>
        </header>

        <CertificationCard darkTheme={darkTheme} />
      </div>
    </section>
  );
}

export default Certifications;
