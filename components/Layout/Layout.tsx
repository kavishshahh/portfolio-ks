// components/Layout.js
import React, { useRef } from "react";
import { useRouter } from "next/router";
import Nav from "../Nav/Nav";
import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
import styles from "./Layout.module.css";
import Hero from "../sections/Hero/Hero";

const Layout = () => {
  const router = useRouter();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref: any) => {
    console.log("ref", ref.current);

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const refs = {
    heroRef,
    aboutRef,
    experienceRef,
    projectsRef,
  };

  return (
    <>
      <Nav scrollToRef={scrollToRef} refs={refs} />
      <main className={styles.main}>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Layout;
