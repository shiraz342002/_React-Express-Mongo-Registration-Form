
 
import React from 'react';
import RegistrationForm from './components/Registration';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
