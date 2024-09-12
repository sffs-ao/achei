import React from "react";
import "./Notification.css";

export default function Notifications() {
  const notifications = [
    { id: 1, text: "Nova Inscrição", time: "2m atrás" },
    { id: 2, text: "Manuel Cardoso solicitou um reembolso", time: "10m atrás" },
    {
      id: 3,
      text: "As notas da turma B já estão disponíveis",
      time: "1h atrás",
    },
  ];

  return (
    <section className=" section-area">
      <div className="notifications-section">
        <h2 className="font-bold">Notificações</h2>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div className="notification-icon">🔔</div>
              <div className="notification-text">{notification.text}</div>
              <div className="notification-time">{notification.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
