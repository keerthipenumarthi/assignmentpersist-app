// src/components/Home.js
// home.js
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg">Learn. Act. Inspire. Empower your community today.</p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10">What You Can Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Explore Causes</h3>
            <p>Browse our content library and discover issues that matter to you.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Use Interactive Tools</h3>
            <p>Find actions, events, and local organizations using our map and tools.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Join the Movement</h3>
            <p>Take action and track your impact alongside a growing community.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

