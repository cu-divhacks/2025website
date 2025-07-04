import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

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
                <div className="dropdown-item">
                  About
                </div>
                <div className="dropdown-item">
                  Tracks
                </div>
                <div className="dropdown-item">
                  Judges & Speakers
                </div>
                <div className="dropdown-item">
                  Sponsors
                </div>
                <div className="dropdown-item">
                  FAQ
                </div>
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