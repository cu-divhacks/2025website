import '../App.css';

import { useState, useEffect, useRef } from 'react';
import background1 from '../assets/bg.png';
import Footer from '../components/Footer';
import CollapsibleText from '../components/CollapsibleText';
import low from '../assets/low.png';
import station from '../assets/station.png';
import skuline from '../assets/skyline.png';
import sponsors from '../assets/sponsors.png';
import tracks from '../assets/tracks.png';
import train1 from '../assets/train1.png';
import train2 from '../assets/train2.png';
import train3 from '../assets/train3.png';
import train4 from '../assets/train4.png';
import train5 from '../assets/train5.png';
import train6 from '../assets/train6.png';
import trainComingSoon from '../assets/trainComingSoon.png';
import track1img from '../assets/track1.png';
import track2img from '../assets/track2.png';
import track3img from '../assets/track3.png';
import track4img from '../assets/track4.png';
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
  const [hoveredTrack, setHoveredTrack] = useState(0);
  const [openFaqItem, setOpenFaqItem] = useState(null);
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
  const aboutSectionRef = useRef(null);
  const [aboutCardVisible, setAboutCardVisible] = useState(false);
  const judgesTrains = [train1, train2, train3, train4, train5, train6];
  const speakersTrains = [trainComingSoon]; // Only the coming soon train for speakers
  const [currentTrainSet, setCurrentTrainSet] = useState('judges'); // 'judges' or 'speakers'
  const [currentTrain, setCurrentTrain] = useState(0);
  const [nextTrain, setNextTrain] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  
  const trainImages = currentTrainSet === 'judges' ? judgesTrains : speakersTrains;
  

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
        
        // Check if we're on mobile
        const isMobile = window.innerWidth <= 799;
        
        if (isMobile) {
          // On mobile, the footer is positioned relatively, so we don't need to add its height
          // Just add some padding for the footer
          const skylineBottomVh = (skylineBottom / window.innerHeight) * 100;
          const newHeight = Math.max(skylineBottomVh - 21, 100); // Add 10vh padding for footer
          setContainerHeight(`${newHeight}vh`);
        } else {
          // Desktop calculation (original logic)
          const footer = document.querySelector('.footer');
          const footerHeight = footer ? footer.offsetHeight : 0;
          const footerHeightVh = (footerHeight / window.innerHeight) * 100;
          
          // Convert to viewport height percentage and add footer height
          const skylineBottomVh = (skylineBottom / window.innerHeight) * 100;
          const newHeight = Math.max(skylineBottomVh + footerHeightVh, 100); // Add footer height, minimum 100vh
          
          setContainerHeight(`${newHeight}vh`);
        }
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

  const handlePrevTrain = () => {
    if (isAnimating) return;
    const nextIndex = (currentTrain - 1 + trainImages.length) % trainImages.length;
    console.log('Prev: current=', currentTrain, 'next=', nextIndex, 'direction=slide-left');
    setNextTrain(nextIndex);
    setIsAnimating(true);
    setSlideDirection('slide-left');
    setTimeout(() => {
      setCurrentTrain(nextIndex);
      setNextTrain(null);
      setSlideDirection('');
      setIsAnimating(false);
    }, 600);
  };

  const handleNextTrain = () => {
    if (isAnimating) return;
    const nextIndex = (currentTrain + 1) % trainImages.length;
    console.log('Next: current=', currentTrain, 'next=', nextIndex, 'direction=slide-right');
    setNextTrain(nextIndex);
    setIsAnimating(true);
    setSlideDirection('slide-right');
    setTimeout(() => {
      setCurrentTrain(nextIndex);
      setNextTrain(null);
      setSlideDirection('');
      setIsAnimating(false);
    }, 600);
  };

  const handleTrainSetChange = (newSet) => {
    if (newSet === currentTrainSet) return;
    console.log('Switching from', currentTrainSet, 'to', newSet);
    setCurrentTrainSet(newSet);
    setCurrentTrain(0); // Reset to first train in new set
    setNextTrain(null); // Clear any pending animations
    setIsAnimating(false); // Stop any ongoing animations
    setSlideDirection(''); // Clear any slide direction
  };

  const handleFaqToggle = (faqTitle) => {
    setOpenFaqItem(openFaqItem === faqTitle ? null : faqTitle);
  };

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
        <div className="title-text">
          <h1>DIVHACKS 2025</h1>
          <p>OCTOBER 4-5TH</p>
          <div className="countdown-container">
            <div id="clock-container">
              <ul>
                <li><span id="days">{timeLeft.days}</span><span className="label">days</span></li>
                <li><span id="hours">{timeLeft.hours}</span><span className="label">hrs</span></li>
                <li><span id="minutes">{timeLeft.minutes}</span><span className="label">mins</span></li>
                <li><span id="seconds">{timeLeft.seconds}</span><span className="label">secs</span></li>
              </ul>
            </div>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSccOAZWWRA-xYgHwT3dKArwrR5gktoSJJlt7yGfaIG9QTRNPA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <button className="cta">Apply Now</button>
          </a>
          <p className="deadline-text">Priority Deadline: July 31st</p>
        </div>
        
        {/* About section */}
        <div className="about-section" ref={aboutSectionRef}>
          <img className={`about-card${aboutCardVisible ? ' slide-in' : ' slide-out'}`} src={aboutCard} alt="About DivHacks" />
          <div className="about-text">
            <p>DivHacks, founded in 2017, is Columbia University's premier student-led annual diversity hackathon run by Women in Computer Science. Over the past eight years, DivHacks has welcomed attendees from all over the tri-state area. We strive to create an empowering and inspirational space for students who are historically underrepresented in the tech industry. Our goal is an experience that not only reimagines what diversity should look like in the tech industry but gives students the tools to use technology to implement change.</p>
          </div>
        </div>
        {/*Stats Section */}
        <div className="stats-section">
          <h2>
            <b>STATS FROM 2024</b>
          </h2>
          <div className="stats-grid">
            <div className="stat-item glass-card">
              <div className="stat-number">750+</div>
              <div className="stat-label">Applications</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">295</div>
              <div className="stat-label">Hackers</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">14</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">54</div>
              <div className="stat-label">Institutions</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">48.4%</div>
              <div className="stat-label">Female/Non-binary</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">58.6%</div>
              <div className="stat-label">Beginner Hackers</div>
            </div>
          </div>
        </div>

        <img className="low" src= {low} alt ="Background" />
        <img className="station" src= {station} alt ="Background" />


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
              className={`track-image${hoveredTrack === idx ? ' selected' : ''}`}
              onMouseEnter={() => setHoveredTrack(idx)}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <img src={imgSrc} alt={`Track ${idx + 1}`} />
            </div>
          ))}
        </div>
        {hoveredTrack !== null && (
          <div className="track-card track-card-reveal track-card-below-row">
            <h3>{track[hoveredTrack].title}</h3>
            <p>{track[hoveredTrack].description}</p>
          </div>
        )}
        
        <div id="sponsors">
          <img className="sponsors" src= {sponsors} alt ="Sponsors" />
        </div>
        <div id="tracks">
          <img className="tracks" src= {tracks} alt ="Tracks" />
        </div>
        {/* Speakers and Judges header */}
        <div id="judges-speakers" className="speakers-header">
          <span 
            className={`header-clickable ${currentTrainSet === 'judges' ? 'active' : ''}`}
            onClick={() => handleTrainSetChange('judges')}
          >
            Judges
          </span>
          <span className="header-separator"> & </span>
          <span 
            className={`header-clickable ${currentTrainSet === 'speakers' ? 'active' : ''}`}
            onClick={() => handleTrainSetChange('speakers')}
          >
            Speakers
          </span>
        </div>
        {/* Train carousel with navigation */}
        <div className="train-carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={handlePrevTrain}>
            ‹
          </button>
          <div className="train-slide-container">
            <img
              className={`train ${isAnimating && slideDirection === 'slide-left' ? 'slide-out-left' : isAnimating && slideDirection === 'slide-right' ? 'slide-out-right' : ''}`}
              src={trainImages[currentTrain]}
              alt={`${currentTrainSet} Train ${currentTrain + 1}`}
            />
            {isAnimating && nextTrain !== null && (
              <img
                className={`train ${slideDirection === 'slide-left' ? 'slide-in-left' : 'slide-in-right'}`}
                src={trainImages[nextTrain]}
                alt={`${currentTrainSet} Train ${nextTrain + 1}`}
                style={{ zIndex: 2 }}
              />
            )}
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={handleNextTrain}>
            ›
          </button>
        </div>
        <div id="faq" className="faq-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <h2 className="faq-header" style={{ textAlign: 'center', width: '100%' }}>FAQs</h2>
          <div className="faq-columns-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', width: '100%', maxWidth: '1100px' }}>
            {/* Left Column */}
            <div className="faq-column">
              <h3 className="faq-column-header">General</h3>
              <CollapsibleText 
                title="What is DivHacks?"
                isExpanded={openFaqItem === "What is DivHacks?"}
                onToggle={() => handleFaqToggle("What is DivHacks?")}
              >
                <p>DivHacks is an awesome 32-hour long in-person event hosted at Columbia University where students of all backgrounds come together to bring something new to life! Hackers are encouraged to build any software or hardware project. There will also be lots of workshops, fun games, speakers, and prizes for you to enjoy throughout the event!</p>
              </CollapsibleText>
              <CollapsibleText 
                title="What is the cost?"
                isExpanded={openFaqItem === "What is the cost?"}
                onToggle={() => handleFaqToggle("What is the cost?")}
              >
                <p>There is no cost to attend DivHacks. All attendees will have access to mentors, workshops, events, an overnight hacking space, and food throughout the weekend. However, we do not provide travel reimbursements.</p>
              </CollapsibleText>
              <CollapsibleText 
                title="What can I win?"
                isExpanded={openFaqItem === "What can I win?"}
                onToggle={() => handleFaqToggle("What can I win?")}
              >
                <p>Prizes are given for the overall top 3 projects. There are also prizes for top submissions in each of the 4 tracks, as well as other categories such as Best Beginner Hack. Hackers also have the opportunity to win prizes from sponsor challenges– there is no limit to how many prizes a team can win. Stay tuned for our official list of prizes!</p>
              </CollapsibleText>
              <CollapsibleText 
                title="Who can apply?"
                isExpanded={openFaqItem === "Who can apply?"}
                onToggle={() => handleFaqToggle("Who can apply?")}
              >
                <p>Any college student (undergraduate or graduate) is welcome to apply! You are not required to have prior experience or even be a CS major to apply.</p>
              </CollapsibleText>
              <CollapsibleText 
                title="How do teams work?"
                isExpanded={openFaqItem === "How do teams work?"}
                onToggle={() => handleFaqToggle("How do teams work?")}
              >
                <p>You can work in teams of up to 4 people. If you do not have a team, please don't worry! There will be plenty of opportunities to connect with other DivHacks attendees (think Tinder for hackathon teams).</p>
              </CollapsibleText>
            </div>
            {/* Right Column */}
            <div className="faq-column">
              <h3 className="faq-column-header">Logistics</h3>
              <CollapsibleText 
                title="Can I attend virtually?"
                isExpanded={openFaqItem === "Can I attend virtually?"}
                onToggle={() => handleFaqToggle("Can I attend virtually?")}
              >
                <p>Unfortunately, DivHacks is only offered in-person.</p>
              </CollapsibleText>
              <CollapsibleText 
                title="Will food be provided?"
                isExpanded={openFaqItem === "Will food be provided?"}
                onToggle={() => handleFaqToggle("Will food be provided?")}
              >
                <p>Yes, we will be providing meals and snacks throughout the weekend. If you have any dietary restrictions, there is a space for you to note this on your application.</p>
              </CollapsibleText>
              <CollapsibleText 
                title="Will there be overnight accommodations?"
                isExpanded={openFaqItem === "Will there be overnight accommodations?"}
                onToggle={() => handleFaqToggle("Will there be overnight accommodations?")}
              >
                <p>We will provide an overnight hacking space where non-Columbia/Barnard students can work and sleep.</p>
              </CollapsibleText>
              <CollapsibleText 
                title="I still have questions!"
                isExpanded={openFaqItem === "I still have questions!"}
                onToggle={() => handleFaqToggle("I still have questions!")}
              >
                <p>Please email us at cu.divhacks@gmail.com.</p>
              </CollapsibleText>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 