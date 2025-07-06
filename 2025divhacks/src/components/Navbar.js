import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  // config obj for scroll positions as percentages of page height
  const scrollPositions = {
    about: 24,         
    tracks: 44,  
    judgesSpeakers: 61, 
    sponsors: 79, 
    faq: 92     
  };

  // Function to scroll to a specific position
  const scrollToPosition = (percentage) => {
    // Only scroll if alr on the home page
    if (location.pathname === '/') {
      // Get the total scrollable height of the page
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Convert percentage to actual pixel position
      const pixelPosition = (percentage / 100) * totalHeight;
      
      window.scrollTo({
        top: pixelPosition,
        behavior: 'smooth'
      });
    } else {
      // If not on home page, navigate to home with scroll parameter
      navigate(`/?scroll=${percentage}`);
      return; // Exit early since we're navigating
    }
    setIsHomeDropdownOpen(false);
  };

  // Check for scroll parameter when component mounts or location changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const scrollPercentage = urlParams.get('scroll');
    
    if (scrollPercentage && location.pathname === '/') {
      // extract scroll parameter from URL
      navigate('/', { replace: true });
      
      // wait for the page to be ready, then scroll
      const scrollToTarget = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pixelPosition = (parseInt(scrollPercentage) / 100) * totalHeight;
        
        window.scrollTo({
          top: pixelPosition,
          behavior: 'smooth'
        });
      };
      
      // Try multiple times w/ more delays, kinda arbitrary so this could fail
      setTimeout(scrollToTarget, 100);
      setTimeout(scrollToTarget, 300);
      setTimeout(scrollToTarget, 600);
    }
  }, [location.pathname, location.search, navigate]);

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
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }
              }}
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
                <div 
                  className="dropdown-item"
                  onClick={() => scrollToPosition(scrollPositions.about)}
                  style={{ cursor: 'pointer' }}
                >
                  About
                </div>
                <div 
                  className="dropdown-item"
                  onClick={() => scrollToPosition(scrollPositions.tracks)}
                  style={{ cursor: 'pointer' }}
                >
                  Tracks
                </div>
                <div 
                  className="dropdown-item"
                  onClick={() => scrollToPosition(scrollPositions.judgesSpeakers)}
                  style={{ cursor: 'pointer' }}
                >
                  Judges & Speakers
                </div>
                <div 
                  className="dropdown-item"
                  onClick={() => scrollToPosition(scrollPositions.sponsors)}
                  style={{ cursor: 'pointer' }}
                >
                  Sponsors
                </div>
                <div 
                  className="dropdown-item"
                  onClick={() => scrollToPosition(scrollPositions.faq)}
                  style={{ cursor: 'pointer' }}
                >
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