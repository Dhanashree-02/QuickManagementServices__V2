import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/Logo/QMSSmallLogo.png"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll for shrinking header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="QMS Logo" className={styles.logoImage} />
              {/* <span className={styles.logoText}>QMS</span> */}
            </Link>
          </div>

          {/* Navbar */}
          <nav className={styles.navbar}>
            <div
              className={`${styles.menuIcon} ${isOpen ? styles.active : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
