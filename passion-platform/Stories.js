import React from 'react';

// Example books data related to different passions and study fields
const booksData = {
  law: [
    {
      title: 'The Law of Torts',
      image: 'https://link-to-image.com/law-book1.jpg',
      price: '$29.99',
      link: 'https://link-to-buy.com/law-book1',
    },
    {
      title: 'Constitutional Law',
      image: 'https://link-to-image.com/law-book2.jpg',
      price: '$35.50',
      link: 'https://link-to-buy.com/law-book2',
    },
  ],
  doctor: [
    {
      title: 'Medical Anatomy Guide',
      image: 'https://link-to-image.com/doctor-book1.jpg',
      price: '$40.99',
      link: 'https://link-to-buy.com/doctor-book1',
    },
    {
      title: 'Internal Medicine Essentials',
      image: 'https://link-to-image.com/doctor-book2.jpg',
      price: '$55.00',
      link: 'https://link-to-buy.com/doctor-book2',
    },
  ],
  engineer: [
    {
      title: 'Engineering Mechanics',
      image: 'https://link-to-image.com/engineer-book1.jpg',
      price: '$49.99',
      link: 'https://link-to-buy.com/engineer-book1',
    },
    {
      title: 'Structural Engineering Basics',
      image: 'https://link-to-image.com/engineer-book2.jpg',
      price: '$39.00',
      link: 'https://link-to-buy.com/engineer-book2',
    },
  ],
  // Add more categories like farmer, music, chef, etc.
};

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-xl font-bold text-gray-900">{book.price}</p>
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-500 hover:text-blue-700"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">Explore Books by Passion & Study Fields</h1>

      <div className="space-y-12">
        {Object.keys(booksData).map((field) => (
          <div key={field}>
            <h2 className="text-3xl text-center text-white mb-6">{field.charAt(0).toUpperCase() + field.slice(1)} Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {booksData[field].map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;



