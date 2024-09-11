import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import "./UserProfile.css";
import { BASE_URL } from "../../../utils/API";

const APP_NAME = "meuApp"; // Substitua "meuApp" pelo nome real do seu aplicativo
const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_token`);

fetch(`${BASE_URL}/profiles`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  })
  .finally(() => {
    console.log("Requisição finalizada");
  });

// Componente de perfil de usuário
export default function UserProfile({ user }) {
  return (
    <div className="card shadow-sm p-4" id="profile-area">
      <div className="d-flex align-items-center">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="rounded-circle me-3 img-user-profile"
          style={{ width: "100px", height: "100px" }}
        />
        <div className="profile-user-details">
          <h2 className="mb-1 profile-user-name">{user.name}</h2>
          <p className="text-muted mb-0">{user.email}</p>
          <p className="text-muted mb-0">{user.position}</p>
        </div>
      </div>
      <div className="mt-3 button-group">
        <Button
          typeClass="btn-primary"
          id="btn-change-image"
          text="Alterar Imagem"
        />
        <Button
          typeClass="btn-secondary"
          id="btn-change-pass"
          text="Alterar Senha"
        />
      </div>
      <div className="mt-4">
        <h4 className="font-bold">Registo de Atividade</h4>
        <ul className="activity-log list-group">
          {user.activityLog.map((activity, index) => (
            <li key={index} className="list-group-item">
              <strong>{activity.date}:</strong> {activity.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Definir as propriedades esperadas pelo componente
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    position: PropTypes.string,
    activityLog: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
