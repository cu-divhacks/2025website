import './App.css';
import bgImage from './assets/bg.png';  // place your image in src/assets/
import emailIcon from './assets/email-icon.png';
import instagramIcon from './assets/instagram-icon.png';
import facebookIcon from './assets/facebook-icon.png';
import linkedinIcon from './assets/linkedin-icon.png';
import twitterIcon from './assets/twitter-icon.png';
import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  return (
    <div>
      <a
    id="mlh-trust-badge"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" 
    target="_blank"
    ><img
    src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season" 
  /></a>
      
      <nav className="navbar">
        <div className="nav-brand">WEBSITE STILL UNDER CONSTRUCTION</div>
      </nav>
      

      <div className="hero">
        <div className="overlay">
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
      </div>

      <footer className="footer">
        <a
          id="footer-text"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >MLH Code of Conduct</a>
        <div className="footer-icons">
          <a href="mailto:cu.divhacks@gmail.com"><img id="contact-icon" src={emailIcon} alt="Contact Us" /></a>
          <a href="https://instagram.com/divhacks"><img id="contact-icon" src={instagramIcon} alt="Instagram" /></a>
          <a href="https://facebook.com/divhacks"><img id="contact-icon" src={facebookIcon} alt="Facebook" /></a>
          <a href="https://linkedin.com/company/divhacks"><img id="contact-icon" src={linkedinIcon} alt="Linkedin" /></a>
          <a href="https://twitter.com/divhacks"><img id="contact-icon" src={twitterIcon} alt="Twitter" /></a>
        </div>
      </footer>

    </div>
    
  );
}