import React from "react";
import "./Footer.css";
import Button from "./Button";

const Footer = ({ handlePageChange }) => {
  const handleButtonClick = (component) => {
    handlePageChange(component);
  };
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <Button type="button" onClick={() => handleButtonClick("aboutus")}>
            About
          </Button>
        </li>
        <li className="footer__item">
          <Button type="button" onClick={() => handleButtonClick("contact")}>
            Contact Us
          </Button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
