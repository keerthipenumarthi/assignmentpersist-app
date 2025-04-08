import logo from './logo.svg';
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import MapView from './components/MapView';
import './index.css'; // Assuming background is applied here
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Chat from './components/Chat';
import Map from './components/Map';
import MapWithImageMarker from './components/MapWithImageMarker'; // ✅




const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/chat', label: 'Chat' },
  { path: '/map', label: 'Map' },
];

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/shutterstock_582803470.jpg?w=750")',backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',position: 'absolute',
    top: 0,
    left: 0,
  width: '100vw', }} // Place your image in public/
      >
        <Menu items={menuItems} />
        <div className="p-4 backdrop-blur-sm bg-black/50 min-h-screen">
          <Routes>
     
 <Route path="/" element={<h1 className="text-3xl">Welcome Home</h1>} />
<Route path="/chat" element={<Chat />} />
             <Route path="/map" element={<MapView />} />
          </Routes>
        </div>
      </div>
  <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Welcome to the App</h1>
<div
  style={{
    backgroundImage: "url('/https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/shutterstock_582803470.jpg?w=750')",
    height: '500vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}}

>
  <nav style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }}>
   
  </nav>

 </div>
    <div>
      <h1>World Map</h1>
<img 
  src="/world-map.jpeg" 
  alt="Map" 
  style={{ width: '100vw', maxWidth: '600px', height: '100vh' }} 
/>


      <Map />
    </div>
  
}

    </Router>

  );
}

export default App;

