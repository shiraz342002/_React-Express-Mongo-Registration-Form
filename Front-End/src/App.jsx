import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RegistrationForm from './components/Registration';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import LoginPage from './components/Login';
import './App.css';

const App = () => {
  const location = useLocation();

  
  const hideHeaderAndFooter = ['/register'];

  return (
    <div className="App">
      {!hideHeaderAndFooter.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationForm />} /> 
        <Route path="/login" element={<LoginPage />} />
      </Routes>
        {!hideHeaderAndFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
