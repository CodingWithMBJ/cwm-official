import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";

function AboutMe({ darkTheme }) {
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";
  const textSub = darkTheme ? "text-stone-300" : "text-stone-600";

  return (
    <section id="aboutme" className="scroll-mt-24 px-4 py-16">
      <article
        title="A bit about me"
        className="max-sm:max-w-xl md:max-w-6xl mx-auto"
      >
        <h2 className={`text-2xl font-semibold py-2 ${textMain}`}>About Me</h2>

        <p className={`mb-3 ${textSub}`}>
          I’m a front-end developer who specializes in building clean,
          responsive, and user-focused interfaces. I enjoy turning ideas and
          designs into polished, accessible experiences that feel fast and
          intuitive.
        </p>

        <p className={`${textSub}`}>
          Most of my work is centered around React, modern JavaScript, and tools
          like Vite and Tailwind CSS. I have working knowledge of backend
          systems with Node.js and APIs, which helps me collaborate effectively
          and build complete, real-world applications. I’m always refining my
          fundamentals and shipping projects that push my skills forward.
        </p>
      </article>

      <Experience darkTheme={darkTheme} />

      {/* ✅ Add Certifications */}
      <Certifications darkTheme={darkTheme} />

      <Skills darkTheme={darkTheme} />
    </section>
  );
}

export default AboutMe;
