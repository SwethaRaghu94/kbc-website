// OrderModal.js
import React from 'react';

function OrderModal({ isOpen, step, closeModal, handleNextStep, handlePreviousStep }) {
  if (!isOpen) return null;

  return (
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
  );
}

export default OrderModal;
