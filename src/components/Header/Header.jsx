// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import ButtonMenu from "../Elements/MenuButton";
import ToggleButton from "../Elements/ToggleButton";
import ProfileArea from "./ProfileArea";
import "./Header.css";

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
        <div className="header-right d-flex align-items-center justify-content-end">
          <div className="dark-mode me-3">
            <i className="bi bi-brightness-high-fill"></i>
            <ToggleButton id="switch-mode" />
            <i className="bi bi-moon-fill"></i>
          </div>
          <div className="icon-group notification-content me-3">
            <Link to="/notificacoes">
              <i className="bi bi-bell-fill fs-4"></i>
            </Link>
          </div>
          <div className="icon-group message-content">
            <Link to="/chat">
              <i className="bi bi-chat-dots-fill fs-4"></i>
            </Link>
          </div>
          <ProfileArea />
        </div>
      </div>
    </header>
  );
}
