import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-slide-content">{slide}</div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        Next
      </button>
      <p className="current-slide">Current Slide: {currentSlide + 1}</p>
    </div>
  );
};

export default Carousel;
