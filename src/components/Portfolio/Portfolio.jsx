import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: 1,
    title: "Matrimonial Website",
    description:
      "A modern matrimonial platform with user profiles, matchmaking algorithms, and secure chat features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s",
    link: "#",
  },
  {
    id: 2,
    title: "Educational Courses App",
    description:
      "A mobile app offering online courses, live classes, and progress tracking for students.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDWicww1TGCCc7lIRGImwKP_i6bhoRSaxmw&s",
    link: "#",
  },
  {
    id: 3,
    title: "E-Learning Website",
    description:
      "An interactive course website with video lectures, quizzes, and certificates.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNw2O22OG43NXtADb1j-qyccTd95wUuhz5zw&s",
    link: "#",
  },
  {
    id: 4,
    title: "Data Dashboard",
    description:
      "A powerful visualization dashboard with interactive charts and reports.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDILshGKAc37Rbo1jICUj1FW67JO9bIy3h3w&s",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>

        <motion.p
          className={styles.subHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A showcase of our latest work and projects.
        </motion.p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className={styles.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
