
import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="accordion-content">{answer}</p>}
    </div>
  );
};

export default AccordionItem;
