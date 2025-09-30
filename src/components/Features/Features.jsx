import { motion } from "framer-motion";
import { FaLaptopCode, FaCloud, FaShieldAlt, FaChartLine, FaMobileAlt, FaUsers, FaCog, FaHeadset } from "react-icons/fa";
import styles from "./Features.module.css";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    desc: "Tailored solutions to meet your specific business needs. Agile development ensures fast delivery and flexibility, with scalable applications for long-term growth."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services & Management",
    desc: "Cloud migration, infrastructure setup, and continuous monitoring for cost-efficient, secure, and scalable cloud solutions."
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity & Compliance",
    desc: "Protect your systems and sensitive data from cyber threats. Regular audits and compliance with industry standards using advanced security protocols."
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics & BI",
    desc: "Transform raw data into actionable insights. Business Intelligence dashboards and predictive analytics help anticipate trends and opportunities."
  },
  {
    icon: <FaCog />,
    title: "DevOps & Automation",
    desc: "Continuous integration and delivery (CI/CD), automated testing, and infrastructure as code for reliable and faster release cycles."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile & Web Applications",
    desc: "Responsive, high-performance web applications and custom mobile apps for iOS and Android with intuitive UI/UX design."
  },
  {
    icon: <FaUsers />,
    title: "IT Consulting & Strategy",
    desc: "Expert guidance on technology adoption and digital transformation, roadmap planning aligned with business objectives, maximizing ROI."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock technical support with regular updates, patching, and performance monitoring to minimize downtime and ensure business continuity."
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
          Our Features for IT Companies
        </motion.h2>
        <p className={styles.sectionSubtitle}>
          Discover what makes us stand out in delivering exceptional IT solutions
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
