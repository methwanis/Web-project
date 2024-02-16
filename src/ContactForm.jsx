// ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.includes("@")) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    if (value.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validations
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!email.includes("@")) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }

    if (!nameError && !emailError && !messageError) {
      setMessage("");
      setEmail("");
      setName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name"> Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className={`form-input ${nameError ? "error" : ""}`}
            aria-label="Your Name"
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={`form-input ${emailError ? "error" : ""}`}
            aria-label="Your Email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message"> Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            className={`form-input ${messageError ? "error" : ""}`}
            aria-label="Your Message"
          />
          {messageError && (
            <span className="error-message">{messageError}</span>
          )}
        </div>

        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
