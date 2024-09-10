import React from 'react';
import './BrowseCategories.css'; 
import image1 from '../assets/images/image1.jpeg'; // Adjust the path accordingly
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
const categories = [
  {
    id: 1,
    title: 'International Burger Fest',
    image: image1 // Replace with the correct path to your images
  },
  {
    id: 2,
    title: 'Match Day Combos',
    image: image2
  },
  {
    id: 3,
    title: 'Value Lunch Specials',
    image: image3
  },
  {
    id: 4,
    title: 'Box Meals',
    image: image4
  },
  // Add more categories as needed
];

function BrowseCategories() {
  return (
    <div className="browse-categories">
      <div className="header-container">
          <h2>BROWSE CATEGORIES</h2>
          <div class="line"></div>
      </div>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategories;
