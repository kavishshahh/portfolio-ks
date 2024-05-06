import React from "react";
import { navLinks } from "../src/config";
import Link from "next/link";

const Nav = ({ scrollToRef }: { scrollToRef: any }) => {
  const handleNavClick = (ref: any) => {
    scrollToRef(ref);
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          padding: "0 50px",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          height: "100px",
          zIndex: "2",
        }}
      >
        <a href="/">Kavish Shah</a>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ol
            style={{
              display: "flex",
              padding: 0,
              margin: 0,
              listStyle: "none",
              color: "var(--lightest-slate)",
            }}
          >
            {navLinks.map(({ url, name }, i) => (
              <li
                key={i}
                style={{
                  margin: "0 5px",
                  position: "relative",
                  fontSize: "var(--fz-xs)",
                  padding: "10px",
                }}
              >
                <a
                  href={url}
                  style={{
                    position: "relative",
                    transition: "var(--transition)",
                  }}
                  onClick={() => handleNavClick(url)}
                >
                  <span
                    style={{
                      marginRight: "5px",
                      color: "var(--green)",
                      fontSize: "var(--fz-xxs)",
                      textAlign: "right",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {name}
                </a>
              </li>
            ))}
          </ol>
          <div
            style={{
              marginLeft: "15px",
              fontSize: "var(--fz-xs)",
              display: "flex",
            }}
          >
            <a
              style={{
                color: "var(--green)",
                backgroundColor: "transparent",
                border: "1px solid var(--green)",
                borderRadius: "var(--border-radius)",
                padding: "0.75rem 1rem",
                fontFamily: "var(--font-mono)",
                lineHeight: "1",
                textDecoration: "none",
                transition: "var(--transition)",
                marginLeft: "15px",
                fontSize: "var(--fz-xs)",
              }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
