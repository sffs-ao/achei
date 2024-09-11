import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { useContext } from "react";

export default function ProtectedRoutes() {
       const { user } = useContext(UserContext);
       if (!user) 
              return <Navigate to="/entrar"/>; 
      return <Outlet />; 
}