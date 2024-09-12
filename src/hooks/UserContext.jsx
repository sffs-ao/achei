import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/API";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getToken(params) {
      const token = localStorage.getItem("enanza_");
      if (!token) {
        setUser(null);
        setMessage("Deve iniciar sessão");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${BASE_URL}/profiles`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          setMessage("Sessao espirada, faça login novamente");
          throw new Error("Token inválido");
        }
        const data = await response.json();

        /*if (!data.valid) {
          setMessage("Sessao espirada, faça login novamente");
          setUser(null);
        }*/
        setUser(data);
      } catch (error) {
        setUser(null);
        setMessage("Deve iniciar sessão");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getToken();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, message }}>
      {children}
    </UserContext.Provider>
  );
};
