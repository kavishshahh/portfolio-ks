import React, { useState, useEffect } from "react";

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
    height: "100vh",
    padding: "0",
    paddingTop: "var(--nav-height)",
    maxWidth: "1000px",
    margin: "0 auto",
    top: `-${sectionTop}px`,
    boxSizing:"inherit"
  };

  const h1Style = {
    margin: "0 0 20px 4px",
    color: "var(--green)",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--fz-xl)",
    fontWeight: 400,
  };

  const h3Style = {
    marginTop: "5px",
    color: "var(--slate)",
    lineHeight: "0.95",
    fontSize: "4vw",
    fontWeight: "600",
  };

  const pStyle = {
    margin: "20px 0 0",
    maxWidth: "540px",
    color: "var(--slate)",
  };

  const emailLinkStyle = {
    display: "inline-block",
    textDecoration: "none",
    padding: "1rem 2rem",
    color: "var(--green)",
    marginTop: "50px",
    backgroundColor: "transparent",
    border: "1px solid var(--green)",
    borderRadius: "var(--border-radius)",
  };

  const one = <h1 style={h1Style}>Hi, my name is</h1>;
  const two = (
    <h2
      style={{
        margin: "0px",
        fontSize: "4vw",
        fontWeight: "600",
        color: "var(--lightest-slate)",
        lineHeight: "1.1",
      }}
    >
      Kavish Shah.
    </h2>
  );
  const three = (
    <h3 style={h3Style} className="big-heading">
      I build things for the web.
    </h3>
  );
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
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer"
      style={emailLinkStyle}
    >
      Check out my Resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section style={styles}>
      {items.map((item, i) => (
        <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>
          {item}
        </div>
      ))}
    </section>
  );
};

export default Hero;
