import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <h1>QMS</h1>
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
            <ul
              className={`${styles.navList} ${isOpen ? styles.active : ""}`}
            >
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/about" className={styles.navLink}>
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/services" className={styles.navLink}>
                  Services
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;