// Testimonials.js
import React from "react";
import TestimonialPanel from "./TestimonalPanel";
import "./Testimonals.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      userImage: "/User1.jpg", 
      testimonial:
        "Pawsome Care has been a lifesaver for my dog, Max. The personalized care and attention to detail provided by their team truly stand out. From regular health check-ups to grooming services, PawCare has exceeded my expectations. Max is healthier and happier, and I couldn't be more grateful for their exceptional service!",
        alt: "Portrait of a confident young man with short dark hair, wearing a professional suit and tie",
    },
    {
      id: 2,
      userImage: "/User2.jpg",
      testimonial:
        "I can't express enough how satisfied I am with Pawsome Care's pet care services. The team goes above and beyond to ensure the well-being of our furry friends. The convenience of scheduling appointments through the app and the friendly staff make the entire experience seamless. My cat, Whiskers, always comes back from grooming looking fabulous",
        alt: "Smiling young woman with long brown hair, wearing a stylish blouse and earrings.",
    },
    {
      id: 3,
      userImage: "/User3.jpg",
      testimonial:
        "Pawsome Care has made pet parenting a breeze for me. The app's features, including vaccination reminders and a network of trusted vet clinics, have been invaluable. The team's genuine love for animals reflects in the quality of care they provide. I highly recommend PawCare to every pet owner seeking reliable and compassionate services.",
        alt: "Professional headshot of a mature woman with a warm smile, dressed in business attire.",
    },
    {
      id: 4,
      userImage: "/User4.jpg",
      testimonial:
        "Choosing Pawsome Care was one of the best decisions I made for my dog, Luna. The comprehensive health tracking feature has been instrumental in monitoring Luna's health. The groomers are skilled and attentive, and Luna always comes back looking and feeling great. PawCare has become an indispensable part of our pet care routine.",
        alt: "Close-up of a friendly middle-aged man with glasses and a beard, dressed in casual attire.",
    },

    
  ];

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-panels">
        {testimonialsData.map((testimonial) => (
          <TestimonialPanel key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
