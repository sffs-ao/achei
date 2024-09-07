import React, { useState } from "react";
import "./Users.css"; // Certifique-se de que o CSS está importado
import "../../Elements/Button";
import Button from "../../Elements/Button";

const usersData = [
  {
    image: "https://via.placeholder.com/50", // URL da imagem de perfil
    name: "João Silva",
    email: "joao.silva@example.com",
    role: "Admin",
    status: "Ativo",
  },
  {
    image: "https://via.placeholder.com/50", // URL da imagem de perfil
    name: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    role: "Usuário",
    status: "Ativo",
  },
  {
    image: "https://via.placeholder.com/50", // URL da imagem de perfil
    name: "Carlos Souza",
    email: "carlos.souza@example.com",
    role: "Usuário",
    status: "Inativo",
  },
  // Adicione mais usuários conforme necessário
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
            <Button
              typeClass="btn-primary"
              id="btn-add"
              text="Adicionar Usuário"
            />
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
              <tr key={user.email}>
                {/* Usar email como chave para garantir unicidade */}
                <td>
                  <img
                    src={user.image}
                    alt={user.name}
                    className="user-image"
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
