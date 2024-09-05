import React, { useState } from "react";
import "../css/components/ToggleButton.css"; // Importa o CSS para o botão toggle

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={`toggle-button ${isToggled ? "toggled" : ""}`}
      onClick={handleToggle}
    >
      <span className="slider"></span>
    </button>
  );
};

export default ToggleButton;
