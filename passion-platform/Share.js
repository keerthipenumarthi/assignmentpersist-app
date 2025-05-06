import React, { useState } from 'react';

const Share = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Sample books data
  const books = [
    { title: 'The Art Spirit', category: 'Arts', price: '$15.99', link: 'https://www.amazon.com/dp/0465002633', image: 'https://m.media-amazon.com/images/I/81wI4V2WQOL._SL1500_.jpg' },
    { title: 'Clean Code', category: 'Technology', price: '$34.95', link: 'https://www.amazon.com/dp/0132350882', image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg' },
    { title: 'The Lean Farm', category: 'Farming', price: '$21.00', link: 'https://www.amazon.com/dp/1603585923', image: 'https://m.media-amazon.com/images/I/81HxWjK+Z5L._SL1500_.jpg' },
    { title: 'Vagabonding', category: 'Traveling', price: '$12.99', link: 'https://www.amazon.com/dp/0812992180', image: 'https://m.media-amazon.com/images/I/91LEwYUwCfL._SL1500_.jpg' },
    { title: 'Law 101', category: 'Law', price: '$18.00', link: 'https://www.amazon.com/dp/0190866322', image: 'https://m.media-amazon.com/images/I/71GmttJHxML._SL1500_.jpg' },
    { title: 'Chef’s Table', category: 'Chef', price: '$25.00', link: 'https://www.amazon.com/dp/1234567890', image: 'https://m.media-amazon.com/images/I/71tY3JGHJmL._SL1500_.jpg' },
    { title: 'Engineering 101', category: 'Engineering', price: '$20.00', link: 'https://www.amazon.com/dp/9876543210', image: 'https://m.media-amazon.com/images/I/71FGJmG4jrL._SL1500_.jpg' },
  ];

  // Handle search logic
  const handleSearch = () => {
    const result = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(result);
  };

  // Submit story handler
  const handleSubmitStory = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">

      {/* Search Bar */}
      <div className="w-full max-w-3xl mb-6">
        <div className="flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search for books or categories..."
            className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-200 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>

      {/* Book List */}
      {filteredBooks.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {filteredBooks.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 w-64">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{book.category}</p>
              <p className="font-semibold text-gray-700 mb-4">{book.price}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition duration-200"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredBooks.length === 0 && searchQuery !== '' && (
        <p className="text-center text-lg text-gray-600 mt-4">No books found matching your search.</p>
      )}

      {/* Share Story Form */}
      <footer className="mt-10 w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">Share Your Passion Story</h2>
        <p className="text-center text-lg mb-6">Inspire others by telling us how you discovered your passion.</p>

        <form onSubmit={handleSubmitStory} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g., Alex"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your Story</label>
            <textarea
              name="story"
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
      </footer>
    </div>
  );
};

export default Share;


















