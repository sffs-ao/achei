import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { useContext } from "react";

export default function ProtectedRoutes() {
       const { user, loading } = useContext(UserContext);
       if (loading) return <h1>Carregando...</h1>;
       if (!user) 
              return <Navigate to="/entrar"/>; 
      return <Outlet />; 
}