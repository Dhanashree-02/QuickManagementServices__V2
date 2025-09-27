
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import logo from "../../assets/Logo/QMSLogo-Photoroom.png"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          
          {/* Logo + Tagline */}
          <div className={styles.footerLogo}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="QMS Logo" className={styles.logoImage} />
              </Link>
            </div>

            {/* <h4>Quick Management Services Pvt. Ltd.</h4> */}
            <ul className={styles.logoList}>
              <li>
                <h4>Address:</h4> 203, Changbhale Heights, Jawalkar Nagar, 
                near Kalpataru Society, 
                Phase-3, Pimple Gurav, Pune, Maharashtra 411061
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className={styles.footerLinks}>

            {/* Quick Links */}
            <div className={styles.linkColumn}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className={styles.linkColumn}>
              <h3>Our Services</h3>
              <ul>
                <li><Link to="/services/1">Blockchain Services</Link></li>
                <li><Link to="/services/2">Big Data Analysis</Link></li>
                <li><Link to="/services/3">Cloud Computing</Link></li>
                <li><Link to="/services/4">IoT Solutions</Link></li>
                <li><Link to="/services/5">Web App Development</Link></li>
                <li><Link to="/services/6">Mobile App Development</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.linkColumn}>
  <h3>Contact Us</h3>
  <ul>
    <li>Email: <a href="mailto:hr@quickmanagementservices.com">hr@quickmanagementservices.com</a></li>
    <li>Phone: <a href="tel:+917066521234">+91 7066521234</a></li>
  </ul>

  {/* Social Media Icons */}
  <div className={styles.socialIcons}>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  </div>
</div>


          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Quick Management Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
