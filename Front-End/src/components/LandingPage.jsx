

import React from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="welcome-box">
        <h1>Welcome to MyApp!</h1>
        <p>Please choose an option:</p>
        <div className="button-group">
          <Link to="/register" className="button">Sign Up</Link> 
          <Link to="/login" className="button">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
