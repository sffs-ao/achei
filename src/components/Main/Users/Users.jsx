import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Users.css";
import Button from "../../Elements/Button";

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

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRowClick = (userId) => {
    navigate(`/usuarios/${userId}`);
  };

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section-area">
      <div className="section-container">
        <div className="header-actions">
          <h1>Usuários</h1>
          <p>Página de gerenciamento de usuários.</p>
          <div className="top-container">
            <input
              type="text"
              placeholder="Pesquisar usuários..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <Link to="">
              <Button
                typeClass="btn-primary"
                id="btn-add-user"
                text="Adicionar Usuário"
              />
            </Link>
          </div>
        </div>
        <table className="table-content">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.email} onClick={() => handleRowClick(user.id)}>
                <td>
                  <img
                    src={user.image}
                    alt={user.name}
                    className="table-image"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className={`status-${user.status.toLowerCase()}`}>
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
