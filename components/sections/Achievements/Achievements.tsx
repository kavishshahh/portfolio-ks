import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import styles from "./Achievements.module.css";

const achievements = [
  {
    title: "Best Implementation of ChainLink CCIP",
    event: "ETHIndia 2023",
    description:
      "Won the prize for best implementation of ChainLink CCIP at ETHIndia 2023 hackathon.",
  },
  {
    title: "First Prize - On-chain Identity",
    event: "Scaling Ethereum 2024",
    description:
      "Secured first prize for On-chain Identity solution by RISC Zero at Scaling Ethereum 2024 hackathon.",
  },
  {
    title: "Winner",
    event: "Coinbase Onchain Summer Buildathon",
    description:
      "Achieved winner status at Coinbase Onchain Summer Buildathon.",
  },
  {
    title: "Best Use of Fhenix Stack",
    event: "ETH Singapore 2024",
    description:
      "Recognized for best utilization of Fhenix stack at ETH Singapore 2024.",
  },
];

const Achievements = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.head}>Achievements</h2>
      <div className={styles.achievementsGrid}>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={styles.achievementCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.iconContainer}>
              <FaTrophy className={styles.trophyIcon} />
            </div>
            <h3>{achievement.title}</h3>
            <p className={styles.event}>{achievement.event}</p>
            <p className={styles.description}>{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
