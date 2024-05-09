import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  h2 {
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
  }

  h2::before {
    position: relative;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-weight: 400;
  }

  h2::after {
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

const StyledP = styled.div`
  p {
    padding: 0 0 10px 0px;
  }
`;

const StyledText = styled.div`
  ul.skills {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  return (
    <>
      <StyledSection>
        <section>
          <StyledAbout>
            <div>
              <h2>About Me</h2>
            </div>
          </StyledAbout>
          <div className="inner">
            <div>
              <StyledP>
                <p>
                  Hello! My name is Kavish and I enjoy creating things that live
                  on the internet.
                </p>
                <p>
                  I started building when i was 17 and today i have learned a
                  few things which has helped me in my career.
                </p>
                <p>
                  As I continue to explore new technologies and push the
                  boundaries of what's possible on the web, I'm excited to
                  embark on new challenges and contribute to groundbreaking
                  projects that make a difference.
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
              </StyledP>
            </div>

            <StyledText>
              <ul className="skills">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next</li>
                <li>Solidity</li>
                <li>Golang</li>
                <li>Typescript</li>
              </ul>
            </StyledText>
          </div>
          <div className="right">
            <div></div>
          </div>
        </section>
      </StyledSection>
    </>
  );
};

export default About;
