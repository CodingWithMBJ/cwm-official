import React from "react";
import { projects } from "../data/projects";

function ProjectCard() {
  return (
    <section className="">
      {projects.map((project) => {
        <article className="" key={project.id}>
          <section className="">
            <figure className="">
              <img src={project.previewImg} alt="img" />
            </figure>

            <article className="">
              <h2 className="">{project.title}</h2>
              <p className="">{project.description}</p>
            </article>
            <ul className="">
              {project.tech.map((tech) => {
                <li className="">{tech.length}</li>;
              })}
            </ul>
            <ul className="">
              <li>
                <a href="">
                  <span>Github</span>
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Live Preview</span>
                  <span>Live Preview</span>
                </a>
              </li>
            </ul>
          </section>
        </article>;
      })}
    </section>
  );
}

export default ProjectCard;
