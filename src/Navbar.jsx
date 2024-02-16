import React, { useState } from "react";
import Button from "./Button"; 
import "./Navbar.css";

const Navbar = ({ handlePageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = (component) => {
    handlePageChange(component);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Button type="button" onClick={() => handleButtonClick("home")}>
            HOME
          </Button>
        </li>
        <li className="navbar__item">
          <Button type="button" onClick={() => handleButtonClick("gallery")}>
            GALLERY
          </Button>
        </li>
        <li className="navbar__item">
          <Button type="button" onClick={() => handleButtonClick("services")}>
            SERVICES
          </Button>
        </li>
        <li className="navbar__item">
          <Button type="button" onClick={() => handleButtonClick("testimonals")}>
            TESTIMONALS
          </Button>
        </li>
        <li className="navbar__item">
          <Button type="button" onClick={() => handleButtonClick("petcare")}>
            PET CARE
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
