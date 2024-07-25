// components/Projects.js
import React from "react";
import styles from "./Projects.module.css";
import projects from "./projectsConfig";
import GithubIcon from "../../../public/assets/svgs/GithubIcon";

const Projects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.head}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <a
                className={styles.imageA}
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={project.image} alt={project.name} />
              </a>
            </div>
            <div className={styles.projectDetails}>
              <div className={styles.projectTitle}>
                <h4>{project.name}</h4>
                <div className={styles.projectTitlesLine}></div>
                <a href={project.link}>
                  <GithubIcon />
                </a>
              </div>
              <div className={styles.projectTags}>
                {project.tags.join(" - ")}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

{
  /* <ul>
        <li className={styles.projectList}>
          <div className={styles.projectContent}>
            <div>
              <p>Featured Project</p>
              <h3>GoPulse</h3>
            </div>
          </div>
          <div className={styles.projectImage}>
            <a
              href="/gopulse.png"
              rel="noopener noreferrer"
              target="_blank"
            ><img src="/gopulse.png" alt="" /></a>
          </div>
        </li>
        <li></li>
      </ul> */
}
