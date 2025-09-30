import { useState, useEffect } from "react";
// ⬇️ CHANGED: Use NavLink instead of Link + useLocation
import { NavLink } from "react-router-dom"; 
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
            {/* ⬇️ CHANGED: NavLink instead of Link */}
            <NavLink to="/">
              <img src={logo} alt="QMS Logo" className={styles.logoImage} />
            </NavLink>
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
              {/* ⬇️ CHANGED: NavLink with isActive */}
              <li className={styles.navItem}>
                <NavLink 
                  to="/" 
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
