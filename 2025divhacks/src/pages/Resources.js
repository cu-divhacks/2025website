import React from 'react';
import '../App.css';

const resourcesData = [
  {
    title: "What is a Hackathon?",
    content: "A hackathon is a fun, collaborative event where people come together to build creative technology projects in a short period of time (often 24–36 hours). You don’t need to be an expert—hackathons are for everyone, especially beginners!"
  },
  {
    title: "Getting Started",
    content: "Form a team (or go solo), brainstorm simple impactful ideas, break your project into small tasks, and lean on mentors for guidance anytime.",
  },
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
    title: "Tips for Beginners",
    content: "Ask questions freely, prioritize learning over winning, manage your energy with breaks, and always demo what you build—even if it's a prototype."
  },
  {
    title: "Need Help?",
    content: "Reach out to mentors, volunteers, or organizers at any time during the event. We’re here to support you! Be sure to attend our workshops to grow your skills and knowledge!"
  }
];

export default function Resources() {
  return (
    <section className="resources-page">
      <div className="resources-grid">
        {resourcesData.map((item, idx) => (
          <div key={idx} className="resource-card">
            <h2 className="card-title">{item.title}</h2>
            {item.content && <p className="card-content">{item.content}</p>}
            {item.links && (
              <ul className="card-links">
                {item.links.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}