// src/pages/Home.jsx
import React from "react";
import CashCard from "../../Finance/Cash/CashCard";
import MyStyledLineChart from "../../Elements/Graph";

export default function Home() {
  return (
    <div className="w-full pb-8">
     <section className="section-area">
      <div className="section-container">
      <div className="card_content">
        <CashCard
          text="Estudantes"
          capital="0,00"
          icon="bi-cash-stack"
          clr="rgb(72,211,146)"
        />
        <CashCard
          text="Formadores"
          capital="50"
          icon="bi-chevron-double-up"
          clr="rgb(26,37,205)"
        />
        <CashCard
          text="Turma"
          capital="5"
          icon="bi-chevron-double-down"
          clr="rgb(240,33,61)"
        />
        <CashCard
          text="Saldo Total"
          capital="180000,00"
          icon="bi-cash-coin"
          clr="rgb(59,205,53)"
        />
      </div>
      </div>
    </section>

    <section className="section-area">
      <h1 className="font-bold">Faturação</h1>
    <div className="graph bg-white p-8 rounded-lg">
      <MyStyledLineChart/>
      </div>
    </section>

    </div>
  );
}
