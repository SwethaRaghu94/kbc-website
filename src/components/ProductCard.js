// ProductCard.js
import React from 'react';
import './ProductCard.css'; // Ensure it has the appropriate styles

function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p className="price">₹{item.price}</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

export default ProductCard;
