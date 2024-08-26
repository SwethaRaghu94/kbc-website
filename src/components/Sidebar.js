import React from 'react';
import './Sidebar.css';

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

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>KFC MENU</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
