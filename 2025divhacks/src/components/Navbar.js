import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

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
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
              setIsHomeDropdownOpen(true);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setIsHomeDropdownOpen(false);
              }, 100);
            }}
          >
            <Link 
              className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`} 
              to="/"
            >
              HOME
            </Link>
            {isHomeDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                  setIsHomeDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setIsHomeDropdownOpen(false);
                  }, 100);
                }}
              >
                <button 
                  className="dropdown-item" 
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => scrollToSection('tracks')}
                >
                  Tracks
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => scrollToSection('judges-speakers')}
                >
                  Judges & Speakers
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => scrollToSection('sponsors')}
                >
                  Sponsors
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => scrollToSection('faq')}
                >
                  FAQ
                </button>
              </div>
            )}
          </div>
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