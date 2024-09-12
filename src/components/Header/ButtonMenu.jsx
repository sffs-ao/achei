import React, { useState } from "react";
import "./ButtonMenu.css";

const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Modifica o estato do botão
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`menu-button ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </button>
  );
};

export default ButtonMenu;
