import { Navigate } from "react-router-dom";
import { removeTokenLocalstorage } from "../../utils/lib";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";

export default function Logout() {
    const {setUser} = useContext(UserContext)
    removeTokenLocalstorage()
    setUser(null)
    return <Navigate to="/entrar"/>; 
}