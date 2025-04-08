import React from 'react';
import worldMap from '../assets/world-map.jpg';


const MapWithImageMarker = () => {
  const markerStyle = {
    position: 'absolute',
    top: '40%', // Adjust as needed
    left: '60%', // Adjust as needed
    transform: 'translate(-50%, -50%)',
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(255, 0, 0, 0.7)',
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <img src={worldMap} alt="World Map" style={imageStyle} />
      <div style={markerStyle} />
    </div>
  );
};

export default MapWithImageMarker;

