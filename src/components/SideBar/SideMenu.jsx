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
              <span className="link-tex">Formandos</span>
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
            <Link
              to="/inscricoes"
              className="nav-link d-flex align-items-center"
            >
              <i className="bi bi-calendar-plus me-2"></i>
              <span className="link-tex">Inscrições</span>
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
        </ul>
      </nav>
    </aside>
  );
}
