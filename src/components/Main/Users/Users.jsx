import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Users.css";
import Button from "../../Elements/Button";
import { GET_PROFILES, IMAGE_URL } from "../../../utils/API";
import { ModalSaveUser } from "../../Elements/ModalSaveUSer";

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
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    async function getProfiles() {
      const data = await GET_PROFILES();
      setProfiles(data);
   //   console.log(data);
    }
    getProfiles();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRowClick = (userId) => {
    navigate(`/usuarios/${userId}`);
  };

  const filteredUsers = profiles.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

 // console.log(filteredUsers);
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
            <ModalSaveUser/>
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
            {filteredUsers &&
              filteredUsers.map((user) => (
                <tr key={user.email} onClick={() => handleRowClick(user.id)}>
                  <td>
                    <img
                      /* src={user.image} */
                      src={
                        user.profile_image == null
                          ? "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                          : `${IMAGE_URL}${user.profile_image}`
                      }
                      alt={user.name}
                      className="table-image"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.user_title}</td>
                  <td className={`status-${user.account_status.toLowerCase()}`}>
                    {user.account_status == 0 && "Pendente"}
                    {user.account_status == 10 && "Pendente"}
                    {user.account_status == 1 && "Activo"}
                    {user.account_status == 2 && "Bloquado"}
                    {/* {user.status} */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
