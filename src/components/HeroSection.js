import React from 'react';
import './Menu.css';
import './HeroSection.css';

function HeroSection({ openModal, showImage, imageSrc}) {

  return (
    <div className="hero">
      <div className="hero__content">
        <h1>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
        <button className="hero__button" onClick={openModal}>Start Order</button>
      </div>
      {/* Conditionally render the image section */}
      {showImage && (
        <div className="image-section">
          <img
            src={imageSrc}  // Replace with appropriate image
            alt="Hero"
            className="image-section_image"
          />
        </div>
      )}
    </div>
  );
}

export default HeroSection;
   