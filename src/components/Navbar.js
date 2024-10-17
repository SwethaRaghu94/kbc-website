import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import cartIcon from '../assets/images/cart-icon.png';
import './Navbar.css';

function Navbar({ onStartOrder }) {
  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__location">
          <span className="location__icon">📍</span>
          <span>Allow location access for local store menu and promos</span>
          <button className="location__button">Set Location</button>
        </div>
      </div>
      <div className="navbar__bottom">
        <div className="navbar_left">
            <NavLink exact to="/" className="navbar__logo">
                <img src={logo} alt="KFC Logo" />
            </NavLink>
            <nav>
                <ul className="menu">
                  <li><NavLink exact to="/menu" activeClassName="active">Menu</NavLink></li>
                  <li><NavLink to="/deals" activeClassName="active">Deals</NavLink></li>
                </ul>
            </nav>
        </div>
        <div className="navbar__user-actions">
          <NavLink to="/signin" className="navbar__link">Sign In</NavLink>
          <div className="navbar__cart">
            <img src={cartIcon} alt="Cart" />
            <span>₹0</span>
          </div>
          <button className="start-order-button" onClick={onStartOrder}>Start Order</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
