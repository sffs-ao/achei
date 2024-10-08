import React from "react";
import "./Slogan.css";

export default function Slogan() {
  return (
    <div id="slogan-area">
      <div className="up-content">
        <figure>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Pessoa 1"
          />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Pessoa 2"
          />
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Pessoa 3"
          />
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Pessoa 4"
          />
          <img
            src="https://randomuser.me/api/portraits/women/52.jpg"
            alt="Pessoa 5"
          />
        </figure>
        <div className="banner-text">
          Se junte aos alunos que aprendem todos os dias com Achei
        </div>
      </div>

      <div className="slogan">
        Sua jornada de <span>aprendizado contínuo</span> e enriquecedor.
      </div>
    </div>
  );
}
