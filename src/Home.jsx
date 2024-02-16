import React from "react";
import Carousel from "./Carousel";
import "./Home.css";

const Home = ({ handlePageChange }) => {
  const slides = [
    <img
      src="/Carousel2.jpg"
      alt="Dog portrait: Brown and white fur, friendly expression"
    />,
    <img
      src="/Carousel3.jpg"
      alt="Cat portrait: Gray tabby cat with green eyes."
    />,
    <img src="/Carousel4.jpg" alt="Cat portrait: Brown and white fur cat." />,
    <img
      src="/Carousel1.jpg"
      alt="Dog portrait: Brown dog with a yellow hoodie"
    />,
  ];

  return (
    <div className="home-container">
      <div className="home-section carousel-section">
        <Carousel slides={slides} />
      </div>
      <div className="home-section info-section">
        <div className="info-container">
          <h2>Welcome to Pawsome Care</h2>
          <p>
            Introducing Pawsome Care – Your Trusted Companion in Pet Well-being!
            🐾 At Pawsome Care, we understand the profound bond you share with
            your four-legged friends, and we're here to enhance that connection
            by providing top-notch care for both your furry pals – be they cats
            or dogs. Our comprehensive pet care app is designed to simplify and
            elevate every aspect of your pet parenting journey. From
            personalized health tracking and timely vaccination reminders to a
            curated network of vet clinics and expert advice, PawsitiveCare is
            your one-stop solution for ensuring your pets live their happiest,
            healthiest lives.
          </p>
          <p>
            With a user-friendly interface and a commitment to the well-being of
            all pets, PawsitiveCare strives to make pet care effortless and
            enjoyable. Explore the app to discover a world of features tailored
            to your pet's needs, and embark on a journey towards Pawsome Care –
            where your pet's wellness is our priority. Download PawsitiveCare
            today and join a community of pet lovers dedicated to fostering a
            lifetime of joy and health for their beloved companions. Because
            every pawprint deserves a path of happiness! 🐾
          </p>
        </div>
        <div className="cta-container">
          <button
            className="cta-button"
            onClick={() => handlePageChange("services")}
          >
            Book Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
