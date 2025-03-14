import { useEffect, useState } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("0");
  console.log("slectd", selectedJob);
  const [transformDirection, setTransformDirection] = useState("translateY");

  const jobs = [
    {
      id: 0,
      title: "Software Developer",
      company: "Kissht",
      date: "Jul 2024 - Present",
      responsibilities: [
        "Develop and maintain backend APIs using Python and Golang, ensuring high performance and scalability",
        "Implement new features including bulk upload functionality by using Redis to process data in sequence",
        "Collaborate with cross-functional teams to design and implement robust backend solutions",
      ],
    },
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Kissht",
      date: "Jul 2023 - Aug 2023",
      responsibilities: [
        "Developed and maintained advanced infrastructure tools using React.js, ensuring industry-standard compliance",
        "Developed various components and features of frontend by understanding the design and fixing bugs"
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setTransformDirection("translateX");
      } else {
        setTransformDirection("translateY");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.styledSection}>
      <section>
        <h2 className={styles.styledExp}>Experience</h2>
        <div className={styles.inner}>
          <div className={styles.tabsDiv}>
            {Object.keys(jobs).map((jobKey) => (
              <button
                key={jobKey}
                className={`${styles.styledButton} ${
                  selectedJob === jobKey ? styles.active : ""
                }`}
                onClick={() => setSelectedJob(jobKey)}
              >
                {jobs[jobKey].company}
              </button>
            ))}
            <div
              className={styles.selected}
              style={{
                transform: `${
                  transformDirection === "translateY"
                    ? `translateY(calc(${jobs[selectedJob].id} * var(--tab-height)))`
                    : `translateX(calc(${jobs[selectedJob].id} * var(--tab-width)))`
                }`,
              }}
            ></div>
          </div>
          <div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
