import { motion } from "framer-motion";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./Home.module.css";

// ✅ Import images properly
import businessImg from "../../assets/Service/Business Consulting.jpg";
import financeImg from "../../assets/Service/Financial Planning.jpg";
import marketImg from "../../assets/Service/Market Analysis.webp";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Business Consulting",
      description:
        "Expert strategies to streamline operations, boost growth, and stay ahead in today’s competitive market.",
      image: businessImg,
    },
    {
      id: 2,
      title: "Financial Planning",
      description:
        "Smart financial roadmaps designed to optimize resources, reduce risks, and maximize profitability.",
      image: financeImg,
    },
    {
      id: 3,
      title: "Market Analysis",
      description:
        "Comprehensive market insights that identify opportunities and give your business a winning edge.",
      image: marketImg,
    },
  ];

  return (
    <div>
      <Hero />

    {/* Features */}
    <Features />
      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Tailored solutions that empower your business to achieve more
            </p>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.aboutText}>
              <h2>About Quick Management Services</h2>
              <p>
                At QMS, we empower businesses with strategic planning, operational excellence, and innovative solutions designed to achieve long-term success.
              </p>
              <p>
                With over a decade of industry expertise, our team delivers measurable results and builds trusted partnerships with clients worldwide.
              </p>
              <a href="/about" className={styles.aboutLink}>
                Learn more about us
              </a>
            </div>

            <motion.div
              className={styles.aboutStats}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.statItem}>
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className={styles.statItem}>
                <h3>200+</h3>
                <p>Global Clients</p>
              </div>
              <div className={styles.statItem}>
                <h3>95%</h3>
                <p>Client Retention</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to transform your business?</h2>
            <p>
              Let’s create a roadmap for your growth. Reach out for a free consultation today.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
