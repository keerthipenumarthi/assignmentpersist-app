import React, { useState } from 'react';

const ContentLibrary = () => {
  const books = [
    // Paid books
    {
      id: 1,
      title: 'Atomic Habits',
      category: 'Self-help',
      price: 17.99,
      image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Clean Code',
      category: 'Technology',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'The Lean Startup',
      category: 'Business',
      price: 24.99,
      image: 'https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg',
    },
    {
      id: 4,
      title: 'Vagabonding',
      category: 'Travel',
      price: 14.99,
      image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg',
    },
    {
      id: 5,
      title: 'Deep Work',
      category: 'Self-help',
      price: 19.99,
      image: 'https://m.media-amazon.com/images/I/61qWD8G0ACL._SL1500_.jpg',
    },
    {
      id: 6,
      title: 'The Art of War',
      category: 'Philosophy',
      price: 9.99,
      image: 'https://m.media-amazon.com/images/I/81p0T7PW1JL._SL1500_.jpg',
    },

    // Free books
    {
      id: 7,
      title: 'Pride and Prejudice',
      category: 'Classic Literature',
      price: 0.0,
      image: 'https://m.media-amazon.com/images/I/91HHqVg5yLL._SL1500_.jpg',
    },
    {
      id: 8,
      title: 'Moby-Dick',
      category: 'Classic Literature',
      price: 0.0,
      image: 'https://m.media-amazon.com/images/I/81a4kCNu8mL._SL1500_.jpg',
    },
    {
      id: 9,
      title: 'The Republic',
      category: 'Philosophy',
      price: 0.0,
      image: 'https://m.media-amazon.com/images/I/71+0g5e7v8L._SL1500_.jpg',
    },
    {
      id: 10,
      title: 'The Adventures of Sherlock Holmes',
      category: 'Mystery',
      price: 0.0,
      image: 'https://m.media-amazon.com/images/I/81OthjkJBuL._SL1500_.jpg',
    },
    {
      id: 11,
      title: 'Dracula',
      category: 'Horror',
      price: 0.0,
      image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._SL1500_.jpg',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const dummyContent = {
    7: `
      Chapter 1: It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
      However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.
      My dear Miss Bennet," said his lady to her daughter, "have you heard that Netherfield Park is let at last?"
      `,
    8: `
      Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.
      Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can.
      `,
    9: `
      The Republic by Plato explores justice, politics, and the ideal society. In this dialogue, Socrates explores the concept of justice, proposing that a just society is one in which individuals perform their designated roles. It includes discussions on the ideal city-state, the philosopher-king, the theory of forms, and the role of education in shaping a just society.
      One of the most famous ideas from the Republic is Plato's Allegory of the Cave, which illustrates the difference between the world of appearances and the world of reality.
      `,
    10: `
      The Adventures of Sherlock Holmes is a series of short stories written by Sir Arthur Conan Doyle, featuring the detective Sherlock Holmes and his loyal friend, Dr. Watson. Holmes uses his brilliant observation and deduction skills to solve complex cases that baffle the police. In this particular story, Holmes investigates the mystery of a woman who claims her life is in danger.
      `,
    11: `
      Dracula is a horror novel written by Bram Stoker, originally published in 1897. The story follows the character of Jonathan Harker, a young English solicitor, who travels to Transylvania to meet Count Dracula. Over time, Dracula's evil intentions and supernatural powers become apparent as he seeks to spread his curse to England. Themes of fear, superstition, and the battle between good and evil are prevalent throughout the novel.
      `,
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (book) => {
    if (!cart.find((item) => item.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // If a book is selected for reading
  if (selectedBook) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
        <button
          onClick={() => setSelectedBook(null)}
          style={{
            marginBottom: '1rem',
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          ⬅ Back to Library
        </button>
        <h2>📖 {selectedBook.title}</h2>
        <p style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>
          {dummyContent[selectedBook.id] || 'Content not available.'}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'black' }}>
        📚 Content Library Bookstore
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '2rem',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      {/* Book List */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.05)',
              textAlign: 'center',
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '1rem',
                borderRadius: '6px',
              }}
            />
            <h3 style={{ fontSize: '1.1rem', minHeight: '50px', color: 'black' }}>{book.title}</h3>
            <p style={{ color: 'black', marginBottom: '5px' }}>{book.category}</p>
            <p style={{ fontWeight: 'bold', color: 'black' }}>
              {book.price === 0 ? 'Free' : `$${book.price.toFixed(2)}`}
            </p>

            {book.price === 0 ? (
              <button
                onClick={() => setSelectedBook(book)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#27ae60',
                  color: 'white',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Read for Free
              </button>
            ) : (
              <>
                <button
                  onClick={() => addToCart(book)}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() =>
                    alert(`Proceeding to buy "${book.title}" for $${book.price.toFixed(2)}`)
                  }
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#e67e22',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Buy Now
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Cart */}
      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          color: 'black',
        }}
      >
        <h2>🛒 Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>No books in your cart yet.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <span>
                    {item.title} - {item.price === 0 ? 'Free' : `$${item.price.toFixed(2)}`}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'black',
                      cursor: 'pointer',
                      fontSize: '16px',
                    }}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
              Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentLibrary;



























