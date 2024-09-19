import React, { useEffect, useState } from "react";
import Button from "../../Elements/Button";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../utils/lib";
import { Previligies } from "../../Elements/Previligies";
import { ModalSaveInstructor } from "../../Elements/ModalSaveInstructor";
import { GET_PROFILES, IMAGE_URL } from "../../../utils/API";
export default function Instructors() {
  const [searchTerm, setSearachTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [filteredUsers, setFilter] = useState([])
  const status = {
    0: () => <span className="bg-orange-500 text-white p-1 rounded-full px-2">PENDENTE</span>,
    10: () => <span className="bg-orange-500 text-white p-1 rounded-full px-2">PENDENTE</span>,
    1: () =>  <span className="bg-green-700 text-white p-1 rounded-full px-2">ACTIVO</span>,
    2: () => <span className="bg-red-700 text-white p-1 rounded-full px-2">BLOQUEADO</span>
  }
  useEffect(() => {
    async function getUsers() {
      const response = await GET_PROFILES();
      console.log(response);
      setFilter(response);
    }
    getUsers();
  }, []);
  return (
    <section className="section-area">
      <div className="section-container">
        <div className="header-actions">
          <h1>Formadores</h1>
          <p>Página de gerenciamento de formadores.</p>
          <div className="top-container">
            <input
              type="text"
              placeholder="Pesquisar formadores..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <ModalSaveInstructor />
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
<<<<<<< HEAD
    </section>
=======
      <table className="table-content">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Area</th>
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
                    {status[user.account_status]()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </section>
>>>>>>> 5b7cfadaef02245189ef62a4de02dbc9f4473fa6
  );
}
