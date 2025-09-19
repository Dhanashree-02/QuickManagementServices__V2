import ContactForm from '../../components/ContactForm/contactForm';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Fill out the form below or use our contact information.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contactContent}>
        {/* Contact Form */}
        <div className={styles.contactFormContainer}>
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>🏢</div>
            <div className={styles.infoContent}>
              <h3>Address</h3>
              <p>Quick Management Services</p>
              <p>203, Changbhale Heights, Jawalkar Nagar, near Kalpataru Society</p>
              <p>Phase-3, Pimple Gurav, Pune, Maharashtra 411061</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📞</div>
            <div className={styles.infoContent}>
              <h3>Phone</h3>
              <p>+91 7066521234</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📧</div>
            <div className={styles.infoContent}>
              <h3>Email</h3>
              <p>hr@quickmanagementservices.com</p>
            </div>
          </div>

          {/* Business Hours or any additional sections can remain or be removed */}
        </div>
      </div>

      {/* Map */}
     <div className={styles.mapContainer}>
  <h2>Our Location</h2>
  <div className={styles.map}>
    <iframe
      title="Quick Management Services Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.422580264348!2d73.8163278151873!3d18.60127417179844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b98c0d8db7d9%3A0x1f7b9af1f62320a9!2sQuick%20Management%20Services!5e0!3m2!1sen!2sin!4v1695203456789"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

    </div>
  );
};

export default Contact;
