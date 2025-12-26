import React from "react";

function Contacts({ darkTheme }) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2
            id="contact-heading"
            className={`text-3xl font-semibold ${
              darkTheme ? "text-stone-100" : "text-stone-900"
            }`}
          >
            Get in Touch
          </h2>
          <p
            className={`mt-3 max-w-xl mx-auto ${
              darkTheme ? "text-stone-400" : "text-stone-600"
            }`}
          >
            Have a project in mind, a question, or just want to connect? I’m
            always open to discussing new opportunities.
          </p>
        </header>

        {/* Card */}
        <article
          className={`
            relative rounded-3xl p-6 sm:p-8
            ring-1 backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-sky-500/20
            ${
              darkTheme
                ? "bg-stone-900/60 ring-white/10"
                : "bg-white/70 ring-black/5"
            }
          `}
        >
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute -inset-0.5 rounded-3xl blur-2xl opacity-60
              ${darkTheme ? "bg-sky-500/10" : "bg-sky-400/10"}
            `}
          />

          <div className="relative grid gap-6 sm:grid-cols-2">
            {/* Left */}
            <div>
              <h3
                className={`text-lg font-semibold ${
                  darkTheme ? "text-stone-100" : "text-stone-900"
                }`}
              >
                Let’s build something great
              </h3>

              <p
                className={`mt-2 ${
                  darkTheme ? "text-stone-300" : "text-stone-600"
                }`}
              >
                I specialize in front-end development with React, focusing on
                clean UI, accessibility, and performance. I’m open to freelance,
                contract, and full-time roles.
              </p>

              {/* Contact info */}
              <ul className="mt-6 space-y-3">
                <li
                  className={`flex items-center gap-3 ${
                    darkTheme ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  <span className="text-xl flex items-center">
                    <ion-icon name="mail-unread-outline"></ion-icon>
                  </span>
                  <a
                    href="mailto:codingwithmbj@gmail.com"
                    className="underline underline-offset-4 hover:text-sky-400 transition-colors"
                  >
                    codingwithmbj@gmail.com
                  </a>
                </li>

                <li
                  className={`flex items-center gap-3 ${
                    darkTheme ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  <span className="text-xl flex items-center">
                    <ion-icon name="globe-outline"></ion-icon>
                  </span>
                  <a
                    href="https://www.codingwithmbj.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-sky-400 transition-colors"
                  >
                    My Portfolio
                  </a>
                </li>

                <li
                  className={`flex items-center gap-3 ${
                    darkTheme ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  <span className="text-xl flex items-center">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </span>
                  <a
                    href="https://www.linkedin.com/in/abooabdillaahmbj/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-sky-400 transition-colors"
                  >
                    My LinkedIn
                  </a>
                </li>

                <li
                  className={`flex items-center gap-3 ${
                    darkTheme ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  <span className="text-xl flex items-center">
                    <ion-icon name="logo-github"></ion-icon>
                  </span>
                  <a
                    href="https://github.com/CodingWithMBJ"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-sky-400 transition-colors"
                  >
                    My GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between">
              <div
                className={`rounded-2xl p-4 ring-1 ${
                  darkTheme
                    ? "bg-white/5 ring-white/10 text-stone-300"
                    : "bg-black/5 ring-black/10 text-stone-700"
                }`}
              >
                <p className="text-sm leading-relaxed">
                  Prefer email? Send me a message and I’ll get back to you as
                  soon as possible.
                </p>
              </div>

              <a
                href="mailto:codingwithmbj@gmail.com"
                className={`
                  mt-6 inline-flex items-center justify-center
                  px-6 py-3 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${
                    darkTheme
                      ? "bg-sky-500 text-white hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
                      : "bg-sky-600 text-white hover:bg-sky-500"
                  }
                `}
              >
                Send Email
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contacts;
