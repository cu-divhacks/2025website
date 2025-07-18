import React from 'react';
import '../App.css';
import resourcesHeader from '../assets/resources_header.png';
import workshopHeader from '../assets/workshop_header.png';

const resourcesData = [
  {
    title: "Useful Links",
    links: [
      { label: "Major League Hacking (MLH)", href: "https://mlh.io/" },
      { label: "Hackathon Guide", href: "https://taikai.network/blog/hackathon-beginners-guide" },
      { label: "Devpost", href: "https://devpost.com/" },
      { label: "GitHub Guide", href: "https://docs.github.com/en" },
      { label: "freeCodeCamp: Free Coding Resources", href: "https://www.freecodecamp.org/" },
      { label: "Figma: Building Protoypes & Designing", href: "https://www.figma.com/" }
    ]
  },
  {
    title: 'Workshops',
    content: 'Coming Soon...,' // content to come
  },
];

export default function Resources() {
  return (
    <section className="resources-page">
      {/* Work in Progress Marker */}
      <div style={{
        position: 'absolute',
        background: '#ffce2d',
        color: '#000000',
        fontWeight: 900,
        fontSize: '1.5rem',
        textAlign: 'center',
        padding: '0.4rem 0',
        letterSpacing: '2px',
        marginTop: '8vw',
        transform: 'rotate(-15deg)',
        border: '3px solid #000',
        width: '375px',
      }}>
        🚧 WORK IN PROGRESS 🚧
      </div>
      <img 
        src={resourcesHeader} 
        alt="Resources Header" 
        style={{
          maxWidth: '35vw',
          minWidth: 450,
          width: '100%',
          height: 'auto',
          marginTop: '3px',
          marginBottom: '-50px',
        }}
      />
      <div style={{
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        margin: '-2vw 0 2vw 0',
      }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '1px', margin: 0, textShadow: '1px 1px 4px #0008' }}>
          What is a Hackathon?
        </h2>
        <div style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '1px', textShadow: '1px 1px 4px #0008', marginTop: '0.5vw' }}>
          A hackathon is a fun, collaborative event where people come together to build creative technology projects in a short period of time (often 24–36 hours). You don’t need to be an expert—hackathons are for everyone, especially beginners!
        </div>
      </div>
      {/* Horizontally aligned Past Projects, Tech Stacks, and Presentation & Competition cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '1vw',
          flexWrap: 'wrap',
          margin: '3vw 0'
        }}
      >
        {/* Past Projects Card */}
        <div
          style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            padding: '0.5vw 2vw',
            minWidth: '280px',
            maxWidth: '400px',
            flex: '1 1 320px',
            color: '#222',
            margin: '0 1vw',
            textAlign: 'left'
          }}
        >
          <h2 className="card-title" style={{ color: '#2A5DA5' }}>Past Projects</h2>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li>
              <b>Project 1: Name</b>
              <div style={{ fontSize: '1rem', color: '#444' }}>
                coming soon...
              </div>
            </li>
            <li>
              <b>Project 2: Name</b>
              <div style={{ fontSize: '1rem', color: '#444' }}>
                coming soon...
              </div>
            </li>
          </ul>
        </div>

        {/* Tech Stacks Card */}
        <div
          style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            padding: '0.5vw 2vw',
            minWidth: '280px',
            maxWidth: '400px',
            flex: '1 1 320px',
            color: '#222',
            margin: '0 1vw',
            textAlign: 'left'
          }}
        >
          <h2 className="card-title" style={{ color: '#2A5DA5' }}>Tech Stacks</h2>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li><b>Web Apps:</b> React, Next.js, Tailwind CSS</li>
            <li><b>Mobile Apps:</b> React Native, Flutter</li>
            <li><b>Data Science:</b> Python, Pandas, Scikit‑Learn</li>
            <li><b>Backend:</b> Node.js, Express, MongoDB</li>
          </ul>
        </div>

        {/* Presentation & Competition Card */}
        <div
          style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            padding: '0.5vw 2vw',
            minWidth: '280px',
            maxWidth: '400px',
            flex: '1 1 320px',
            color: '#222',
            margin: '0 1vw',
            textAlign: 'left'
          }}
        >
          <h2 className="card-title" style={{ color: '#2A5DA5' }}>Presentation & Competition</h2>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li><b>Demo Structure:</b> Hook → Problem → Solution → Impact.</li>
            <li><b>Pitch Tips:</b> Be concise, practice timing, and use storytelling.</li>
            <li><b>Slide Best Practices:</b> Use visuals and limit text to key points.</li>
          </ul>
        </div>
      </div>
      {/* Workshops header and coming soon box below the cards */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2vw', marginBottom: '2vw', width: '100%' }}>
        <img 
          src={workshopHeader} 
          alt="Workshop Header" 
          style={{
            maxWidth: '35vw',
            minWidth: 450,
            width: '100%',
            height: 'auto',
            marginTop: '3px',
            marginRight: '2vw',
          }}
        />
        <div style={{
          background: '#fff',
          color: '#2A5DA5',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          padding: '2vw 2vw',
          fontWeight: 700,
          fontSize: '1.5rem',
          minWidth: '280px',
          maxWidth: '400px',
          textAlign: 'center',
          marginLeft: '1vw',
        }}>
          coming soon...
        </div>
      </div>
    </section>
  );
}