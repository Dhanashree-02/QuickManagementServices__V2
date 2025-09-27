import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';
import { FaBitcoin, FaDatabase, FaCloud, FaWifi, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const ServiceCard = ({ id, title, description, image }) => {
  // Mapping icons based on service id
  const icons = {
    1: <FaBitcoin className={styles.icon} />,
    2: <FaDatabase className={styles.icon} />,
    3: <FaCloud className={styles.icon} />,
    4: <FaWifi className={styles.icon} />,
    5: <FaLaptopCode className={styles.icon} />,
    6: <FaMobileAlt className={styles.icon} />,
  };

  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceImage}>
        <img src={image} alt={title} />
        <div className={styles.iconOverlay}>
          {icons[id] || <FaLaptopCode className={styles.icon} />}
        </div>
      </div>
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
        <Link to={`/services/${id}`} className={styles.serviceLink}>
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
