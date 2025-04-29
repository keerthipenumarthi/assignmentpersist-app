import React, { useState, useEffect } from 'react';

const Share = () => {
  const [form, setForm] = useState({ name: '', story: '' });
  const [submitted, setSubmitted] = useState(false);
  const [stories, setStories] = useState([]);

  // Load saved stories from localStorage
  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem('userStories')) || [];
    setStories(storedStories);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStory = {
      name: form.name,
      story: form.story,
      timestamp: new Date().toLocaleString(),
    };

    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);
    localStorage.setItem('userStories', JSON.stringify(updatedStories));

    setSubmitted(true);
    setForm({ name: '', story: '' });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white/90 text-gray-800 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-800">Share Your Passion Story</h2>
        <p className="text-center text-lg mb-6">
          Inspire others by telling us how you discovered your passion.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g., Alex"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your Story</label>
            <textarea
              name="story"
              value={form.story}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell us how you found your passion..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Submit Story
          </button>

          {submitted && (
            <div className="mt-4 text-green-700 font-semibold text-center">
              ✅ Thanks for sharing your story!
            </div>
          )}
        </form>
      </div>

      {/* Shared Stories Feed */}
      {stories.length > 0 && (
        <div className="w-full max-w-2xl mt-10 bg-white/80 p-6 rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-center text-indigo-700">🌟 Community Stories</h3>
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <p className="text-lg font-semibold">{story.name}</p>
              <p className="text-sm text-gray-500 mb-2">{story.timestamp}</p>
              <p className="text-gray-800">{story.story}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Share;
