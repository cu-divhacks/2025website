import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';

const Sponsorship = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#2A5DA5',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '40px',
      }}>
        <h1 style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: '4vw',
          marginBottom: '2vw',
          textAlign: 'center',
          letterSpacing: '0.1em',
          textShadow: '0 2px 16px rgba(0,0,0,0.18)'
        }}>
          SPONSORSHIP
        </h1>
        <div className="team-member" style={{
          width: '80%',
          margin: '0 auto',
        }}>
        <h2 style={{ color: '#fff', fontSize: '2.7vw', marginBottom: '1.5rem' }}>Why Sponsor DivHacks?</h2>
          <p style={{ color: '#fff', fontSize: '1.5vw', marginBottom: '1.5rem' }}>
          Sponsoring DivHacks is a great way for your company to further establish brand awareness and engage the student community. By sending representatives and mentors to the event, you’ll showcase your technologies, gain real‑time feedback as participants build creative projects using your products and APIs and connect directiy withh talendted, dedicated students via access to 250+ attendee resumes, our career fair, and exlusive workshops.<br />
          </p>
          <p style={{ color: '#fff', fontSize: '2vw', marginTop: '1.5vw', opacity: 0.85 }}>
          Contact us at <a href="mailto:cu.divhacks@gmail.com" style={{ color: "white", textDecoration: 'underline', fontWeight: 600 }}>cu.divhacks@gmail.com</a> for our sponsorship prospectus and partnership opportunities!
          </p>
        </div>
        {/* Sponsorship Tiers Section */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '2vw',
          marginTop: '3vw',
          width: '95%',
          maxWidth: 1400,
        }}>
          {[
            {
              name: 'Bronze',
              price: '$500',
              features: [
                'Access to resume book',
                'Send mentors',
                'Logo & promotion (website, socials, merch)'
              ]
            },
            {
              name: 'Silver',
              price: '$1000',
              features: [
                'Access to resume book',
                'Send mentors',
                'Logo & promotion (website, socials, merch)',
                'Provide product and/or hardware',
                'Sponsor a raffle'
              ]
            },
            {
              name: 'Gold',
              price: '$2000',
              features: [
                'Access to resume book',
                'Send mentors',
                'Logo & promotion (website, socials, merch)',
                'Provide product and/or hardware',
                'Sponsor a raffle',
                'Table at sponsorship fair'
              ]
            },
            {
              name: 'Platinum',
              price: '$3000',
              features: [
                'Access to resume book (early access)',
                'Send mentors',
                'Logo & promotion (website, socials, merch)',
                'Provide product and/or hardware',
                'Sponsor a raffle',
                'Table at sponsorship fair',
                'Present custom challenge & prize'
              ]
            },
            {
              name: 'Diamond',
              price: '$5000',
              features: [
                'Access to resume book (early access)',
                'Send mentors',
                'Logo & promotion (website, socials, merch)',
                'Provide product and/or hardware',
                'Sponsor a raffle',
                'Table at sponsorship fair',
                'Present custom challenge & prize',
                'Host custom demo/workshop'
              ]
            }
          ].map((tier, idx) => (
            <div key={tier.name} className="team-member" style={{
              minWidth: 220,
              maxWidth: 260,
              width: '100%',
              flex: '1 1 220px',
              margin: '1vw 0',
              padding: '2vw 1vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              backgroundColor: 'rgba(255,255,255,0.13)',
              border: '1.5px solid rgba(255,255,255,0.22)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.13)',
              color: '#fff',
            }}>
              <div style={{ fontWeight: 900, fontSize: '1.5rem', color: '#fff', marginBottom: 6 }}>{tier.name}</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: 12 }}>{tier.price}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', width: '100%' }}>
                {tier.features.map((feature, fidx) => {
                  let display;
                  if (feature.includes('early access')) {
                    display = <span style={{color:'#2A5DA5', fontWeight:600, fontSize:'0.95em'}}>early access</span>;
                  } else {
                    display = <span style={{color:'#F7B32B', fontWeight:900, fontSize:'1.2em', marginRight:4}}>✓</span>;
                  }
                  // Remove (early access) from feature label for display
                  const label = feature.replace(' (early access)', '');
                  return (
                    <li key={feature} style={{marginBottom:8, display:'flex', alignItems:'center'}}>
                      {display}
                      <span style={{color:'#fff', fontSize:'0.98em', marginLeft:6}}>{label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
