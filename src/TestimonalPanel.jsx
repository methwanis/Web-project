import React from "react";

const TestimonialPanel = ({ userImage, testimonial, alt }) => {
  return (
    <div className="testimonial-panel">
      <img className="user-image" src={userImage} alt={alt} />
      <div className="testimonial-text">
        <p>{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialPanel;
