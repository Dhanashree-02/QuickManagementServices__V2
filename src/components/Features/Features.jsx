import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaUsers, FaRegLightbulb, FaShieldAlt } from "react-icons/fa";
import styles from "./Features.module.css";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Innovative Technology Solutions",
    desc: "Cutting-edge technology solutions tailored to meet unique business challenges. We provide start-to-finish expertise in managing projects from concept to delivery, ensuring timely execution."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Diverse Methodological Approaches",
    desc: "Flexibility to use Linear, RAD, Iterative, and Agile methodologies to cater to project requirements and timelines. We focus on exceeding client expectations with reliable solutions."
  },
  {
    icon: <FaUsers />,
    title: "Expert Resource Team",
    desc: "Our team consists of highly skilled designers, developers, strategists, and business experts ensuring the best quality and on-time service delivery."
  },
  {
    icon: <FaRegLightbulb />,
    title: "Strategic Innovation",
    desc: "We drive innovation by combining creativity with strategic execution, helping businesses stay competitive in rapidly evolving markets."
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted & Secure",
    desc: "We prioritize data security and compliance, implementing industry best practices to ensure client trust and long-term success."
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Features
        </motion.h2>
        <p className={styles.sectionSubtitle}>
          Discover what makes us stand out in delivering exceptional business solutions
        </p>

        <div className={styles.featureGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.iconBox}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
