import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/hero-image.jpg';


function HeroSection({ backgroundImage, openModal }) {
  const heroStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: backgroundImage ? 'cover' : 'none',
    backgroundPosition: backgroundImage ? 'center' : 'none',
    backgroundColor: backgroundImage ? 'transparent' : '#333', // Fallback background color if no image
  };
  return (
    <div className="hero" style={heroStyle}>
      <div className="hero__content">
        <h1>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
        <button className="hero__button" onClick={openModal}>Start Order</button>
      </div>
    </div>
  );
}

export default HeroSection;
