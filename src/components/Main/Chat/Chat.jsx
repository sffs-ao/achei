import React, { useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [conversations] = useState([
    { id: 1, name: "ManueL Cardoso", lastMessage: "Olá como vai?" },
    { id: 2, name: "Alberto da Silva", lastMessage: "Preciso de ajuda!" },
    { id: 3, name: "Rosa da Silva", lastMessage: "Ainda tem vagas" },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );

  return (
    <section className="section-area chat-container">
      <div className="conversations-list">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`conversation-item ${
              selectedConversation.id === conversation.id ? "active" : ""
            }`}
            onClick={() => setSelectedConversation(conversation)}
          >
            <h4>{conversation.name}</h4>
            <p>{conversation.lastMessage}</p>
          </div>
        ))}
      </div>
      <div className="chat-window">
        <h2>{selectedConversation.name}</h2>
        <div className="messages">
          <p>{selectedConversation.lastMessage}</p>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Escreva a mensagem..." />
          <button>Send</button>
        </div>
      </div>
    </section>
  );
}
