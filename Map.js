import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import axios from 'axios';

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Predefined famous data (for demo purposes)
const famousCities = {
  'Paris': ['art', 'history', 'fashion'],
  'London': ['history', 'culture', 'theater'],
  'Tokyo': ['technology', 'innovation', 'culture'],
  'New York': ['theater', 'art', 'business'],
  // You can add more cities and their famous categories here
};

function MapInteractions({ setCoords, setLocationInfo }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setCoords([lat, lng]); // Set the coordinates when the marker is clicked
      fetchLocationInfo(lat, lng, setLocationInfo); // Fetch location info after click
    },
  });
  return null;
}

// Fetch location info from OpenStreetMap (reverse geocoding)
const fetchLocationInfo = async (lat, lng, setLocationInfo) => {
  try {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    if (res.data && res.data.display_name) {
      setLocationInfo({
        name: res.data.display_name || 'Unknown location',
        famousFor: 'Not available', // Default value, will be updated based on the passion check
        lat: lat.toFixed(4),
        lng: lng.toFixed(4),
      });
    } else {
      setLocationInfo({
        name: 'Location unavailable',
        famousFor: 'Could not fetch information',
        lat: 'N/A',
        lng: 'N/A',
      });
    }
  } catch (error) {
    console.error('Error fetching location info:', error);
    setLocationInfo({
      name: 'Location unavailable',
      famousFor: 'Could not fetch information',
      lat: 'N/A',
      lng: 'N/A',
    });
  }
};

// Function to check if the city is famous for a specific passion
const checkFamousForPassion = (cityName, passion) => {
  const lowerPassion = passion.toLowerCase();
  const cityFamousFor = famousCities[cityName] || [];

  if (cityFamousFor.some((item) => item.toLowerCase() === lowerPassion)) {
    return `Yes, ${cityName} is famous for ${passion}.`;
  }
  return `No, ${cityName} is not known for ${passion}.`;
};

export default function MyMapComponent() {
  const [coords, setCoords] = useState([51.505, -0.09]); // Default coordinates
  const [locationInfo, setLocationInfo] = useState({
    name: 'Loading location...',
    famousFor: 'Loading famous information...',
    lat: 'N/A',
    lng: 'N/A',
  });
  const [passionResult, setPassionResult] = useState('');

  const handleMarkerDrag = (e) => {
    const { lat, lng } = e.target.getLatLng();
    setCoords([lat, lng]); // Update coordinates after dragging
    fetchLocationInfo(lat, lng, setLocationInfo); // Fetch the new location info
  };

  const handlePassionSubmit = (event, passion) => {
    if (event.key === 'Enter') {
      const message = checkFamousForPassion(locationInfo.name, passion);
      setPassionResult(message); // Update passion result
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2 p-2" style={{ height: '100vh' }}>
      <h2 className="text-xl font-bold text-center text-black mb-3">🌍 Passion Map</h2>
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

          {/* Current draggable marker */}
          <Marker
            position={coords}
            icon={customIcon}
            draggable={true}
            eventHandlers={{
              dragend: handleMarkerDrag, // Update coordinates and fetch new city info after drag
            }}
          >
            <Popup>
              📍 <strong>{locationInfo.name}</strong><br />
              🌍 <strong>Coordinates:</strong> Lat: {locationInfo.lat}, Lng: {locationInfo.lng}<br />
              🏙️ <strong>Famous for:</strong> {locationInfo.famousFor}<br />
              <input
                type="text"
                placeholder="Enter a passion (e.g., art, engineering)"
                onKeyDown={(e) => handlePassionSubmit(e, e.target.value)} // Trigger check on Enter key press
                className="p-1 mt-2 text-black"
              />
              {passionResult && <p>{passionResult}</p>} {/* Display the result */}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
