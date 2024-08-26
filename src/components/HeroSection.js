import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/hero-image.jpg';


function HeroSection() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero__content">
        <h1>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
        <button className="hero__button">Start Order</button>
      </div>
    </div>
  );
}

export default HeroSection;
