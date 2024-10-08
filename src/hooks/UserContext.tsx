import { BASE_URL, APP_NAME  } from "../lib/API";
import { createContext, ReactNode, useEffect, useState } from "react";


export const UserContext = createContext({});

export const UserProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState<string|null>("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getToken() {
      const token = localStorage.getItem(APP_NAME);
      if (!token) {
        alert("Nao tem token");
        setUser(null);
       // setMessage("Deve iniciar sessão");
        setLoading(false);
        return;
      }else{
        console.log("tem token")
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
        console.log(data)
        /*if (!data.valid) {
          setMessage("Sessao espirada, faça login novamente");
          setUser(null);
        }*/
       if(data.status != 2)
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
