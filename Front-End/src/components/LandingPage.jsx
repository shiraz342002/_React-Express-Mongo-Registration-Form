
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="welcome-box">
        <h2>Welcome to Mercury Sols</h2>
        <p>Please sign up or log in to continue.</p>
        <div className="buttons">
          <button className="btn-signup">Sign Up</button>
          <button className="btn-login">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
