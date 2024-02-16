import React, { useState } from "react";
import Navbar from "./Navbar"; 
import Modal from "./Modal";
import "./Header.css";

const Header = ({ handlePageChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("John Doe");

  const handleUsernameClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      {/* Skip link to main content */}
      <a href="#main-wrapper" className="skip-link">
        Skip to main content
      </a>
      <div className="header__container">
        <div className="header__top">
          <div className="header__left">
            <a href="/">
              <img
                className="header__logo"
                src="/logo.jpg"
                alt="Logo"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange("home");
                }}
              />
            </a>
            <h1 className="header__title">PAWSOME CARE</h1>
          </div>
          <div className="header__right">
            <button className="header__username" onClick={handleUsernameClick}>
              {username}
            </button>
          </div>
        </div>
        <div className="header__bottom">
          <Navbar handlePageChange={handlePageChange} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          onUsernameChange={handleUsernameChange}
        />
      )}
    </header>
  );
};

export default Header;
