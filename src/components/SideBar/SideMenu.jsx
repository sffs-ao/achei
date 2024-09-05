// src/components/SideMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

export default function SideMenu() {
  return (
    <aside className="bg-light shadow-sm">
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link d-flex align-items-center">
              <i className="bi bi-columns-gap me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/formandos"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-person me-2"></i>
              Formandos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/formadores"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-person-bounding-box me-2"></i>
              Formadores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/inscricoes"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-calendar-plus me-2"></i>
              Inscrições
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/turmas" className="nav-link d-flex align-items-center">
              <i className="bi bi-journal-bookmark me-2"></i>
              Turmas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usuarios" className="nav-link d-flex align-items-center">
              <i className="bi bi-pencil-square me-2"></i>
              Usuários
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auditoria"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-clipboard-data me-2"></i>
              Auditoria
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
