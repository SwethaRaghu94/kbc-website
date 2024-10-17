import React, { useState } from 'react';
import HeroSection from './HeroSection';
import BrowseCategories from './BrowseCategories';
import OrderModal from './OrderModal';
// import './Menu.css';
import'./Navbar.css';
import'./Home.css';
import './HeroSection.css';
import heroImage from '../assets/images/hero-image.jpg';

function Home() {
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
    <div className="Home">
      <HeroSection openModal={openModal} showImage={true} imageSrc={heroImage}/>
      <BrowseCategories />


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

export default Home;
