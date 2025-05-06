import React from "react";

const StoryCard = ({ title, image, description }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg h-80">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
      <div className="absolute bottom-0 p-6 text-white z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
