import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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



export const checkTokenValidity = async () => {

    
    try {
      const response = await fetch("https://sua-api.com/verify-token", {
        method: "POST",
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