import { Navigate } from "react-router-dom";
import { useUserContext } from "../../hooks/UserContext";

export default function Logout() {
    const { logout } = useUserContext();
    logout();
    return <Navigate to="/entrar" />;
}