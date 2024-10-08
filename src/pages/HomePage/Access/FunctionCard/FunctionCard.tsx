import React from "react";
import "./FunctionCard.css";

export default function FunctionCard({ titulo, text, icon }) {
  return (
    <div className="card-funcionamento">
      <p className="icon-container">
        <i className={`bi ${icon} icon-funcionamento`}></i>
      </p>
      <p className="funcionamento-title">{titulo}</p>
      <p className="funcionamento-text">{text}</p>
    </div>
  );
}
