import React, { forwardRef } from "react";
import "./ModalUser.css";
import { Link } from "react-router-dom";

const ModalUser = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={props.className}>
      <ul>
        <li>
          <Link to="/perfil">
            <i className="bi bi-person-fill"></i>
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <Link to="/configuracoes">
            <i className="bi bi-gear-fill"></i>
            <span>Configurações</span>
          </Link>
        </li>
        <li className="btn-logout flex gap-2 items-center">
          <i className="bi bi-power"></i>
          <Link to="/logout"><span>Sair</span></Link>
        </li>
      </ul>
    </div>
  );
});

export default ModalUser;
