import React, { useState } from 'react';
import HeroSection from './HeroSection';
import './Deals.css';
import OrderModal from './OrderModal';
import dealBanner from '../assets/images/deals-banner.png';
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
      <HeroSection openModal={openModal} showImage={true} imageSrc={dealBanner} />
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
      {/* Use the OrderModal component */}
      <OrderModal 
        isOpen={isModalOpen} 
        step={step} 
        closeModal={closeModal} 
        handleNextStep={handleNextStep} 
        handlePreviousStep={handlePreviousStep} 
      />
    </div>
  );
}

export default Deals;