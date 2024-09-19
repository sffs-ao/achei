import React from "react";
import "./Action.css";

export default function Action() {
  return (
    <section className="section-area">
      <div className="section-container">
        <div className="title-h1">Área de Movimentações</div>
        <div className="address">
          <span>Dashboard</span>
          <i className="bi bi-chevron-right"></i>
          <span>Movimentos</span>
          <i className="bi bi-chevron-right"></i>
          <span className="locate">Novo Movimento</span>
        </div>
      </div>
      <div className="section-container space-top form-moviment">
        <div className="title-h1 title-general">Preencha o Formulário</div>
        <form>
          <div className="form-group">
            <label htmlFor="">Título</label>
            <input type="text" name="" id="" placeholder="Exemplo de nome" />
          </div>
          <div className="form-group moviment">
            <label htmlFor="moviment-select">Movimento</label>
            <select name="" id="moviment-select">
              <option value="" disabled>
                Escolha o tipo de movimento
              </option>
              <option value="0">Saída</option>
              <option value="1">Entrada</option>
            </select>
          </div>
          <button className="btn btn-primary">Submeter</button>
        </form>
      </div>
    </section>
  );
}
