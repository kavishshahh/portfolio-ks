import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../src/config";
import Menu from "./menu/menu";

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 0 50px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 100px;
  z-index: 2;
  opacity: 0.9;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);

  @media screen and (max-width: 770px) {
    padding: 0 20px;
  }
`;

const LogoLink = styled.a`
  text-decoration: none;
  font-size: var(--fz-lg);
  font-weight: bold;

  @media screen and (max-width: 770px) {
    font-size: var(--fz-md);
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ol`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  color: var(--lightest-slate);

  @media (max-width: 770px) {
    display: none;
  }
`;

const NavListItem = styled.li`
  margin: 0 5px;
  position: relative;
  font-size: var(--fz-xs);
  padding: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  position: relative;
  transition: var(--transition);
`;

const ResumeButton = styled.a`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);
  margin-left: 15px;
  font-size: var(--fz-xs);

  &:hover {
    background-color: var(--green);
    color: var(--navy);
  }
`;

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
    window.innerWidth < 770 && setIsMobileMenuOpen(true);
  }, []);

  return (
    <>
      <NavContainer>
        <LogoLink href="/">Kavish Shah</LogoLink>
        <NavLinksContainer>
          <NavList>
            {navLinks.map(({ url, name }, i) => (
              <NavListItem key={i}>
                <NavLink href={url} onClick={() => handleNavClick(url)}>
                  <span
                    style={{
                      color: "var(--green)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {name}
                </NavLink>
              </NavListItem>
            ))}
          </NavList>
          <div>
            <ResumeButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ResumeButton>
          </div>
          {isMobileMenuOpen && (
            <div>
              <Menu />
            </div>
          )}
        </NavLinksContainer>
      </NavContainer>
    </>
  );
};

export default Nav;
