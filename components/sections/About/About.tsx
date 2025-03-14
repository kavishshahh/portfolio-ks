// components/About.js
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
        <div className={styles.inner}>
          <div>
            <div className={styles.styledP}>
              <p>
                Hey! I'm Kavish, a Software Engineer with a background in Electronics and Telecommunication
                Engineering. I combine my technical foundation with a passion for software development to create
                innovative solutions.
              </p>
              <p>
                Currently, I'm working as a Software Engineer at Ring, where I develop and enhance features
                that improve user experience and security. Beyond this role, I'm also the founder of Orbital Pay,
                developing innovative payment solutions that combine technical expertise with business acumen.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of software
                development, particularly interested in building applications that have a meaningful impact
                on users' lives.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <div className={styles.styledText}>
              <ul className={styles.skills}>
                <li>JavaScript (ES6+)</li>
                <li>AWS</li>
                <li>Next.js</li>
                <li>Python</li>
                <li>Golang</li>
                <li>Typescript</li>
                <li>Redis</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div className={styles.aboutPic}>
            <div className={styles.wrapper}>
              <img
                src="/singaporepic.jpg"
                alt="photo of kavish shah"
                className={styles.wrapperimg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
