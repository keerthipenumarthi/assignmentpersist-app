import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Interactive Maps',
    description: 'Navigate cities, landscapes, and borders with precision and ease.',
  },
  {
    title: 'Global Chat',
    description: 'Engage in real-time discussions with users worldwide.',
  },
  {
    title: 'Geo Quizzes',
    description: 'Test your knowledge with curated geographic and cultural quizzes.',
  },
  {
    title: 'Cross-Platform Access',
    description: 'Seamlessly access Explorer on mobile, tablet, or desktop.',
  },
  {
    title: 'Optimized Performance',
    description: 'Built for speed, responsiveness, and stability.',
  },
  {
    title: 'Free & Open',
    description: 'No subscriptions, no limitations — just exploration.',
  },
];

const reasons = [
  'Live, interactive experience',
  'No account or login required',
  'Built for learners, educators, and explorers',
  'Compatible with all major devices and browsers',
];

const IntroPage = () => {
  const navigate = useNavigate();
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (visited) setHasVisited(true);
  }, []);

  const handleEnterApp = () => {
    localStorage.setItem('hasVisited', 'true');
    navigate('/home');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white font-sans overflow-x-hidden p-6">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center pt-16 pb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Explorer: Navigate, Connect, Learn.
        </h1>
        {hasVisited && (
          <p className="text-green-400 text-md font-medium mb-2">
            Welcome back.
          </p>
        )}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Discover detailed maps, participate in global conversations, and enhance your world knowledge — all in one streamlined platform.
        </p>
        <button
          onClick={handleEnterApp}
          className="bg-white text-indigo-800 font-semibold py-3 px-8 rounded-full transition hover:scale-105 shadow-md"
        >
          Get Started
        </button>
      </div>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition text-white"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Reasons Section */}
      <section className="max-w-5xl mx-auto mt-20 bg-white/5 border border-indigo-700 rounded-xl p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-100">Why Explorer?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-md">
          {reasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-400">✔</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Preview Highlights */}
      <section className="max-w-6xl mx-auto mt-20 flex flex-col sm:flex-row justify-between gap-8 text-center">
        <div className="flex-1 bg-indigo-800/60 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-cyan-200 mb-2">Map Explorer</h4>
          <p className="text-gray-300 text-sm">Search, explore, and visualize geographic data in real time.</p>
        </div>
        <div className="flex-1 bg-purple-800/60 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-green-200 mb-2">Live Chat</h4>
          <p className="text-gray-300 text-sm">Converse with a global audience and share insights.</p>
        </div>
        <div className="flex-1 bg-blue-800/60 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-pink-200 mb-2">Geo Quiz</h4>
          <p className="text-gray-300 text-sm">Assess and improve your geography skills with engaging challenges.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 mt-20 pb-6">
        <p>© {new Date().getFullYear()} Explorer — Created by Keerthi</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Twitter
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default IntroPage;


