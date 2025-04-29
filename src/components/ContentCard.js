// src/components/ContentCard.js
import React from 'react';

const ContentCard = ({ title, description }) => {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default ContentCard;