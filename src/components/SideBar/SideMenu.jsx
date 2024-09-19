// src/components/SideMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

export default function SideMenu() {
  return (
    <aside className="bg-light shadow-sm z-10">
      <nav>
        <ul className="nav-container ">
          <li className="nav-item">
            <Link to="/" className="nav-link d-flex align-items-center">
              <i className="bi bi-columns-gap me-2"></i>
              <span className="link-tex">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/formandos"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-person me-2"></i>
              <span className="link-tex">Estudantes</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/formadores"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-person-bounding-box me-2"></i>
              <span className="link-tex">Formadores</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/turmas" className="nav-link d-flex align-items-center">
              <i className="bi bi-journal-bookmark me-2"></i>
              <span className="link-tex">Turmas</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usuarios" className="nav-link d-flex align-items-center">
              <i className="bi bi-pencil-square me-2"></i>
              <span className="link-tex">Usuários</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auditoria"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-clipboard-data me-2"></i>
              <span className="link-tex">Auditoria</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/movimentos"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-cash-stack me-2"></i>
              <span className="link-tex">Movimentos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/caixa" className="nav-link d-flex align-items-center">
              <i className="bi bi-safe me-2"></i>
              <span className="link-tex">Caixa</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/banco" className="nav-link d-flex align-items-center">
              <i className="bi bi-bank me-2"></i>
              <span className="link-tex">Banco</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/faturacao"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-receipt me-2"></i>
              <span className="link-tex">Facturação</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/relatorio"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-file-earmark-bar-graph me-2"></i>
              <span className="link-tex">Relatórios</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/taxa" className="nav-link d-flex align-items-center">
              <i className="bi bi-cash-coin me-2"></i>
              <span className="link-tex">Impostos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
