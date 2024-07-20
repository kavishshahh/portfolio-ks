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
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToRef = (ref: any) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <>
      <Nav scrollToRef={scrollToRef} />
      <main className={styles.main}>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={aboutRef}>
          <Experience />
        </div>
        <div ref={aboutRef}>
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Layout;
