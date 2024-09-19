import React from "react";
import CashCard from "./CashCard";
import "./Cash.css";

export default function Cash() {
  return (
    <section className="section-area">
      <div className="card_content">
        <CashCard
          text="Capital Inicial"
          capital="0,00"
          icon="bi-cash-stack"
          clr="rgb(72,211,146)"
        />
        <CashCard
          text="Entrada"
          capital="0,00"
          icon="bi-chevron-double-up"
          clr="rgb(26,37,205)"
        />
        <CashCard
          text="Saida"
          capital="0,00"
          icon="bi-chevron-double-down"
          clr="rgb(240,33,61)"
        />
        <CashCard
          text="Capital Final"
          capital="0,00"
          icon="bi-cash-coin"
          clr="rgb(59,205,53)"
        />
      </div>
      <div className="section-container">
        <div className="title-h1">Lista - Caixa</div>
        <div className="address">
          <span>Dashboard</span>
          <i className="bi bi-chevron-right"></i>
          <span className="locate">Lista de Caixa</span>
        </div>
      </div>
      <div className=" get-date">
        <div className="date-content">
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </div>
        <button className="btn btn-primary">Buscar</button>
      </div>
      <div className="section-container cash-table">
        <div className="header-actions">
          <div className="top-container">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-input"
              id="search-cash"
              /* value={searchTerm}
              onChange={handleSearchChange} */
            />
          </div>
        </div>
        <table className="table-content">
          <thead>
            <tr>
              <th>Data</th>
              <th>Ícone</th>
              <th>Montante</th>
              <th>Título</th>
              <th>Estado</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="text-center">
                Sem Valores Disponíveis
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
