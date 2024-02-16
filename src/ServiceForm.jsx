// ServiceForm.js
import React, { useState } from "react";
import "./ServiceForm.css";

const ServiceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("Cat Bath"); // Default service selection
  const [cardDetails, setCardDetails] = useState("");
  const [address, setAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [sameAddress, setSameAddress] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cardDetailsError, setCardDetailsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [billingAddressError, setBillingAddressError] = useState("");
  const [additionalInfoError, setAdditionalInfoError] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleCardChange = (e) => {
    const value = e.target.value;
    setCardDetails(value);
    if (value.trim() === "") {
      setCardDetailsError("Invalid Card Details");
    } else {
      setCardDetailsError("");
    }
  };

  const handleCheckboxChange = (e) => {
    setSameAddress(e.target.checked);

    // If the checkbox is checked, populate billing address with shipping address
    if (e.target.checked) {
      setBillingAddress(address);
      setBillingAddressError("");
    } else {
      // If the checkbox is unchecked, clear the billing address
      setBillingAddress("");
    }
  };

  const handleAddChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    if (value.trim() === "") {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  };

  const handleBillingAddChange = (e) => {
    const value = e.target.value;
    setBillingAddress(value);
    if (value.trim() === "") {
      setBillingAddressError("Billing Address required");
    } else {
      setBillingAddressError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic name validation
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    // Basic email validation
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    // Mandatory card details validation
    if (cardDetails.trim() === "") {
      setCardDetailsError("Card details are mandatory");
    } else {
      setCardDetailsError("");
    }

    // Address validation
    if (address.trim() === "") {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }

    // Billing Address validation if it's different
    if (billingAddress.trim() === "") {
      setBillingAddressError("Billing address is required");
    } else {
      setBillingAddressError("");
    }

    if (
      !nameError &&
      !emailError &&
      !cardDetailsError &&
      !addressError &&
      !billingAddressError
    ) {
      setName("");
      setEmail("");
      setSelectedService("Cat Bath");
      setCardDetails("");
      setAddress("");
      setBillingAddress("");
      setSameAddress(false);
      setAdditionalInfo("");
    }
  };

  return (
    <div className="service-form">
      <h2>Service Request</h2>
      <form onSubmit={handleSubmit} aria-labelledby="serviceFormHeading">
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              aria-label="Your Name"
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>
          <div className="form-column">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              aria-label="Your Email"
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="selectedService">Select a Service:</label>
            <select
              id="selectedService"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              aria-label="Select a Service"
            >
              <option value="Cat Bath">Cat Bath</option>
              <option value="Dog Bath">Dog Bath</option>
            </select>
          </div>
          <div className="form-column">
            <label htmlFor="cardDetails">Card Details:</label>
            <input
              type="text"
              id="cardDetails"
              value={cardDetails}
              onChange={handleCardChange}
              aria-label="Card Details"
            />
            {cardDetailsError && <p className="error">{cardDetailsError}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={handleAddChange}
              aria-label="Your Address"
            ></textarea>
            {addressError && <p className="error">{addressError}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="billingAddress">Billing Address:</label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="sameAddress"
                checked={sameAddress}
                onChange={(e) => handleCheckboxChange(e)}
                aria-label="Same as Address Checkbox"
              />
              <label htmlFor="sameAddress">Same as Address</label>
            </div>
            <textarea
              id="billingAddress"
              value={billingAddress}
              onChange={handleBillingAddChange}
              disabled={sameAddress}
              aria-label="Billing Address"
            ></textarea>
            {billingAddressError && (
              <p className="error">{billingAddressError}</p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              aria-label="Additional Information"
            ></textarea>
            {additionalInfoError && (
              <p className="error">{additionalInfoError}</p>
            )}
          </div>
        </div>

        <button type="submit" aria-label="Submit Button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
