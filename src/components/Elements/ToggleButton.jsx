import React, { useState } from "react";
import "./ToggleButton.css"; // Importa o CSS para o botão toggle

const ToggleButton = ({ id }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={`toggle-button ${isToggled ? "toggled" : ""}`}
      id={id}
      onClick={handleToggle}
    >
      <span className="slider"></span>
    </button>
  );
};

export default ToggleButton;
