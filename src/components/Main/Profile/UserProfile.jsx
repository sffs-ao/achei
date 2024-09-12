import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import "./UserProfile.css";
import { useContext } from "react";
import { UserContext } from "../../../hooks/UserContext";
import { IMAGE_URL } from "../../../utils/API";

// Componente de perfil de usuário
export default function UserProfile({ act }) {
  const { user } = useContext(UserContext);
  console.log("O id é:", user.id);
  /*   console.log(user); */
  return (
    <div className="card shadow-sm p-4" id="profile-area">
      <div className="d-flex align-items-center">
        <img
          src={
            user.profile_image == null
              ? "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              : `${IMAGE_URL}${user.profile_image}`
          }
          alt={`${user.name}`}
          className="rounded-circle me-3 img-user-profile"
          style={{ width: "100px", height: "100px" }}
        />
        <div className="profile-user-details">
          <h2 className="mb-1 profile-user-name">{user.name}</h2>
          <p className="text-muted mb-0">{user.email}</p>
          <p className="text-muted mb-0">{user.user_title}</p>
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
          {act.activityLog.map((activity, index) => (
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
/* UserProfile.propTypes = {
  user: PropTypes.shape({
    activityLog: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
 */
