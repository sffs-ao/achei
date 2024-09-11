import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./API";
const MESSAGE_ERROR = "ERROR"
const MESSAGE_SUCCESS = "SUCCESS"
const MESSAGE_INFO = "INFO"
const MESSAGE_WARNING = "WARNING"

 

export function flashMessage(message, type) {
 
    switch (type) {
        
        case MESSAGE_ERROR:
         
        toast.error(message)
            break;
        case MESSAGE_SUCCESS:
            toast.success(message)
            break;
        case MESSAGE_INFO:
            toast.info(message)
            break;
        case MESSAGE_WARNING:
            toast.warning(message)
            break;
        default:
            toast.error("FALSO")
            break;
    }
}

export function getTokenLocalStorage() {
  return (window.localStorage.getItem("token"))
}

export const checkTokenValidity = async (token) => {

    
    try {
      const response = await fetch(`${BASE_URL}/authenticated`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Token inválido");
      }

      const data = await response.json();
      if (!data.valid) {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  };

export function removeTokenLocalstorage(params) {
    window.localStorage.removeItem("enanza_")
}