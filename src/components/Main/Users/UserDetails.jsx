import React from "react";
import { useParams } from "react-router-dom";

const usersData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "João Silva",
    email: "joao.silva@example.com",
    role: "Admin",
    status: "Ativo",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    role: "Usuário",
    status: "Ativo",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Carlos Souza",
    email: "carlos.souza@example.com",
    role: "Usuário",
    status: "Inativo",
  },
];

export default function UserDetails() {
  const { id } = useParams();
  const user = usersData.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>Usuário não encontrado!</p>;
  }

  return (
    <section className="section-area">
      <div className="section-container user-details">
        <h1>Detalhes do Usuário</h1>
        <img src={user.image} alt={user.name} />
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Função: {user.role}</p>
        <p>Status: {user.status}</p>
      </div>
    </section>
  );
}
