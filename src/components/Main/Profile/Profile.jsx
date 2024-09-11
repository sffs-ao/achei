import React from "react";
import UserProfile from "./UserProfile";

const userData = {
  name: "Maria Silva",
  email: "maria.silva@example.com",
  avatar:
    "https://images.unsplash.com/photo-1595152769006-2b3b60e49122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MjN8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMjE0NzUy&ixlib=rb-1.2.1&q=80&w=400",
  position: "Gestora",
  activityLog: [
    {
      date: "2024-09-01",
      description: "Concluiu a tarefa de revisão de alunos.",
    },
    {
      date: "2024-08-28",
      description: "Fez a inscrição de Manuel Cardoso.",
    },
    {
      date: "2024-08-25",
      description: "Atualizou a documentação da Alberto da Silva.",
    },
  ],
};

export default function Profile() {
  return (
    <section className="section-area">
      <div id="profile">
        <UserProfile user={userData} />
      </div>
    </section>
  );
}
