// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import ButtonMenu from "./MenuButton";
import ToggleButton from "./ToggleButton";

export default function Header() {
  return (
    <header className="shadow-lg bg-light py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="header-left">
          <div className="logo-area">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </Link>
          </div>
          <ButtonMenu />
        </div>

        <nav className="d-flex gap-3">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/formandos" className="nav-link">
            Formandos
          </Link>
          <Link to="/formadores" className="nav-link">
            Formadores
          </Link>
          <Link to="/inscricoes" className="nav-link">
            Inscrições
          </Link>
          <Link to="/turmas" className="nav-link">
            Turmas
          </Link>
          <Link to="/usuarios" className="nav-link">
            Usuários
          </Link>
          <Link to="/auditoria" className="nav-link">
            Auditoria
          </Link>
        </nav>
        <ToggleButton />
      </div>
    </header>
  );
}
