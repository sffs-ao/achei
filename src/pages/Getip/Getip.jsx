import React, { useState, useEffect } from "react";

export default function Getip() {
  const [ip, setIP] = useState("");

  useEffect(() => {
    // Função para obter o endereço IP público
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIP(data.ip); // Armazena o IP no estado
        console.log("Endereço IP público do usuário:", data.ip); // Emite o IP no console
      } catch (error) {
        console.error("Erro ao obter o endereço IP:", error);
      }
    };

    fetchIP();
  }, []);
}
