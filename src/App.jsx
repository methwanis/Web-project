import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import Home from "./Home";
import "./App.css";
import About from "./About";
import ImageGallery from "./ImageGallery";
import Testimonials from "./Testimonals";
import Accordion from "./Accordion";
import ServiceForm from "./ServiceForm";
import ContactForm from "./ContactForm";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="app">
      <Header handlePageChange={handlePageChange} />
      {currentPage === "home" && (
        <Wrapper Component={Home} handlePageChange={handlePageChange} />
      )}
      {currentPage === "about" && <Wrapper Component={About} />}
      {currentPage === "gallery" && <Wrapper Component={ImageGallery} />}
      {currentPage === "testimonals" && <Wrapper Component={Testimonials} />}
      {currentPage === "petcare" && <Wrapper Component={Accordion} />}
      {currentPage === "services" && <Wrapper Component={ServiceForm} />}
      {currentPage === "aboutus" && <Wrapper Component={About} />}
      {currentPage === "contact" && <Wrapper Component={ContactForm} />}

      <Footer handlePageChange={handlePageChange} />
    </div>
  );
};

export default App;
