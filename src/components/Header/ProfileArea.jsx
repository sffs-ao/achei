import React from "react";
import userImage from "../../assets/image/user.jpg";
import "./ProfileArea.css";

export default function ProfileArea() {
  return (
    <div className="user-profile-content">
      <img src={userImage} alt="User Profile" className="image-user-header" />
      <div className="header-user-dtails">
        <div className="user-profile-name">
          <strong>Nome</strong>
        </div>
        <div className="user-type">Função</div>
      </div>
    </div>
  );
}
