import '../App.css';
import bgImage from '../assets/bg.png'; 
import emailIcon from '../assets/email-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import { useState, useEffect, useRef } from 'react';
import background1 from '../assets/bg.png';
import Footer from '../components/Footer';
import low from '../assets/low.png';
import station from '../assets/station.png';
import skuline from '../assets/skyline.png';
import sponsors from '../assets/sponsors.png';
import tracks from '../assets/tracks.png';
import train from '../assets/train.png';
import track1img from '../assets/track1.png';
import track2img from '../assets/track2.png';
import track3img from '../assets/track3.png';
import track4img from '../assets/track4.png';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [containerHeight, setContainerHeight] = useState('700vh');
  const skylineRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const track = [
    {
      title: 'Productivity',
      description: 'Build tools that help people work smarter, live healthier, and learn better in school, the workplace, and everyday life. Empower people to do more in less time.'
    },
    {
      title: 'Sustainability',
      description: 'Develop solutions for a greener future, from fighting climate change to improving public health. Think global impact, local action, and tech that drives real social good.'
    },
    {
      title: 'Entertainment',
      description: 'Create the next generation of fun—whether it\'s games, social platforms, or immersive experiences. Redefine how people play, connect, and express themselves.'
    },
    {
      title: 'Emerging Tech',
      description: 'Experiment with cutting-edge technology like AI/ML, autonomous systems, spatial computing, XR (VR/AR). Build the unexpected and shape what\'s next.'
    }
  ];
  useEffect(() => {
    const targetDate = new Date('2025-10-04T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to adjust background height based on skyline position
  useEffect(() => {
    const adjustBackgroundHeight = () => {
      if (skylineRef.current && containerRef.current) {
        const skylineRect = skylineRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        // Calculate the bottom position of the skyline relative to the container
        const skylineBottom = skylineRect.bottom - containerRect.top;
        
        // Get footer height
        const footer = document.querySelector('.footer');
        const footerHeight = footer ? footer.offsetHeight : 0;
        const footerHeightVh = (footerHeight / window.innerHeight) * 100;
        
        // Convert to viewport height percentage and add footer height
        const skylineBottomVh = (skylineBottom / window.innerHeight) * 100;
        const newHeight = Math.max(skylineBottomVh + footerHeightVh, 100); // Add footer height, minimum 100vh
        
        setContainerHeight(`${newHeight}vh`);
      }
    };

    // Adjust on load and resize
    adjustBackgroundHeight();
    window.addEventListener('resize', adjustBackgroundHeight);
    
    // Also adjust after a short delay to ensure images are loaded
    const timeoutId = setTimeout(adjustBackgroundHeight, 1000);

    return () => {
      window.removeEventListener('resize', adjustBackgroundHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" 
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" 
          alt="Major League Hacking 2026 Hackathon Season" 
        />
      </a>
      
      <div className="image-container1" ref={containerRef} style={{ height: containerHeight }}>
        <div className="text-overlay">
          <h1>DIVHACKS 2025</h1>
          <p>OCTOBER 4-5TH</p>
          <div className="countdown-container">
            <div id="clock-container">
              <ul>
                <li><span id="days">{timeLeft.days}</span><span className="label">days</span></li>
                <li><span id="hours">{timeLeft.hours}</span><span className="label">hours</span></li>
                <li><span id="minutes">{timeLeft.minutes}</span><span className="label">minutes</span></li>
                <li><span id="seconds">{timeLeft.seconds}</span><span className="label">seconds</span></li>
              </ul>
            </div>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSccOAZWWRA-xYgHwT3dKArwrR5gktoSJJlt7yGfaIG9QTRNPA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <button className="cta">Apply Now</button>
          </a>
        </div>
        <img className="low" src= {low} alt ="Background" />
        <img className="station" src= {station} alt ="Background" />
        {/*Stats Section */}
        <div className="stats-section">
          <h2>
            <b>STATS FROM 2024</b>
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">750+</div>
              <div className="stat-label">Applications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">295</div>
              <div className="stat-label">Hackers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">14</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">54</div>
              <div className="stat-label">Institutions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">48.4%</div>
              <div className="stat-label">Female/Non-binary</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">58.6%</div>
              <div className="stat-label">Beginner Hackers</div>
            </div>
          </div>
        </div>

        <img className="skuline" src= {skuline} alt ="Skuline" ref={skylineRef} />
        {/* Sponsors Coming Soon */}
        <div className="sponsors-section">
          <img className="sponsors" src= {sponsors} alt ="Sponsors" />
          <div className="coming-soon-text">
            <h2>Coming Soon</h2>
          </div>
        </div>
        {/*/Tracks Section*/}
        <img className="tracks" src= {tracks} alt ="Tracks" />
        <div className="tracks-image-section">
          {[track1img, track2img, track3img, track4img].map((imgSrc, idx) => (
            <div
              key={idx}
              className="track-image"
              onMouseEnter={() => setHoveredTrack(idx)}
              onMouseLeave={() => setHoveredTrack(null)}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <img src={imgSrc} alt={`Track ${idx + 1}`} />
              {hoveredTrack === idx && (
                <div className="track-card track-card-reveal" style={{position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}>
                  <h3>{track[idx].title}</h3>
                  <p>{track[idx].description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <img className="train" src= {train} alt ="Train" />
        <Footer />
      </div>
    </div>
  );
} 