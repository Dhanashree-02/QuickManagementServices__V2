import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below or use our contact information.</p>
      </div>
      
      <div className={styles.contactContent}>
        <div className={styles.contactFormContainer}>
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
        
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          
          <div className={styles.infoItem}>
            <h3>Address</h3>
            <p>123 Business Avenue</p>
            <p>Suite 456</p>
            <p>New York, NY 10001</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>info@quickmanagementservices.com</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className={styles.mapContainer}>
        <h2>Our Location</h2>
        <div className={styles.map}>
          {/* In a real application, you would integrate Google Maps or another map service here */}
          <div className={styles.placeholderMap}>Map Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;