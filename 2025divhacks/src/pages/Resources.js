import React from 'react';
import '../App.css';

const Resources = () => {
  return (
    <div className="resources-page" style={{
      padding: '60px 20px 40px 20px',
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2A5DA5',
      position: 'relative',
      zIndex: 1,
      padding: '90px'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '2rem',
        maxWidth: '700px',
        width: '100%',
        textAlign: 'left',
        color: '#222',
        margin: '0 auto'
      }}>
        <h2>What is a Hackathon?</h2>
        <p>A hackathon is a fun, collaborative event where people come together to build creative technology projects in a short period of time (often 24-36 hours). You don’t need to be an expert—hackathons are for everyone, especially beginners!</p>
        <h2>Getting Started</h2>
        <ul>
          <li>Form a team (or go solo!)</li>
          <li>Brainstorm a project idea—think simple and impactful</li>
          <li>Break your idea into small, manageable tasks</li>
          <li>Ask mentors and organizers for help anytime</li>
        </ul>
        <h2>Useful Links</h2>
        <ul>
          <li><a href="https://mlh.io/" target="_blank" rel="noopener noreferrer">Major League Hacking (MLH)</a></li>
          <li><a href="https://hackathon.guide/" target="_blank" rel="noopener noreferrer">Hackathon Guide</a></li>
          <li><a href="https://devpost.com/" target="_blank" rel="noopener noreferrer">Devpost (Project Submission Platform)</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub (Code Hosting)</a></li>
        </ul>
        <h2>Tips for Beginners</h2>
        <ul>
          <li>Don’t be afraid to ask questions—everyone starts somewhere!</li>
          <li>Focus on learning and having fun, not just winning</li>
          <li>Use online resources (YouTube, Stack Overflow, docs)</li>
          <li>Take breaks, eat, and rest—self-care is important</li>
          <li>Demo whatever you build, even if it’s not finished</li>
        </ul>
        <h2>Need Help?</h2>
        <p>Reach out to mentors, volunteers, or organizers at any time during the event. We’re here to support you!</p>
      </div>
    </div>
  );
};

export default Resources; 