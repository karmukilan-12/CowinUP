import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id = "about" className="about-section">
      <div className="about-content">
        <h1 className='fancy1'>About Us</h1>
        <p>
          Welcome to our COVID vaccine slot booking website! We are dedicated to providing a
          seamless and efficient experience for scheduling your vaccine appointments.
        </p>
        <p>
          Our mission is to contribute to the well-being of our community by facilitating easy
          access to COVID vaccinations. Feel free to explore our website and book your slot today.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
