// components/Experience.js
import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.styledSection}>
      <section>
        <h2 className={styles.styledExp}>Experience</h2>
        <div className="inner">
          <div>
            <div className={styles.styledInner}>
              <h3>
                <span>Software Engineer Intern</span>
                <span className={styles.company}>&nbsp;@&nbsp;</span>
                <a href="" className={styles.company}>
                  Kissht
                </a>
              </h3>
              <p className={styles.date}>Jul 2023 - Aug 2024</p>
              <div>
                <ul>
                  <li>
                    As a Software Developer, I developed a portal for the
                    company’s team. My responsibility was on utilizing various
                    technologies such as React, Redux, Tailwind CSS, Axios, and
                    Golang to build a robust and user-friendly platform.
                  </li>
                  <li>
                    Collaborated with designers, project managers, and other
                    engineers to transform creative concepts into production
                    realities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
