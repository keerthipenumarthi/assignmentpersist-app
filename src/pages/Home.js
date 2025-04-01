import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const result = await axios.get('http://localhost:5000/api/content');
      setContent(result.data);
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>Welcome to the Social Causes Platform</h1>
      <div className="content-library">
        <h2>Content Library</h2>
        {content.map((item, index) => (
          <ContentCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;

