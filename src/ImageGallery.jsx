import React, { useState } from "react";
import images from "./images"; 
import "./ImageGallery.css";

const ImageGallery = () => {
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (animalType) => {
    setFilter(animalType);
  };

  const clearFilter = () => {
    setFilter(null);
  };

  return (
    <div className="image-gallery">
      <h2>Gallery</h2>
      <div className="filter-section">
        <button
          className="filter-btn"
          onClick={() => handleFilterChange("cat")}
        >
          Show Cats
        </button>
        <button
          className="filter-btn"
          onClick={() => handleFilterChange("dog")}
        >
          Show Dogs
        </button>
        <button className="filter-btn" onClick={clearFilter}>
          Show All
        </button>
      </div>
      <div className="gallery-section">
        {images
          .filter((image) => !filter || image.animalType === filter)
          .map((image, index) => (
            <img className = 'gallery-item' key={index} src={image.src} alt={image.alt} />
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
