import React from "react";
import styles from "./Contact.module.css";
import MailIcon from "../../../public/assets/svgs/MailIcon";

const Contact = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.head}>What's Next?</h1>
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          <div className={styles.ContactDiv}>
            <h4 className={styles.contactText}>
              Contact<span className={styles.contactDot}>.</span>
            </h4>
          </div>
          <div className={styles.desc}>
            <p className={styles.descText}>
              Shoot me an email if you want to connect! You can also find me on{" "}
              <a
                href="https://www.linkedin.com/in/kavishshah30/"
                className={styles.contactDot}
              >
                Linkedin
              </a>{" "}
              or{" "}
              <a href="https://x.com/kavishshahh" className={styles.contactDot}>
                Twitter
              </a>{" "}
              if that's more your speed.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <a href="mailto:kavishshah30@gmail.com">
              <div className={styles.contactBox}>
                <MailIcon />
                <span>kavishshah30@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
