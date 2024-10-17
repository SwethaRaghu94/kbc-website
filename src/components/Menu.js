import React, { useState } from 'react';
import HeroSection from './HeroSection';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import OrderModal from './OrderModal';
import './HeroSection.css';
import './Menu.css';
import zingerBurgerImage from '../assets/images/zinger-burger.png';
import zingerMeal from '../assets/images/zinger-meal.jpeg';


const menuItems = [
  { id: 1, category: 'INTERNATIONAL BURGER FEST', name: 'Zinger Burger', image: zingerBurgerImage, price: 250 },
  { id: 2, category: 'INTERNATIONAL BURGER FEST', name: 'Zinger Meal', image: zingerMeal, price: 400 },
  // Add more items here
];

const categories = [
  'INTERNATIONAL BURGER FEST',
  'MATCH DAY COMBOS',
  'VALUE LUNCH SPECIALS',
  'BOX MEALS',
  'BURGERS',
  'CHICKEN BUCKETS',
  'RICE BOWLZ',
  'VALUE SNACKERS',
  'CHICKEN ROLLS',
  'SNACKS',
];

function Menu() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('INTERNATIONAL BURGER FEST');

  const openModal = () => {
    setModalOpen(true);
    setStep(1); // Open modal when Start Order is clicked
  };

  const closeModal = () => setModalOpen(false);

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  // Filter items based on selected category
  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  // Function to handle sidebar category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Smooth scroll to the category section
    document.getElementById(category.toLowerCase().replace(/\s+/g, '-')).scrollIntoView({ behavior: 'smooth' });
  };

  const groupedItems = categories.map((category) => ({
    category,
    items: menuItems.filter((item) => item.category === category),
  }));

  return (
    <div className="menu-page">
      <HeroSection openModal={openModal} showImage={false} />
      <div className="menu-container">  {/* Add a container for sidebar and content */}
        {/* Pass the handleCategoryClick to the Sidebar */}
        <Sidebar onCategoryClick={handleCategoryClick} />
        <div className="menu-content">
          <SearchBar />
          <div className="menu-items">
            {/* Map through categories and render items for each */}
            {groupedItems.map((group) => (
              <div key={group.category} id={group.category.toLowerCase().replace(/\s+/g, '-')}>
                <h2>{group.category}</h2>
                <div className="category-items">
                  {group.items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
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

export default Menu;
