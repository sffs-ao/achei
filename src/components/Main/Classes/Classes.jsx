import React, { useEffect, useState } from "react";
import "./Classes.css";
import Button from "../../Elements/Button";
import { ModalSaveStudent } from "../../Elements/ModalSaveStudent";
import { ModalSaveClasse } from "../../Elements/ModalSaveClasse";
import { GET_CLASSES } from "../../../utils/API";

/* const classesData = [
  {
    image: "https://via.placeholder.com/50", // URL da imagem da turma
    name: "Turma A",
    teacher: "João Silva",
    schedule: "Segunda e Quarta, 10:00 - 12:00",
    status: "Ativa",
    courses: ["Curso 1", "Curso 2"], // Lista de cursos associados
  },
  {
    image: "https://via.placeholder.com/50", // URL da imagem da turma
    name: "Turma B",
    teacher: "Maria Oliveira",
    schedule: "Terça e Quinta, 14:00 - 16:00",
    status: "Ativa",
    courses: ["Curso 3"], // Lista de cursos associados
  },
  {
    image: "https://via.placeholder.com/50", // URL da imagem da turma
    name: "Turma C",
    teacher: "Carlos Souza",
    schedule: "Sexta-feira, 09:00 - 11:00",
    status: "Inativa",
    courses: [], // Nenhum curso associado
  },
  // Adicione mais turmas conforme necessário
]; */

export default function MenuClasses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classeData, setClasseData] = useState([]);

  // Função para lidar com a alteração do campo de pesquisa
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Função para filtrar turmas com base no termo de pesquisa
  /*   const filteredClasses = classesData.filter((classItem) =>
    classItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); */
  useEffect(() => {
    async function getClasses() {
      const response = await GET_CLASSES();
      console.log(response);
      setClasseData(response);
    }
    getClasses();
  }, []);

  return (
    <section className="section-area">
      <div className="section-container" id="classes-content">
        <div className="header-actions">
          <h1>Turmas</h1>
          <p>Página de gerenciamento das Turmas.</p>
          <div className="top-container">
            <input
              type="text"
              placeholder="Pesquisar turmas..."
              className="search-input"
              id="search-class"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <ModalSaveClasse />
          </div>
        </div>
        <table className="table-content">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Formador</th>
              <th>Horário</th>
              <th>Início</th>
              <th>Fim</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {classeData.length > 0 ? (
              classeData.map((classItem) => (
                <tr key={classItem.name}>
                  <td>{classItem.name}</td>
                  <td>{classItem.teacher}</td>
                  <td>{classItem.time}</td>
                  <td>{classItem.start}</td>
                  <td>{classItem.end}</td>
                  <td>{classItem.schedule}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Nenhuma turma disponível
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
