import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { useContext } from "react";
import Loading from "../Loading";

export default function ProtectedRoutes() {
       const { user, loading } = useContext(UserContext);
       if (loading) return <Loading />;
       if (!user) 
              return <Navigate to="/entrar"/>; 
      return <Outlet />; 
}