import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  margin: 0px auto;
  padding: 100px 0px;
  display: block;
  unicode-bidi: isolate;
  max-width: 900px;
  margin: 0px auto;
`;
const StyledHead = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;

  &:before {
    position: relative;
    counter-increment: section 3;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-weight: 400;
  }

  &:after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  }
`;
const Projects = () => {
  return (
    <StyledSection>
      <StyledHead>Projects</StyledHead>
    </StyledSection>
  );
};

export default Projects;
