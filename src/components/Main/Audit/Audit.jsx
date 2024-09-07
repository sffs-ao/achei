import React from "react";
import "./Audit.css";

export default function Audit() {
  const auditData = [
    {
      id: 1,
      user: "João Silva",
      action: "Login",
      date: "2024-09-01 10:00",
      status: "Sucesso",
    },
    {
      id: 2,
      user: "Maria Oliveira",
      action: "Alteração de Senha",
      date: "2024-09-01 10:05",
      status: "Sucesso",
    },
    {
      id: 3,
      user: "Carlos Souza",
      action: "Tentativa de Login",
      date: "2024-09-01 10:10",
      status: "Falha",
    },
    // Adicione mais registros conforme necessário
  ];

  // Calcula o número total de registros e o número de falhas
  const totalRecords = auditData.length;
  const totalFailures = auditData.filter(
    (entry) => entry.status === "Falha"
  ).length;

  return (
    <section className="section-area">
      <div id="audit-content" className="section-container">
        <h1>Auditória</h1>
        <p>Registro completo de atividades do sistema:</p>
        <table className="table-content audit-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Ação</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {auditData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.user}</td>
                <td>{entry.action}</td>
                <td>{entry.date}</td>
                <td
                  className={
                    entry.status === "Sucesso"
                      ? "status-success"
                      : "status-fail"
                  }
                >
                  {entry.status}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="tfoot-text">
                Total de Registros:
              </td>
              <td>{totalRecords}</td>
            </tr>
            <tr>
              <td colSpan="4" className="tfoot-text">
                Total de Falhas:
              </td>
              <td>{totalFailures}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
