import { motion } from "framer-motion";
import { FaAward, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import img from "../../assets/Service/Business Consulting.jpg";
import styles from "./About.module.css";
import team from "../../assets/Service/Market Analysis.webp";

  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      desc: "We uphold the highest standards of honesty, transparency, and ethics in all our decisions.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "We foster creativity and innovation to deliver forward-thinking business solutions.",
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      desc: "We are committed to delivering excellence with precision and professionalism.",
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      desc: "We believe in building strong, collaborative partnerships that drive mutual success.",
      },
  ];

const About = () => {
  return (
    <div className={styles.about}>
     {/* Hero Section */}
<section className={styles.aboutHero}>
  <motion.div
    className={styles.heroContent}
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className={styles.aboutTitle}>About Us</h1>
    <div className={styles.titleUnderline}></div>
    <p className={styles.aboutSubtitle}>
      Learn more about <span>Quick Management Services</span>
    </p>
    <p className={styles.aboutTagline}>
      Empowering businesses with innovative solutions, expert strategies,
      and a commitment to excellence since 2010.
    </p>
  </motion.div>
</section>

{/* Our Story */}
<section className={styles.ourStory}>
  <div className="container">
    <div className={styles.aboutContent}>
      <motion.div
        className={styles.aboutText}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.aboutText}>
          Quick Management Services was founded in 2010 with a simple mission: 
          to help businesses achieve their full potential through expert 
          management solutions. 
        </p>
        <p>
          What started as a small consulting firm has grown into a 
          comprehensive management services company serving clients across 
          multiple industries.
        </p>
        <p>
          Our team of experienced professionals brings diverse expertise in 
          business strategy, financial management, operations, and market 
          analysis to deliver tailored solutions that drive results.
        </p>
      </motion.div>

      <motion.div
        className={styles.aboutImage}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={img} alt="QMS Team" />
      </motion.div>
    </div>
  </div>
</section>


      {/* Values */}
 <section className={`section ${styles.valuesSection}`}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>

        <div className={styles.valuesGrid}>
          {values.map((val, i) => (
            <motion.div
              key={i}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section">
  <div className="container">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Our Team
    </motion.h2>
    <p className="section-subtitle">
      Meet the experts behind Quick Management Services
    </p>

    <div className={styles.teamGrid}>
      {[
        { name: "Rajesh Kumar", role: "CEO & Founder", img: team },
        { name: "Priya Sharma", role: "Financial Director", img: team },
        { name: "Amit Verma", role: "Operations Manager", img: team },
        { name: "Neha Patel", role: "Marketing Specialist", img: team },
      ].map((member, i) => (
        <motion.div
          key={i}
          className={styles.teamMember}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.memberImage}>
            <img src={member.img} alt={member.name} />
          </div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
