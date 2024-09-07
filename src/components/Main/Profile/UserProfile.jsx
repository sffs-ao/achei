import React from "react";
import PropTypes from "prop-types"; // Para validação de propriedades

// Componente de perfil de usuário
export default function UserProfile({ user }) {
  return (
    <div className="card shadow-sm p-4">
      <div className="d-flex align-items-center">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="rounded-circle me-3"
          style={{ width: "100px", height: "100px" }}
        />
        <div>
          <h2 className="mb-1">{user.name}</h2>
          <p className="text-muted mb-0">{user.email}</p>
          <p className="text-muted mb-0">{user.position}</p>
        </div>
      </div>
      <div className="mt-3">
        <h5>Sobre:</h5>
        <p>{user.bio}</p>
      </div>
      <div className="mt-3">
        <h5>Contato:</h5>
        <p>{user.phone}</p>
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
    bio: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};
