import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import './Menu.css';
import HeroSection from './HeroSection';


const menuItems = [
  { id: 1, category: 'INTERNATIONAL BURGER FEST', name: 'Zinger Burger', image: '/assets/images/zinger-burger.png', price: 250 },
  { id: 2, category: 'INTERNATIONAL BURGER FEST', name: 'Zinger Meal', image: '/assets/images/zinger-meal.png', price: 400 },
  // Add more items here
];

function Menu() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true); // Open modal when Start Order is clicked
  };
  return (
    <div className="menu-page">
      
      <HeroSection onButtonClick={openModal} />
      <div className="menu-container">  {/* Add a container for sidebar and content */}
        <Sidebar />
        <div className="menu-content">
          <SearchBar />
          <div className="menu-items">
            {menuItems.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          {/* Your modal content */}
          <button onClick={() => setModalOpen(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default Menu;
