import React from "react";
import "./SolutionCard.css";

type SolutionCardProps = {
  title: string;
  image_url: string;
  text: string;
};

export default function SolutionCard({ title, image_url, text }: SolutionCardProps) {
  return (
    <div className="solution-card">
      <div className="solution-left">
        <h2>{title}</h2>
        <p className="solution-text">{text}</p>
        <button>
          <a href="#">
            <span>Fazer o Cadastro</span>
            <i className="bi bi-chevron-right"></i>
          </a>
        </button>
      </div>
      <div className="image-soluction">
        <img src={image_url} alt={title} />
      </div>
    </div>
  );
}
