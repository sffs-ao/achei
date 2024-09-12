import React from "react";
import ToggleButton from "./ToggleButton";
import "./DarkMode.css";

export default function DarkMode() {
  return (
    <div className="dark-mode me-3">
      <i className="bi bi-brightness-high-fill"></i>
      <ToggleButton id="switch-mode" />
      <i className="bi bi-moon-fill"></i>
    </div>
  );
}
