import React from "react";
import "./ModalUser.css";

export default function ModalUser({ className }) {
  return (
    <div className="modal-user {className}">
      <ul>
        <li>
          <div>
            <i className="bi bi-gear-fill"></i>
          </div>
          <div>
            <span>Perfil</span>
          </div>
        </li>
        <li>
          <div>
            <i className="bi bi-person-fill"></i>
          </div>
          <div>
            <span>Configurações</span>
          </div>
        </li>
        <li>
          <div>
            <i className="bi bi-power"></i>
          </div>
          <div>
            <span>Sair</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
