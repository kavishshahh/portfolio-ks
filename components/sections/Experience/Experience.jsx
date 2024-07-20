import React, { useState } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("ring1");

  const jobs = {
    ring1: {
      id: 0,
      title: "Software Developer Trainee",
      company: "Ring",
      date: "Jul 2024 - Present",
      responsibilities: [
        "Add various features for the Web portal.",
        "Convert Figma design to pixel perfect UI and integrate API's.",
      ],
    },
    ring2: {
      id: 1,
      title: "Software Developer Intern",
      company: "Ring",
      date: "Jul 2023 - Aug 2024",
      responsibilities: [
        "As a Software Developer, I developed a portal for the company’s team. My responsibility was on utilizing various technologies such as React, Redux, Tailwind CSS, Axios, and Golang to build a robust and user-friendly platform.",
        "Collaborated with designers, project managers, and other engineers to transform creative concepts into production realities.",
      ],
    },
  };

  return (
    <div className={styles.styledSection}>
      <section>
        <h2 className={styles.styledExp}>Experience</h2>
        <div className={styles.inner}>
          <div>
            <button
              className={`${styles.styledButton} ${
                selectedJob === "ring1" ? styles.active : ""
              }`}
              onClick={() => setSelectedJob("ring1")}
            >
              Ring
            </button>
            <button
              className={`${styles.styledButton} ${
                selectedJob === "ring2" ? styles.active : ""
              }`}
              onClick={() => setSelectedJob("ring2")}
            >
              Ring / Kissht
            </button>
            <div
              className={styles.selected}
              style={{
                transform: `translateY(calc(${jobs[selectedJob].id} * var(--tab-height)))`,
              }}
            ></div>
          </div>
          <div>
            {selectedJob && (
              <div className={styles.styledInner}>
                <h3>
                  <span>{jobs[selectedJob].title}</span>
                  <span className={styles.company}>&nbsp;@&nbsp;</span>
                  <a href="" className={styles.company}>
                    {jobs[selectedJob].company}
                  </a>
                </h3>
                <p className={styles.date}>{jobs[selectedJob].date}</p>
                <div>
                  <ul>
                    {jobs[selectedJob].responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
