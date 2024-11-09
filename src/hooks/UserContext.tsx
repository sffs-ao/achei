import { BASE_URL, APP_NAME, removeLocalStorageToken } from "../lib/API";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  id?: number;
  name?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
  student_id?: string;
}

interface contextProps {
  user: User | null;
  setUser: (user: User) => void;
  loading: boolean;
  message: string | null;
  logout: () => void;
}

export const UserContext = createContext({} as contextProps);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  function logout() {
    removeLocalStorageToken();
    setUser(null);
  }

  useEffect(() => {
    async function getToken() {
      const token = localStorage.getItem(`${APP_NAME}_`);
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      } else console.log("token already exists");
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
        if (data.id) {
           const responseDataStudent = await fetch(`${BASE_URL}/students/get-data`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (!responseDataStudent.ok) {
            setMessage("Sessao espirada, faça login novamente");
            throw new Error("Estudante Invalido");
          }
          const dataStudent = await responseDataStudent.json();
          console.log("student hook", dataStudent)
          setUser({ id: data.id, name: data.name, email: data.email, student_id: dataStudent[0]?.id });
        }else throw new Error("Token inválido");
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
  console.log(user);
  return (
    <UserContext.Provider
      value={{ user, setUser: setUser, loading, message, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const contexto = useContext(UserContext);
  return contexto;
};
