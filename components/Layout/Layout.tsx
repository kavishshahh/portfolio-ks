// components/Layout.js
import { useRouter } from "next/router";
import { useRef } from "react";
import Nav from "../Nav/Nav";
import About from "../sections/About/About";
import Achievements from "../sections/Achievements/Achievements";
import Contact from "../sections/Contact/Contact";
import Experience from "../sections/Experience/Experience";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import styles from "./Layout.module.css";

const Layout = () => {
  const router = useRouter();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const achievementsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref: any) => {
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
    achievementsRef,
    experienceRef,
    projectsRef,
    contactRef,
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
        <div ref={achievementsRef}>
          <Achievements />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Layout;
