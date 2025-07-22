import React from 'react';
import '../App.css';
import anita_raj from '../assets/anita_raj.png';
import jadyn_park from '../assets/jadyn_park.png';
import lauren_song from '../assets/lauren_song.png';
import adneen_talib from '../assets/adneen_talib.png';
import leah_kim from '../assets/leah_kim.png';
import isabella_lu from '../assets/isabella_lu.png';
import grace_xu from '../assets/grace_xu.png';
import alice_zhang from '../assets/alice.jpeg';
import angel_wu from '../assets/angel.jpeg';
import teamHeader from '../assets/team_header.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Anita Raj',
      role: 'Executive Lead',
      email: 'ar4658@columbia.edu',
      image: anita_raj
    },
    {
      name: 'Jadyn Park',
      role: 'Sponsorship Lead',
      email: 'jsp2226@barnard.edu',
      image: jadyn_park
    },
    {
      name: 'Lauren Song',
      role: 'Logistics Lead',
      email: 'ljs2225@columbia.edu',
      image: lauren_song
    },
    {
      name: 'Adneen Talib',
      role: 'Logistics Lead',
      email: 'awt2133@barnard.edu',
      image: adneen_talib
    },
    {
      name: 'Leah Kim',
      role: 'Hacker Experience Lead',
      email: 'lk2935@barnard.edu',
      image: leah_kim
    },
    {
      name: 'Isabella Lu',
      role: 'Publicity Lead',
      email: 'iel2114@columbia.edu',
      image: isabella_lu
    },
    {
      name: 'Grace Xu',
      role: 'Technical Dev Lead',
      email: 'gx2168@columbia.edu',
      image: grace_xu
    }] 
    const techTeam = [
      {
        name: 'Grace Xu',
        role: 'Technical Dev Lead',
        email: 'gx2168@columbia.edu',
        image: grace_xu
      }, 
      {
        name: 'Alice Zhang',
        role: 'Tech Dev Team',
        email: 'az2880@columbia.edu',
        image: alice_zhang
      },
      {
        name: 'Angel Wu',
        role: 'Tech Dev Team',
        email: 'aw3631@columbia.edu',
        image: angel_wu
      },
    ];
  
  

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="team-section">
        <div className="team-header">
          <img 
            src={teamHeader} 
            alt="Team Header" 
            style={{
              maxWidth: '35vw',
              minWidth: '450',
              width: '100%',
              height: 'auto',
              zIndex: 10,
              marginLeft: '100px',
              marginBottom: '-20px'
            }}
          />
          <p>Meet the passionate organizers behind DivHacks 2025! Our team is dedicated to creating an empowering and inspirational space for students who are historically underrepresented in tech. We work together to bring you an unforgettable hackathon experience.</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <a className="team-email" href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </div>
          ))}
        </div>

        <h2 style={{ color: '#fff', fontSize: '3.5vw', marginBottom: '3vw', marginTop: '8vw' }}>Web Development Team</h2>
        <div className="team-grid">
          {techTeam.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <a className="team-email" href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 