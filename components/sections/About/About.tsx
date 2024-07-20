// components/About.js
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.styledSection}>
      <section>
        <div className={styles.styledAbout}>
          <div>
            <h2>About Me</h2>
          </div>
        </div>
        <div className="inner">
          <div>
            <div className={styles.styledP}>
              <p>
                Hello! My name is Kavish and I enjoy creating things that live
                on the internet.
              </p>
              <p>
                I started building when i was 17 and today i have learned a few
                things which has helped me in my career.
              </p>
              <p>
                As I continue to explore new technologies and push the
                boundaries of what's possible on the web, I'm excited to embark
                on new challenges and contribute to groundbreaking projects that
                make a difference.
              </p>
              <p>Here are a few technologies I’ve been working with recently:</p>
            </div>
          </div>

          <div className={styles.styledText}>
            <ul className={styles.skills}>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next</li>
              <li>Solidity</li>
              <li>Golang</li>
              <li>Typescript</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default About;
