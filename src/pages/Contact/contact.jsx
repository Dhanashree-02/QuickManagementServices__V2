import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We’d love to hear from you. Fill out the form below or use our contact information.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contactContent}>
        {/* Contact Form */}
        <motion.div
          className={styles.contactFormContainer}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Send Us a Message</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className={styles.contactInfo}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact Information</h2>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <div className={styles.infoContent}>
              <h3>Address</h3>
              <p>Quick Management Services</p>
              <p>203, Changbhale Heights, Jawalkar Nagar, near Kalpataru Society</p>
              <p>Phase-3, Pimple Gurav, Pune, Maharashtra 411061</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.infoIcon} />
            <div className={styles.infoContent}>
              <h3>Phone</h3>
              <p>+91 7066521234</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <div className={styles.infoContent}>
              <h3>Email</h3>
              <p>hr@quickmanagementservices.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaClock className={styles.infoIcon} />
            <div className={styles.infoContent}>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.socialLinks}>
            <h3>Connect with Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <motion.div
        className={styles.mapContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Contact;
