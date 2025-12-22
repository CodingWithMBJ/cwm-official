import React from "react";
import { skills } from "../data/skills";

function Skills() {
  return (
    <article className="my-5">
      <h2 className="text-2xl py-2 ">Skills</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <article
            className="border border-stone-800 p-4 backdrop-blur-4xl backdrop-hue-rotate-60 bg-stone-900 rounded-2xl "
            key={skill.id}
          >
            <p className="pb-3 underline">{skill.category}</p>
            <ul className="list-disc list-inside space-y-1 text-stone-300">
              {skill.items.map((item, index) => (
                <li key={index} className="text-sm tracking-wide">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </article>
  );
}

export default Skills;
