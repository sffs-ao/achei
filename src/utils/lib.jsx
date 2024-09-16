import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./API";
import { z } from "zod";
const MESSAGE_ERROR = "ERROR"
const MESSAGE_SUCCESS = "SUCCESS"
const MESSAGE_INFO = "INFO"
const MESSAGE_WARNING = "WARNING"


export const privilegeSchema = z.object({
  get: z.number().int().min(0).max(1),
  store: z.number().int().min(0).max(1),
  put: z.number().int().min(0).max(1),
  delete: z.number().int().min(0).max(1),
});

export const privilegesSchema = z.object({
  users: privilegeSchema,
  instructors: privilegeSchema,
  enrollments: privilegeSchema,
  courses: privilegeSchema,
  shifts: privilegeSchema,
  'course-contents': privilegeSchema,
  'summary-calendar': privilegeSchema,
  classes: privilegeSchema,
  'class_sessions': privilegeSchema,
  payments: privilegeSchema,
  grades: privilegeSchema,
  products: privilegeSchema,
  audits: privilegeSchema,
});

export const userSchema = z.object({
  name: z.string(), // Nome não pode ser vazio
  email: z.string().email(), // Email deve ser um email válido
  user_title: z.string(), // Título do usuário não pode ser vazio
  user_type: z.string(), // Tipo de usuário deve estar entre 1 e 3
  privileges: privilegesSchema, // Validação dos privilégios
  account_status: z.number().int().min(0).max(1), // Status da conta deve ser 0 ou 1
});


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