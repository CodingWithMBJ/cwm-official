import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function Projects({ darkTheme }) {
  const textMain = darkTheme ? "text-stone-100" : "text-stone-900";

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className={`text-2xl font-semibold ${textMain}`}>
            Recent Projects
          </h2>

          <Link
            to="/projects"
            className={`
              text-sm font-medium underline underline-offset-4
              ${
                darkTheme
                  ? "text-sky-300 hover:text-sky-200"
                  : "text-sky-700 hover:text-sky-600"
              }
            `}
          >
            See all →
          </Link>
        </div>

        <ProjectCard darkTheme={darkTheme} limit={6} />
      </article>
    </section>
  );
}

export default Projects;
