import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-page">
      <h2>Who we are?</h2>
      <section className="mission-section">
        <div className="image-container">
          <img
            src={"/Value1.jpg"}
            alt="A photograph featuring the words Be Kind written in elegant script on a background of soft, pastel colors."
          />
        </div>
        <div className="text-container">
          <h3>Our Mission</h3>
          <p>
            Elevating the lives of our furry friends through dedicated care and
            love. At Pawsome Care, we believe in creating a world where every
            pet experiences joy, health, and a lasting connection with their
            human companions.
          </p>
        </div>
      </section>

      <section className="goals-section">
        <div className="image-container">
          <img
            src={"/Value2.jpg"}
            alt="An image displaying the message Help Other in bold, capital letters against a backdrop of a diverse group of people engaged in supportive activities."
          />
        </div>
        <div className="text-container">
          <h3>Our Goals</h3>
          <p>
            We are on a mission to simplify pet parenting. Our goals include
            providing personalized health tracking, timely veterinary reminders,
            and a trusted network of vet clinics. Together, we strive to build a
            community devoted to the well-being of our beloved pets.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="image-container">
          <img
            src={"/Value3.jpg"}
            alt="A visual composition showcasing the words Speak Truth written in a strong and assertive font, set against a background that conveys a sense of honesty and transparency."
          />
        </div>
        <div className="text-container">
          <h3>Our Values</h3>
          <p>
            Rooted in compassion, integrity, and innovation, our values define
            us. We cherish the joy and companionship pets bring and uphold the
            highest standards of care. Join us in creating a community dedicated
            to the happiness and health of our beloved companions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
