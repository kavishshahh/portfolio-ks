import React from "react";
import styled from "styled-components";

const StyledExp = styled.h2`
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
    counter-increment: section 2;
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

const StyledSection = styled.div`
  section {
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
  }
`;

const StyledInner = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
  }
  .company {
    color: var(--green);
  }
  .date {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    font-size: var(--fz-lg);
  }

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
  }
  li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
  }
`;

const Experience = () => {
  return (
    <StyledSection>
      <section>
        <StyledExp>Experience</StyledExp>
        <div className="inner">
          <div>
            <StyledInner>
              <h3>
                <span>Software Engineer Intern</span>
                <span className="company">&nbsp;@&nbsp;</span>
                <a href="" className="company">
                  Kissht
                </a>
              </h3>
              <p className="date">Jul 2023 - Aug-2024</p>
              <div>
                <ul>
                  <li>
                    As a Software Developer, I developed a portal for the
                    company’s team. My responsibility was on utilizing various
                    technologies such as React, Redux, Tailwind CSS, Axios, and
                    Golang to build a robust and user-friendly platform
                  </li>
                  <li>
                    Collaborate with designers, project managers, and other
                    engineers to transform creative concepts into production
                    realities.
                  </li>
                </ul>
              </div>
            </StyledInner>
          </div>
        </div>
      </section>
    </StyledSection>
  );
};

export default Experience;
