// components/Layout.js
import React, { useRef } from "react";
import { useRouter } from "next/router";
import Nav from "../Nav";
import Hero from "../sections/Hero";
import About from "../sections/About/About";

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
      <main
        style={{
          padding: "0 150px",
        }}
      >
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </main>
    </>
  );
};

export default Layout;
