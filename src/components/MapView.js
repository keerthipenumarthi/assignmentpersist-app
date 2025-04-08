// components/MapView.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const sampleLocations = [
  { name: 'Location A', coords: [51.505, -0.09] },
  { name: 'Location B', coords: [51.51, -0.1] },
];
const MapView = ({ locations }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

      {locations?.map((loc, idx) => (
        <Marker key={idx} position={loc.coords}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;