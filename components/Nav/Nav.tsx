import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../../src/config";
import Menu from "../menu/Menu";
import styles from "./Nav.module.css";

const HamburgerButton = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  z-index: 10;
  margin-right: -15px;
  padding: 15px;
  border: 0px;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
`;

const HamDiv = styled.div`
  display: inline-block;
  position: relative;
  width: var(--hamburger-width);
  height: 24px;
`;

const HamboxInner = styled.div`
  & {
    position: absolute;
    top: 50%;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: 0s;
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &:before {
    width: 120%;
    top: -10px;
    opacity: 1;
    transition: var(--ham-before);
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--green);
  }

  &:after {
    width: 80%;
    bottom: -10px;
    transform: rotate(0deg);
    transition: var(--ham-after);
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--green);
  }
`;

const Nav = ({ scrollToRef }: { scrollToRef: any }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleNavClick = (ref: any) => {
    scrollToRef(ref);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setIsMobileMenuOpen(true);
      } else {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure overflow is reset on component unmount
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={styles.mainContainer}>
        <a href="/" className={styles.LogoLink}>
          Kavish Shah
        </a>
        {!isMobileMenuOpen ? (
          <div className={styles.NavLinksContainer}>
            <ol className={styles.NavList}>
              {navLinks.map(({ url, name }, i) => (
                <li key={i} className={styles.NavListItem}>
                  <a
                    href={url}
                    className={styles.NavLink}
                    onClick={() => handleNavClick(url)}
                  >
                    <span
                      style={{
                        color: "var(--green)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>{" "}
                    {name}
                  </a>
                </li>
              ))}
            </ol>
            <div>
              <a
                href="resume.pdf"
                target="_blank"
                className={styles.ResumeButton}
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        ) : (
          <div>
            <Menu />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
