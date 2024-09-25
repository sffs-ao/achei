import React, { useEffect, useState } from "react";
import Button from "../../Elements/Button";
import * as Dialog from "@radix-ui/react-dialog"
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { flashMessage, userSchema } from "../../../utils/lib";
import { Previligies } from "../../Elements/Previligies";
import { ModalSaveInstructor } from "../../Elements/ModalSaveInstructor";
import { GET_PROFILES, GET_STUDENTS, IMAGE_URL } from "../../../utils/API";
import { ModalSaveStudent } from "../../Elements/ModalSaveStudent";
export default function Students() {

  const [searchTerm, setSearachTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [filteredUsers, setFilter] = useState([])

  useEffect(() => {
    async function getStudents() {
      try {
        const response = await GET_STUDENTS()
        if (!response.message)
          setFilter(response)
      } catch (error) {
          flashMessage(error, "ERROR")
      }
    } 
    getStudents()
  }, [])
  return (
    <section className="section-area">
    <div className="section-container">
      <div className="header-actions">
        <h1>Estudantes</h1>
        <p>Página de gerenciamento de estudantes.</p>
        <div className="top-container">
          <input
            type="text"
            placeholder="Pesquisar estudantes..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <ModalSaveStudent/>
        </div>
      </div>
      <table className="table-content">
        <thead>
          <tr>
            <th>Nome</th>
            <th>email</th>
            <th>Nascimento</th>
            <th>BI</th>
            
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Observações</th>
          </tr>
        </thead>
        <tbody>
      
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.birth_date}</td>
                <td>{user.id_number}</td>
                <td>{user.phone_number}</td>
                <td>{user.address}</td>
                <td>{user.observations}</td>
              </tr>
            ))) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Nenhum estudante disponível
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  </section>
  );
}