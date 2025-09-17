import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>QMS</h2>
            <p>Quick Management Services</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3>Services</h3>
              <ul>
                <li><a href="/services/1">Business Consulting</a></li>
                <li><a href="/services/2">Financial Planning</a></li>
                <li><a href="/services/3">Market Analysis</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3>Contact</h3>
              <ul>
                <li>Email: info@qms.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Business St, City</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Quick Management Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;