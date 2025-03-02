import React from 'react';
import av from '../components/about.module.css';

export default function About() {
  return (
    <>
      <div className={av.aboutContainer}>
        {/* Hero Section */}
        <div className={av.heroSection}>
          <h1 className={av.title}>About Us</h1>
          <p className={av.subtitle}>
            Welcome to our platform, where innovation meets dedication. We strive to deliver excellence in everything we do.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className={av.section}>
          <h2 className={av.heading}>Our Mission</h2>
          <p className={av.text}>
            Our mission is to provide high-quality solutions that empower individuals and businesses. We believe in innovation,
            collaboration, and continuous improvement to create impactful products and services.
          </p>
        </div>

        <div className={av.section}>
          <h2 className={av.heading}>Our Vision</h2>
          <p className={av.text}>
            We envision a future where technology and creativity come together to solve real-world problems. Through a commitment
            to excellence and a passion for innovation, we aim to be a leader in our industry.
          </p>
        </div>

        {/* Core Values */}
        <div className={av.section}>
          <h2 className={av.heading}>Our Core Values</h2>
          <ul className={av.valuesList}>
            <li><strong>Innovation:</strong> Constantly pushing boundaries and thinking outside the box.</li>
            <li><strong>Integrity:</strong> Building trust through honesty and transparency.</li>
            <li><strong>Excellence:</strong> Striving for the highest quality in everything we do.</li>
            <li><strong>Collaboration:</strong> Working together to achieve greatness.</li>
            <li><strong>Customer-Centric:</strong> Putting our customers at the heart of our decisions.</li>
          </ul>
        </div>

        {/* Our Team Section */}
        <div className={av.section}>
          <h2 className={av.heading}>Meet Our Team</h2>
          <div className={av.teamGrid}>
            <div className={av.teamMember}>
              <div className={av.avatar}></div>
              <h3 className={av.memberName}>John Doe</h3>
              <p className={av.memberRole}>CEO & Founder</p>
            </div>
            <div className={av.teamMember}>
              <div className={av.avatar}></div>
              <h3 className={av.memberName}>Jane Smith</h3>
              <p className={av.memberRole}>CTO</p>
            </div>
            <div className={av.teamMember}>
              <div className={av.avatar}></div>
              <h3 className={av.memberName}>Mike Johnson</h3>
              <p className={av.memberRole}>Lead Developer</p>
            </div>
            <div className={av.teamMember}>
              <div className={av.avatar}></div>
              <h3 className={av.memberName}>Emily White</h3>
              <p className={av.memberRole}>Marketing Head</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={av.section}>
          <h2 className={av.heading}>Join Us on Our Journey</h2>
          <p className={av.text}>
            Whether you're a customer, partner, or team member, we invite you to be a part of our journey. Together, we can create
            something truly amazing. Connect with us today!
          </p>
          <button className={av.contactButton}>Contact Us</button>
        </div>
      </div>
    </>
  );
}
