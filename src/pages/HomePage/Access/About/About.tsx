import React from "react";
import "./About.css";

type AboutProps = {
    icon: string;
    text: string;
    title: string;
  };
  export default function About({ icon, text, title }: AboutProps) {
  return (
    <div className="about-content">
      <p>
        <i className={`bi ${icon}`}></i>
      </p>
      <h4>{title}</h4>
      <p className="about-text">{text}</p>
    </div>
  );
}
