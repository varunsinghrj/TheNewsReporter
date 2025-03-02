import React from 'react';
import cv from '../components/contact.module.css';

export default function Contact() {
  return (
    <>
      <div className={cv.contactContainer}>
        {/* Header Section */}
        <div className={cv.header}>
          <h1 className={cv.title}>Get in Touch</h1>
          <p className={cv.subtitle}>We'd love to hear from you! Feel free to reach out to us for any inquiries or support.</p>
        </div>

        {/* Contact Form */}
        <div className={cv.formSection}>
          <h2 className={cv.heading}>Send Us a Message</h2>
          <form className={cv.contactForm}>
            <input type="text" name="name" placeholder="Your Name" className={cv.input} required />
            <input type="email" name="email" placeholder="Your Email" className={cv.input} required />
            <textarea name="message" placeholder="Your Message" className={cv.textarea} required></textarea>
            <button type="submit" className={cv.submitButton}>Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={cv.infoSection}>
          <h2 className={cv.heading}>Contact Information</h2>
          <p><strong>Email:</strong> contact@yourwebsite.com</p>
          <p><strong>Phone:</strong> +91 123-456-7890</p>
          <p><strong>Address:</strong> Jaipur, Rajasthan, India</p>
        </div>

        {/* Social Media Links */}
        <div className={cv.socialSection}>
          <h2 className={cv.heading}>Follow Us</h2>
          <div className={cv.socialIcons}>
            <a href="https://www.linkedin.com/in/varunsinghrj" target="_blank" rel="noopener noreferrer" className={cv.icon}>LinkedIn</a>
            <a href="https://github.com/varunsinghrj" target="_blank" rel="noopener noreferrer" className={cv.icon}>GitHub</a>
            <a href="https://www.instagram.com/varunsinghrj" target="_blank" rel="noopener noreferrer" className={cv.icon}>Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}
