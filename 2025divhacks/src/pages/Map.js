import React from 'react';
import mapImg from '../assets/map.png';

const Map = () => {
  return (
    <div className="map-page" style={{
      padding: '60px 20px 0px 20px',
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2A5DA5',
      position: 'relative',
      zIndex: 1
    }}>
      <h1 style={{
        fontSize: '4rem',
        marginBottom: '20px',
        color: '#ffffff',
        fontWeight: '700',
        textTransform: 'uppercase'
      }}>
        Map
      </h1>
      <img 
        src={mapImg} 
        alt="DivHacks Venue Map" 
        style={{
          maxWidth: '35vw',
          minWidth: 400,
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          border: '2px solid #fff',
          background: '#fff',
        }}
      />
    </div>
  );
};

export default Map;
