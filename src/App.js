import React, { useState } from 'react';

// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Cart from './components/Cart';
import Deals from './components/Deals';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleStartOrder = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Router>
      <Navbar onStartOrder={handleStartOrder} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />

      </Routes>
      <Footer />
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>Start Your Order</h2>
            <p>How would you like to receive your order?</p>
            <button onClick={() => { /* Handle Delivery */ }}>Delivery</button>
            <button onClick={() => { /* Handle Pick up */ }}>Pick up</button>
            <button onClick={() => { /* Handle Dine In */ }}>Dine In</button>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
