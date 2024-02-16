import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ onClose, onUsernameChange }) => {
  const [newUsername, setNewUsername] = useState("");

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSaveClick = () => {
    onUsernameChange(newUsername);
  };

  return (
    <div className="modal-overlay">
      <dialog className="modal" open>
        <h2>Change Username</h2>
        <input
          type="text"
          value={newUsername}
          onChange={handleInputChange}
          placeholder="Enter new username"
        />
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
