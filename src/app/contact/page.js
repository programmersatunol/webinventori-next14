'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="container">
      <section className="section">
        <h1 className="heading">Contact Us</h1>
        <p className="subheading">Get in touch with our team</p>
        <div className={styles.contactContainer}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoHeader}>
              <h2 className={styles.infoTitle}>Let's talk about everything</h2>
              <p className={styles.infoDescription}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>123 Business Street, Tech City, TC 12345</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <span>info@webinventori.com</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>📘</a>
              <a href="#" className={styles.socialLink}>📸</a>
              <a href="#" className={styles.socialLink}>📱</a>
              <a href="#" className={styles.socialLink}>💼</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                />
                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.loadingSpinner}>Loading...</span>
                ) : (
                  <span className={styles.submitButtonText}>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}