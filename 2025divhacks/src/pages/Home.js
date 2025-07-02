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
import aboutCard from '../assets/aboutcard.png';

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
  const aboutSectionRef = useRef(null);
  const [aboutCardVisible, setAboutCardVisible] = useState(false);
  const trainImages = [train, train, train]; // Replace with actual images if you have more
  const [currentTrain, setCurrentTrain] = useState(0);
  const [nextTrain, setNextTrain] = useState(null); // index of the next train
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    function handleScroll() {
      if (!aboutSectionRef.current) return;
      const rect = aboutSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Show when top of about section is within 50% of viewport and not scrolled past
      if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
        setAboutCardVisible(true);
      } else {
        setAboutCardVisible(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIdx = (currentTrain + 1) % trainImages.length;
      setNextTrain(nextIdx);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTrain(nextIdx);
        setNextTrain(null);
        setIsAnimating(false);
      }, 1500); // Duration matches the CSS animation (1.5s)
    }, 4000);
    return () => clearInterval(interval);
  }, [currentTrain, trainImages.length]);

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
        
        {/* About section */}
        <div className="about-section" ref={aboutSectionRef}>
          <img className={`about-card${aboutCardVisible ? ' slide-in' : ' slide-out'}`} src={aboutCard} alt="About DivHacks" />
          <div className="about-text">
            <p>DivHacks, founded in 2017, is Columbia University's premier student-led annual diversity hackathon. Over the past seven years, DivHacks has welcomed attendees from all over the tri-state area. We strive to create an empowering and inspirational space for students who are historically underrepresented in the tech industry. Our goal is an experience that not only reimagines what diversity should look like in the tech industry but gives students the tools to use technology to implement change.</p>
          </div>
        </div>
        
        <img className="low" src= {low} alt ="Background" />
        <img className="station" src= {station} alt ="Background" />
        <img className="skuline" src= {skuline} alt ="Skuline" ref={skylineRef} />
        <img className="sponsors" src= {sponsors} alt ="Sponsors" />
        <img className="tracks" src= {tracks} alt ="Tracks" />
        {/* Train carousel animation: show both trains during transition */}
        {isAnimating ? (
          <>
            <img
              className="train slide-out"
              src={trainImages[currentTrain]}
              alt="Train Carousel Out"
              style={{ pointerEvents: 'none' }}
            />
            <img
              className="train slide-in"
              src={trainImages[nextTrain]}
              alt="Train Carousel In"
              style={{ pointerEvents: 'none' }}
            />
          </>
        ) : (
          <img
            className="train"
            src={trainImages[currentTrain]}
            alt="Train Carousel"
            style={{ pointerEvents: 'none' }}
          />
        )}
        <Footer />
      </div>
    </div>
  );
} 