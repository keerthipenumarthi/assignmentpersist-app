import React, { useState } from 'react';

const videoData = [
  {
    id: 1,
    title: 'The Power of Belief – Mindset and Success',
    description: 'Discover how mindset shapes your potential.',
    embedUrl: 'https://www.youtube.com/embed/5MgBikgcWnY?autoplay=1&mute=1',
    tags: ['mindset', 'success', 'motivation'],
  },
  {
    id: 2,
    title: 'How to Find Your Purpose',
    description: 'A motivational talk about discovering your life passion.',
    embedUrl: 'https://www.youtube.com/embed/M1CHPnZfFmU?autoplay=1&mute=1',
    tags: ['purpose', 'career', 'passion', 'life'],
  },
  {
    id: 3,
    title: 'Start With Why – Simon Sinek',
    description: 'How leaders and entrepreneurs inspire action.',
    embedUrl: 'https://www.youtube.com/embed/u4ZoJKF_VuA?autoplay=1&mute=1',
    tags: ['leadership', 'entrepreneur', 'business'],
  },
  {
    id: 4,
    title: 'Drawing as Therapy',
    description: 'Discover how drawing improves mental wellness and creativity.',
    embedUrl: 'https://www.youtube.com/embed/kICLxb5sYk4?autoplay=1&mute=1',
    tags: ['drawing', 'art', 'creativity', 'therapy'],
  },
  {
    id: 5,
    title: 'Becoming a Travel Vlogger',
    description: 'Turn your love of travel into a storytelling career.',
    embedUrl: 'https://www.youtube.com/embed/I2wURDqiXdM?autoplay=1&mute=1',
    tags: ['travel', 'vlog', 'adventure', 'explore'],
  },
  {
    id: 6,
    title: 'Chef’s Table – Massimo Bottura',
    description: 'Inside the journey of one of the world’s top chefs.',
    embedUrl: 'https://www.youtube.com/embed/9A6aPFzjT5k?autoplay=1&mute=1',
    tags: ['chef', 'food', 'cooking', 'restaurant'],
  },
  {
    id: 7,
    title: 'Agriculture Technology & Smart Farming',
    description: 'How modern engineering is revolutionizing farming.',
    embedUrl: 'https://www.youtube.com/embed/IL7O8kz0dUo?autoplay=1&mute=1',
    tags: ['agriculture', 'farming', 'technology', 'rural'],
  },
  {
    id: 8,
    title: 'Day in the Life of an Engineer',
    description: 'Explore what engineers do and how they impact our world.',
    embedUrl: 'https://www.youtube.com/embed/NqO7IYN26hI?autoplay=1&mute=1',
    tags: ['engineering', 'career', 'design', 'mechanical'],
  },
  {
    id: 9,
    title: 'Creative Cooking for Beginners',
    description: 'Learn simple and tasty meals you can try at home.',
    embedUrl: 'https://www.youtube.com/embed/YbYyz8e3zZ8?autoplay=1&mute=1',
    tags: ['cooking', 'kitchen', 'beginner', 'chef'],
  },
  {
    id: 10,
    title: 'The Power of Art in Society',
    description: 'Explore how artists influence social change.',
    embedUrl: 'https://www.youtube.com/embed/2iNVtDdGhd8?autoplay=1&mute=1',
    tags: ['art', 'creativity', 'painting', 'expression'],
  },
];

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videoData.filter((video) => {
    const term = searchTerm.toLowerCase();
    return (
      video.title.toLowerCase().includes(term) ||
      video.description.toLowerCase().includes(term) ||
      video.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Inspiring Videos</h2>
      <p style={styles.subheading}>
        Search your passion: drawing, chef, travel, agriculture, engineering...
      </p>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search by title, tag, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.videoGrid}>
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video.id} style={styles.card}>
              <iframe
                width="100%"
                height="200"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={styles.video}
              />
              <h3 style={styles.videoTitle}>{video.title}</h3>
              <p style={styles.videoDesc}>{video.description}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#aaa' }}>No videos found.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#111',
    color: '#fff',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#ccc',
    textAlign: 'center',
  },
  searchInput: {
    padding: '0.6rem 1rem',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '1rem',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  },
  video: {
    borderRadius: '6px',
  },
  videoTitle: {
    fontSize: '1.2rem',
    margin: '1rem 0 0.5rem',
  },
  videoDesc: {
    fontSize: '0.95rem',
    color: '#bbb',
  },
};

export default Videos;




