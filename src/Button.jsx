import React from "react";

const Button = ({ type, onClick, children }) => {
  const buttonTypes = ["button", "submit", "link"];

  if (!buttonTypes.includes(type)) {
    console.error('Invalid button type. Use "button", "submit", or "link".');
    return null;
  }

  if (type === "link") {
    return (
      <button className="button" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
