import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';
import googlePlay from '../assets/images/google-play.png';
import appStore from '../assets/images/app-store.png';
import instagramIcon from '../assets/images/social-instagram.png';
import facebookIcon from '../assets/images/social-facebook.png';
import twitterIcon from '../assets/images/social-twitter.png';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src={logo} alt="KFC Logo" className="footer__logo" />
        <div className="footer__links">
          <div>
            <h4>KFC India</h4>
            <ul>
              <li>About KFC</li>
              <li>KFC Care</li>
              <li>Careers</li>
              <li>Our Golden Past</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Caution Notice</li>
            </ul>
          </div>
          <div>
            <h4>KFC Food</h4>
            <ul>
              <li>Menu</li>
              <li>Order Lookup</li>
              <li>Gift Card</li>
              <li>Nutrition & Allergen</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Get Help</li>
              <li>Contact Us</li>
              <li>KFC Feedback</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer__apps">
            <a href="#"><img src={googlePlay} alt="Google Play" /></a>
            <a href="#"><img src={appStore} alt="App Store" /></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__social">
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
        </div>
        <div className="footer__copy">
          <p>Copyright © KFC Corporation 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
