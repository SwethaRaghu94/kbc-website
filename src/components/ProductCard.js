import React from 'react';
import './ProductCard.css';

function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
    </div>
  );
}

export default ProductCard;
