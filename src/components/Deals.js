import React, { useState } from 'react';
import HeroSection from './HeroSection';
import './Deals.css';
// import dealBanner from '../assets/images/deals-banner.png';
import deal1 from '../assets/images/deal1.png';
import deal2 from '../assets/images/deal2.png';

const deals = [
  { id: 1, title: 'Sign In to See More Exclusive', image: deal1 },
  { id: 2, title: 'Free Zinger Worth ₹209', image: deal2 },
  // Add more deals here
];

function Deals() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const openModal = () => {
    setModalOpen(true);
    setStep(1);
  };

  const closeModal = () => setModalOpen(false);

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="deals-page">
      {/* <div className="deals-hero"> */}
      <HeroSection />
      <div className="deals-content">
        <h2>NATIONAL OFFERS</h2>
        <div className="deals-links">
            <button className="link-button">Sign In to see exclusive offers & deals</button>
        </div>
        <div className="deals-cards">
          {deals.map(deal => (
            <div key={deal.id} className="deal-card">
              <img src={deal.image} alt={deal.title} />
              <p>{deal.title}</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            {step === 1 && (
              <div className="order-step">
                <h2>START YOUR ORDER</h2>
                <h3>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h3>
                <button className="order-option" onClick={handleNextStep}>Delivery</button>
                <button className="order-option" onClick={handleNextStep}>Pick up</button>
                <button className="order-option" onClick={handleNextStep}>Dine In</button>
              </div>
            )}
            {step === 2 && (
              <div className="order-step">
                <button className="back-button" onClick={handlePreviousStep}>←</button>
                <h2>DELIVERY ADDRESS</h2>
                <div className="delivery-options">
                    <button className="link-button">Already a member? Sign In</button>
                    <button className="link-button">Use My Location</button>
                </div>
                <input type="text" placeholder="Search for area, street name..." />
                <button className="confirm-button">Confirm</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Deals;
