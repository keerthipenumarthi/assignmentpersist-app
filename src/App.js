// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Chat from './components/Chat';
import Map from './components/Map';
import IntroPage from './components/IntroPage';
import ContentLibrary from './pages/ContentLibrary';
import Videos from './pages/Videos';
import './App.css';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Ensure MDB styles are applied
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import ThemeToggle from './components/ThemeToggle';

// Menu item links
const menuItems = [
  { path: '/home', label: 'Home' },
  { path: '/chat', label: 'Chat' },
  { path: '/map', label: 'Map' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/contentlibrary', label: 'Content Library' },
  { path: '/videos', label: 'Videos' },
  { path: '/contact', label: 'Contact' },
];

function App() {
  return (
    <Router>
      <div
        className="min-h-screen w-full bg-cover bg-center text-white"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/abstract-technology-background-computer-generated-your-projects_476363-5722.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1, // Adjust opacity to 0.5 for a subtle effect
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw', // Ensures it covers the full width of the viewport
          height: '100vh', // Ensures it covers the full height of the viewport
        }}
      >
        {/* Navigation Menu */}
        <Menu items={menuItems} />

        {/* Content Area with backdrop blur */}
        <div className="p-4 backdrop-blur-sm bg-black/50 min-h-screen">
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/map" element={<Map />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contentlibrary" element={<ContentLibrary />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

