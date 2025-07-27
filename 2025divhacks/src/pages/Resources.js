import React, { useState } from 'react';
import '../App.css';
import resourcesHeader from '../assets/resources_header.png';
import workshopHeader from '../assets/workshop_header.png';
import CollapsibleText from '../components/CollapsibleText';

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
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <section className="resources-page">
      {/* Work in Progress Marker */}
      <div style={{
        position: 'absolute',
        background: '#ffce2d',
        color: '#000000',
        fontWeight: 900,
        fontSize: '3vw',
        textAlign: 'center',
        padding: '0.7vw 0',
        letterSpacing: '0.2vw',
        marginTop: '8vw',
        transform: 'rotate(-15deg)',
        border: '0.3vw solid #000',
        width: '25vw',
        zIndex: 10
      }}>
        🚧 WORK IN PROGRESS 🚧
      </div>
      <img 
        src={resourcesHeader} 
        alt="Resources Header" 
        style={{
          width: '100%',
          height: 'auto',
          marginTop: '0.5vw',
          maxWidth: '50vw',
          minWidth: '40vw',
        }}
      />
      <div style={{
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        marginTop: '-7vw',
      }}>
        <div style={{ maxWidth: '60vw', margin: '0 auto' }}>
          <CollapsibleText
            title="What is a Hackathon?"
            isExpanded={openDropdown === "What is a Hackathon?"}
            onToggle={() =>
              setOpenDropdown(
                openDropdown === "What is a Hackathon?" ? null : "What is a Hackathon?"
              )
            }
            headerStyle={{ fontSize: '1.2vw', fontWeight: 700, cursor: 'pointer', width: '100%' }}
          >
            <div style={{ fontSize: '1.5vw', fontWeight: 500 }}>
              A hackathon is a fun, collaborative event where people come together to build creative technology projects in a short period of time (often 24–36 hours). You don't need to be an expert—hackathons are for everyone, especially beginners!
            </div>
          </CollapsibleText>
          <CollapsibleText
            title="What are hackathon tracks and how do they work?"
            isExpanded={openDropdown === "What are hackathon tracks and how do they work?"}
            onToggle={() =>
              setOpenDropdown(
                openDropdown === "What are hackathon tracks and how do they work?" ? null : "What are hackathon tracks and how do they work?"
              )
            }
            headerStyle={{ fontSize: '1.2vw', fontWeight: 700, cursor: 'pointer', width: '100%' }}
          >
            <div style={{ fontSize: '1.5vw', fontWeight: 500 }}>
              DivHacks projects are required to fall under 1 of 4 distinct "tracks", thematic focus areas intended to broadly guide your project. This year, our tracks are productivity, sustainability, entertainment, and immersive technology. During submission, you will be prompted to select 1 track that best fits your project.
            </div>
          </CollapsibleText>
          <CollapsibleText
            title="Do I need to submit a project?"
            isExpanded={openDropdown === "Do I need to submit a project?"}
            onToggle={() =>
              setOpenDropdown(
                openDropdown === "Do I need to submit a project?" ? null : "Do I need to submit a project?"
              )
            }
            headerStyle={{ fontSize: '1.2vw', fontWeight: 700, cursor: 'pointer', width: '100%' }}
          >
            <div style={{ fontSize: '1.5vw', fontWeight: 500 }}>
              Submitting a project is not required, but is highly encouraged, and it's the only way you'll be eligible for a prize! This is a fantastic opportunity to leave the hackathon with a completed project and receive valuable feedback from industry leaders and professionals!
            </div>
          </CollapsibleText>
        </div>
      </div>
      {/* Horizontally aligned Past Projects, Tech Stacks, and Presentation & Competition cards */}
      <div className="resources-grid">
        {/* Past Projects Card */}
        <div
          className="resource-card"
          style={{
            width: '22vw',
            minWidth: '250px',
            maxWidth: '340px',
            height: 'auto',
            color: '#fff',
            margin: '0 1vw',
            textAlign: 'left'
          }}
        >
          <h2 className="card-title" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}>Project Inspo</h2>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li>
              <b>Past Projects </b>
              <div style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)', color: '#fff' }}>
                coming soon...
              </div>
            </li>
          </ul>
        </div>

        {/* Tech Stacks Card */}
        <div
          className="resource-card"
          style={{
            width: '22vw',
            minWidth: '250px',
            maxWidth: '340px',
            height: 'auto',
            color: '#fff',
            margin: '0 1vw',
            textAlign: 'left'
          }}
        >
          <h2 className="card-title" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}>Recommended Tech Stacks</h2>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Web Apps:</b> React, Next.js, Tailwind CSS</li>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Mobile Apps:</b> React Native, Flutter</li>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Data Science:</b> Python, Pandas, Scikit‑Learn</li>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Backend:</b> Node.js, Express, MongoDB</li>
          </ul>
        </div>

        {/* Presentation & Competition Card */}
        <div
          className="resource-card"
          style={{
            width: '22vw',
            minWidth: '250px',
            maxWidth: '340px',
            height: 'auto',
            color: '#fff',
            margin: '0 1vw',
            textAlign: 'left'
          }}
        >
          <h2 className="card-title" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}>Presentation & Competition</h2>
          <ul style={{ paddingLeft: '1.5em' }}>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Demo Structure:</b> Hook → Problem → Solution → Impact.</li>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Pitch Tips:</b> Be concise, practice timing, and use storytelling.</li>
            <li style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}><b>Slide Best Practices:</b> Use visuals and limit text to key points.</li>
          </ul>
        </div>
      </div>
      {/* Workshops header and coming soon box below the cards */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vw', marginBottom: '2vw', width: '100%' }}>
        <img 
          src={workshopHeader} 
          alt="Workshop Header" 
          style={{
            maxWidth: '40vw',
            minWidth: '20vw',
            width: '100%',
            height: 'auto',
            marginTop: '0.2vw',
          }}
        />
        <div style={{
          background: '#fff',
          color: '#2A5DA5',
          borderRadius: '1vw',
          boxShadow: '0 0.4vw 2.4vw rgba(0,0,0,0.10)',
          padding: '2vw 2vw',
          fontWeight: 700,
          fontSize: '1.5vw',
          minWidth: '50vw',
          maxWidth: '50vw',
          textAlign: 'center',
        }}>
          coming soon...
        </div>
      </div>
    </section>
  );
}