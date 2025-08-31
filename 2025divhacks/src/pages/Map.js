import React from 'react';
import mapImg from '../assets/map.png';
import mapHeader from '../assets/map_header.png';

const Map = () => {
  return (
    <div className="map-page" style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8EBAE0',
      position: 'relative',
      zIndex: 1
    }}>
      <img 
        src={mapImg} 
        alt="DivHacks Venue Map" 
        style={{
          marginTop: '3vh',
          width: '40vw',
          rotate: '90deg',
        }}
      />
      <img 
        src={mapHeader} 
        alt="Map Header" 
        style={{
          marginTop: '-12vw',
          width: '30%',
          height: 'auto',
          marginBottom: '1vw',
        }}
      />
    </div>
  );
};

export default Map;
