// src/components/Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('Social Cause Event')
      .openPopup();
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default Map;
