// map.js
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useState } from 'react';
import MapWithImageMarker from './MapWithImageMarker'; // ✅


function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
}

export default function MyMapComponent() {
  const [coords, setCoords] = useState([51.505, -0.09]);

  const handleClick = () => {
    setCoords([40.7128, -74.006]); // New York coords
  };

  return (
    <>
      <button onClick={handleClick}>Go to New York</button>
      <MapContainer center={coords} zoom={13} style={{ height: '100vh', width: '100vw' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={coords} />
        <Marker position={coords} />
      </MapContainer>
    </>
  );
}
