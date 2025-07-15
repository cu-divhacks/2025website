import React from 'react';
import mapImg from '../assets/map.png';
import mapHeader from '../assets/map_header.PNG';

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
      <img 
        src={mapHeader} 
        alt="Map Header" 
        style={{
          maxWidth: '35vw',
          minWidth: 450,
          width: '100%',
          height: 'auto',
          marginBottom: '20px',
          marginTop: '20px'
        }}
      />
      <img 
        src={mapImg} 
        alt="DivHacks Venue Map" 
        style={{
          maxWidth: '35vw',
          minWidth: 450,
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
