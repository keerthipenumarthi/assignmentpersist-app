import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Predefined city-to-fame mapping
const cityFame = {
  'Paris': 'Known for the Eiffel Tower, Louvre Museum, and rich art history.',
  'London': 'Famous for Buckingham Palace, Big Ben, and its royal heritage.',
  'Tokyo': 'Renowned for its blend of traditional temples and modern technology.',
  'New York': 'Iconic for Times Square, Central Park, and Broadway shows.',
  'Rome': 'Historic landmarks like the Colosseum and Vatican City.',
  'Las Vegas': 'The entertainment capital with vibrant nightlife and casinos.',
  'Copenhagen': 'Celebrated for Tivoli Gardens and a high quality of life.',
  'Edinburgh': 'Known for its festivals, historic castle, and Hogmanay celebrations.',
  'Kolkata': 'Rich in culture with Durga Puja celebrations and colonial architecture.',
  'Jaipur': 'Famous for its pink-hued buildings and historic forts.',
  'Jodhpur': 'Known as the Blue City with its majestic Mehrangarh Fort.',
};

// Extract city name from Nominatim response
const extractCityName = (data) => {
  return (
    data.address?.city ||
    data.address?.town ||
    data.address?.village ||
    data.address?.state ||
    'Unknown'
  );
};

// Handles map clicks
function MapInteractions({ setCoords, setLocationInfo }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setCoords([lat, lng]);
      fetchLocationInfo(lat, lng, setLocationInfo);
    },
  });
  return null;
}

// Fetch location info from OpenStreetMap (reverse geocoding)
const fetchLocationInfo = async (lat, lng, setLocationInfo) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
    );
    const data = await res.json();
    const city = extractCityName(data);
    const fame = cityFame[city] || 'Information not available';

    setLocationInfo({
      name: data.display_name || 'Unknown location',
      fame: fame,
      lat: lat.toFixed(4),
      lng: lng.toFixed(4),
    });
  } catch (error) {
    console.error('Error fetching location info:', error);
    setLocationInfo({
      name: 'Location unavailable',
      fame: 'Could not fetch information',
      lat: 'N/A',
      lng: 'N/A',
    });
  }
};

// Main component
export default function MyMapComponent() {
  const [coords, setCoords] = useState([51.505, -0.09]); // Default coordinates
  const [locationInfo, setLocationInfo] = useState({
    name: 'Loading location...',
    fame: 'Loading fame information...',
    lat: 'N/A',
    lng: 'N/A',
  });

  const handleMarkerDrag = (e) => {
    const { lat, lng } = e.target.getLatLng();
    setCoords([lat, lng]);
    fetchLocationInfo(lat, lng, setLocationInfo);
  };

  return (
    <div className="flex flex-col items-center space-y-2 p-2" style={{ height: '100vh' }}>
      <h2 className="text-xl font-bold text-center text-black mb-3">🌍 City Fame Map</h2>
      <p className="text-center text-black">Click or drag the marker to check city info!</p>

      <div style={{ height: '80%', width: '100%' }}>
        <MapContainer
          center={coords}
          zoom={5}
          style={{ height: '80%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapInteractions setCoords={setCoords} setLocationInfo={setLocationInfo} />

          <Marker
            position={coords}
            icon={customIcon}
            draggable={true}
            eventHandlers={{
              dragend: handleMarkerDrag,
            }}
          >
            <Popup>
              <div className="text-black">
                📍 <strong>{locationInfo.name}</strong><br />
                🌍 <strong>Coordinates:</strong> Lat: {locationInfo.lat}, Lng: {locationInfo.lng}<br />
                🏙️ <strong>Famous for:</strong> {locationInfo.fame}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
