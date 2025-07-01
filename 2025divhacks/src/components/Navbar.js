import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      // Navigate to home page and then scroll to section
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're already on the home page, just scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-custom">
      <div className="nav-container-custom">
        <div className="navbar-nav">
          <Link 
            className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`} 
            to="/"
          >
            HOME
          </Link>
          <button 
            className="nav-link-custom" 
            onClick={() => scrollToSection('about')}
            style={{ background: 'none', border: 'none', color: 'inherit' }}
          >
            ABOUT
          </button>
          <button 
            className="nav-link-custom" 
            onClick={() => scrollToSection('tracks')}
            style={{ background: 'none', border: 'none', color: 'inherit' }}
          >
            TRACKS
          </button>
          <button 
            className="nav-link-custom" 
            onClick={() => scrollToSection('faq')}
            style={{ background: 'none', border: 'none', color: 'inherit' }}
          >
            FAQs
          </button>
          <Link 
            className={`nav-link-custom ${location.pathname === '/schedule' ? 'active' : ''}`} 
            to="/schedule"
          >
            SCHEDULE
          </Link>
          <Link 
            className={`nav-link-custom ${location.pathname === '/map' ? 'active' : ''}`} 
            to="/map"
          >
            MAP
          </Link>
          <Link 
            className={`nav-link-custom ${location.pathname === '/team' ? 'active' : ''}`} 
            to="/team"
          >
            TEAM
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 