// components/Layout.js
import React, { useRef } from "react";
import { useRouter } from "next/router";
import Nav from "../Nav";
import Hero from "../sections/Hero";
import About from "../sections/About/About";
import Experience from "../sections/Experience";
import styled from "styled-components";
import Projects from "../sections/Projects";

const MainStyle = styled.main`
  @media (max-width: 1080px) {
    padding: 0 150px;
  }
  @media (max-width: 770px) {
    padding: 0 50px;
  }
`;

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
      <MainStyle>
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
      </MainStyle>
    </>
  );
};

export default Layout;
