import React from "react";
import UserProfile from "../components/Main/Profile/UserProfile";

// Dados fictícios do usuário
const userData = {
  name: "Maria Silva",
  email: "maria.silva@example.com",
  avatar: "https://via.placeholder.com/150",
  position: "Desenvolvedora Front-end",
  bio: "Maria é uma desenvolvedora apaixonada por criar interfaces dinâmicas e eficientes usando React.",
  phone: "+55 (11) 99999-9999",
};

export default function Profile() {
  return (
    <section className="section-area">
      <div id="profile">{<UserProfile user={userData} />}</div>
    </section>
  );
}
