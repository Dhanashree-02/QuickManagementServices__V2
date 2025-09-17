import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.aboutTitle}>About Us</h1>
          <p className={styles.aboutSubtitle}>Learn more about Quick Management Services</p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Our Story</h2>
              <p>Quick Management Services was founded in 2010 with a simple mission: to help businesses achieve their full potential through expert management solutions. What started as a small consulting firm has grown into a comprehensive management services company serving clients across multiple industries.</p>
              <p>Our team of experienced professionals brings diverse expertise in business strategy, financial management, operations, and market analysis to deliver tailored solutions that drive results.</p>
            </div>
            <div className={styles.aboutImage}>
              <img src="/images/about-team.jpg" alt="QMS Team" />
            </div>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions and decisions.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Innovation</h3>
              <p>We embrace innovative thinking to solve complex business challenges.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every service we provide to our clients.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤲</div>
              <h3>Collaboration</h3>
              <p>We believe in collaborative partnerships with our clients for mutual success.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the experts behind Quick Management Services</p>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team1.jpg" alt="Team Member" />
              </div>
              <h3>John Smith</h3>
              <p>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team2.jpg" alt="Team Member" />
              </div>
              <h3>Sarah Johnson</h3>
              <p>Financial Director</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team3.jpg" alt="Team Member" />
              </div>
              <h3>Michael Brown</h3>
              <p>Operations Manager</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team4.jpg" alt="Team Member" />
              </div>
              <h3>Emily Davis</h3>
              <p>Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;