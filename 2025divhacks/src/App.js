import './App.css';
import bgImage from './assets/bg.png';  // place your image in src/assets/
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
    </div>
  );
}