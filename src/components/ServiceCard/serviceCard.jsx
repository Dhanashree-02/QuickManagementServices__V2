import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ id, title, description, image }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
        <Link to={`/services/${id}`} className={styles.serviceLink}>Learn More</Link>
      </div>
    </div>
  );
};

export default ServiceCard;