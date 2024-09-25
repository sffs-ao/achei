import React from "react";
import CashCard from "../Cash/CashCard";

export default function Report() {
  return (
    <section className="section-area">
      <div className="section-container">
        <div className="title-h1">Área dos Relatórios</div>
        <div className="address">
          <span>Dashboard</span>
          <i className="bi bi-chevron-right"></i>
          <span className="locate">Relatórios</span>
        </div>
      </div>
      <div className="space-top card_content">
        <CashCard
          text="Capital Inicial"
          capital="0,00"
          icon="bi-cash-stack"
          clr="rgb(72,211,146)"
        />
      </div>
    </section>
  );
}
