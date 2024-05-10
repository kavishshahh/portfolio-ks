import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  padding-top: var(--nav-height);
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: inherit;
  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    color: var(--green);
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));

    @media (max-width: 1080px) {
      margin: 0px 0px 30px 4px;
    }
    @media (max-width: 480px) {
      margin: 0px 0px 20px 2px;
    }
  }

  h3 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
    font-weight: 600;
  }

  h2 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }
  a {
    display: inline-block;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setSectionTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    position: "relative",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "0",
    paddingTop: "var(--nav-height)",
    maxWidth: "1000px",
    margin: "0 auto",
    top: `-${sectionTop}px`,
    boxSizing: "inherit",
  };

  const pStyle = {
    margin: "20px 0 0",
    maxWidth: "540px",
  };

  // const emailLinkStyle = {
  //   display: "inline-block",
  //   textDecoration: "none",
  //   padding: "1rem 2rem",
  //   color: "var(--green)",
  //   marginTop: "50px",
  //   backgroundColor: "transparent",
  //   border: "1px solid var(--green)",
  //   borderRadius: "var(--border-radius)",
  // };

  const one = <h1>Hi, my name is</h1>;
  const two = <h2>Kavish Shah.</h2>;
  const three = <h3>I build things for the web.</h3>;
  const four = (
    <p style={pStyle}>
      I’m a software engineer building (and occasionally designing) exceptional
      digital experiences. Currently, I’m focused on building Products for Web3.
      {/* {" "} */}
      {/* <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
        Upstatement
      </a> */}
      .
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
    >
      Check out my Resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledSection>
      {items.map((item, i) => (
        <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>
          {item}
        </div>
      ))}
    </StyledSection>
  );
};

export default Hero;
