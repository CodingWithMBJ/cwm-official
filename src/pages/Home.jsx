import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

function Home({ darkTheme }) {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center gap-6`}
    >
      <Hero darkTheme={darkTheme} />
      <AboutMe darkTheme={darkTheme} />
      <Projects darkTheme={darkTheme} />
      <Contacts darkTheme={darkTheme} />
    </main>
  );
}

export default Home;
