import React from 'react';

const Map = () => {
  return (
    <div className="map-page" style={{
      padding: '120px 20px 40px 20px',
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
        marginBottom: '40px',
        color: '#ffffff',
        fontWeight: '300',
        letterSpacing: '3px',
        textTransform: 'uppercase'
      }}>
        Map
      </h1>
      <div style={{
        background: '#f8f9fa',
        padding: '30px 50px',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <p style={{
          fontSize: '1.8rem',
          color: '#6c757d',
          margin: '0',
          fontWeight: '400',
          letterSpacing: '1px',
          fontStyle: 'italic'
        }}>
          coming soon...
        </p>
      </div>
    </div>
  );
};

export default Map;
