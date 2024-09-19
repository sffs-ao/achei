import React from "react";
import "./CashCard.css";

export default function CashCard({ capital, text, icon, clr, type }) {
  return (
    <div className="cash_card bg-light">
      <div className="cash_card_left">
        <div className="capital_value">{capital}</div>
        <div className="card_text">{text}</div>
      </div>
      <div className="cash_card_right">
        <i className={`bi ${icon} ${type}`} style={{ color: `${clr}` }}></i>
      </div>
    </div>
  );
}
