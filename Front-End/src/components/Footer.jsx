

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mercury Sols. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#instagram">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
