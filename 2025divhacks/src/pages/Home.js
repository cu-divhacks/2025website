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
import train from '../assets/train.png';
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
        <div id="sponsors">
          <img className="sponsors" src= {sponsors} alt ="Sponsors" />
        </div>
        <div id="tracks">
          <img className="tracks" src= {tracks} alt ="Tracks" />
        </div>
        {/* Speakers and Judges header */}
        <div id="judges-speakers" className="speakers-header">Judges & Speakers</div>
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
        <div id="faq" className="faq-section">
          <h2 className="faq-header">Frequently Asked Questions</h2>
          
          <div className="faq-categories-container">
            <div className="faq-category">
              <h3 className="faq-category-title">General</h3>
            <CollapsibleText title="What is DivHacks?">
              <p>DivHacks is an awesome 32-hour long in-person event hosted at Columbia University where students of all backgrounds come together to bring something new to life! Hackers are encouraged to build any software or hardware project. There will also be lots of workshops, fun games, speakers, and prizes for you to enjoy throughout the event!</p>
            </CollapsibleText>
            
            <CollapsibleText title="I'm a beginner hacker. Can I still join?">
              <p>Absolutely! You are not required to have prior experience or even be a CS major to apply. DivHacks welcomes people of all skill levels and educational experience. During the hackathon, there will be workshops, help sessions, and mentors available to assist you with your projects. Additionally, in the week leading up to DivHacks, there will be workshops to help prepare you for coding over the weekend.</p>
            </CollapsibleText>
            
            <CollapsibleText title="Where and when is DivHacks?">
              <p>DivHacks will take place in person at Columbia University's campus in New York City, primarily in Alfred J. Lerner Hall, on October 4-5.</p>
            </CollapsibleText>
            
            <CollapsibleText title="What's the cost?">
              <p>There is no cost to attend DivHacks. All attendees will have access to mentors, workshops, events, an overnight hacking space, and food throughout the weekend. However, we do not provide travel reimbursements.</p>
            </CollapsibleText>
            
            <CollapsibleText title="What can I win?">
              <p>Prizes are given for the overall top 3 projects. There are also prizes for top submissions in each of the 4 tracks, as well as other categories such as Best Beginner Hack. Hackers also have the opportunity to win prizes from sponsor challenges– there is no limit to how many prizes a team can win. Stay tuned for our official list of prizes, which will be revealed closer to the weekend!</p>
            </CollapsibleText>
            
            <CollapsibleText title="If everyone is welcome, why do I have to submit an application?">
              <p>We would love to host everyone and anyone interested in attending DivHacks. Unfortunately, we can only host a limited number of hackers due to venue size and budget limitations. We place this limit as we want to ensure all our guests have the best experience possible.</p>
            </CollapsibleText>
            
            <CollapsibleText title="I still have questions!">
              <p>Please email us at cu.divhacks@gmail.com if you have any additional questions.</p>
            </CollapsibleText>
          </div>
          
          <div className="faq-category">
            <h3 className="faq-category-title">Registration</h3>
            <CollapsibleText title="Who can apply?">
              <p>Any college student (undergraduate or graduate) is welcome to apply! DivHacks prides itself on bringing together innovative leaders from diverse gender, socioeconomic, and educational backgrounds to problem-solve, inspire, and code. We provide a safe and empowering space for students who identify as part of an underrepresented group in tech, and welcome anyone who feels they would benefit from this type of space!</p>
            </CollapsibleText>
            
            <CollapsibleText title="What if I'm not eligible? / How can I help as a mentor, workshop leader, or volunteer?">
              <p>Please contact us at cu.divhacks@gmail.com, and we will put you in touch with our Hacker Experience team!</p>
            </CollapsibleText>
            
            <CollapsibleText title="How do I apply?">
              <p>Applications open late June. Priority applications are due July 31st, and regular applications are due August 31st. Just fill out the application before the deadline!</p>
            </CollapsibleText>
            
            <CollapsibleText title="How do teams work?">
              <p>You can work in teams of up to 4 people. If you do not have a team, please don't worry! In the weeks leading up to the hackathon, we will share a link to a platform that allows you to create your profile and connect with other DivHacks attendees. You will be able to find teammates based on technical skills and interests (think Tinder for hackathon teams).</p>
            </CollapsibleText>
            
            <CollapsibleText title="What if I don't have a team on the day of the hackathon?">
              <p>Don't worry! We'll be hosting a team-forming mixer after opening ceremonies, so you'll have a chance to meet other participants and join a team. Hackers can also choose to work solo, in pairs, or as a trio!</p>
            </CollapsibleText>
          </div>
          
          <div className="faq-category">
            <h3 className="faq-category-title">In-Person Logistics</h3>
            <CollapsibleText title="Can I attend virtually?">
              <p>Unfortunately, DivHacks is only offered in-person.</p>
            </CollapsibleText>
            
            <CollapsibleText title="Will food be provided?">
              <p>Yes, we will be providing meals and snacks throughout the weekend. If you have any dietary restrictions, there is a space for you to note this on your application.</p>
            </CollapsibleText>
            
            <CollapsibleText title="Will there be overnight accommodations?">
              <p>We will provide an overnight hacking space where non-Columbia/Barnard students can work and sleep. Snacks will be available to keep you energized throughout the night.</p>
            </CollapsibleText>
            
            <CollapsibleText title="What will campus access look like for non-Columbia/Barnard participants?">
              <p>While non-Columbia/Barnard students will have access to campus for the hackathon weekend, please note that access may be restricted due to current campus restrictions. Please pay close and timely attention to all communications from the hackathon organizing team to ensure a seamless and enjoyable experience.</p>
            </CollapsibleText>
          </div>
          
          <div className="faq-category">
            <h3 className="faq-category-title">Project Submissions</h3>
            <CollapsibleText title="What are hackathon tracks and how do they work?">
              <p>DivHacks projects are required to fall under 1 of 4 distinct "tracks", thematic focus areas intended to broadly guide your project. This year, our tracks are productivity, sustainability, entertainment, and immersive technology. During submission, you will be prompted to select 1 track that best fits your project. You can find further descriptions of each of our tracks on our website.</p>
            </CollapsibleText>
            
            <CollapsibleText title="How do submissions work with tracks and sponsor challenges?">
              <p>Some of our sponsors propose their own challenges, which can be understood as mini-tracks. We have designed our tracks to align with all sponsor challenges to maximize the chances of your project winning. You may submit to an unlimited amount of sponsor challenges, so long as you fulfill the challenge requirements.</p>
            </CollapsibleText>
            
            <CollapsibleText title="Do I have to submit a project if I attend?">
              <p>Submitting a project is not required, but is highly encouraged, and it's the only way you'll be eligible for a prize! This is a fantastic opportunity to leave the hackathon with a completed project and receive valuable feedback from industry leaders and professionals!</p>
            </CollapsibleText>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 