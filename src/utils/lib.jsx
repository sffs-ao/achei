import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./API";
import  z from "zod";
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
  name: z.string({ required_error: "Campo obrigatorio" }).min(1, "Campo obrigatorio"), // Nome não pode ser vazio
  email: z.string({ required_error: "Campo obrigatorio" }).email("Email invalido"), // Email deve ser um email válido
  user_title: z.string({ required_error: "Campo obrigatorio" }).min(1, "Campo obrigatorio"), // Título do usuário não pode ser vazio
  user_type: z.string({ required_error: "Campo obrigatorio" }).transform(Number), // Tipo de usuário deve estar entre 1 e 3
  privileges: privilegesSchema, // Validação dos privilégios
  account_status: z.number().int().min(0).max(1), // Status da conta deve ser 0 ou 1
});

export const studentSchema = z.object({
  full_name: z.string({ required_error: "Campo obrigatório" }).min(1, "Nome completo é obrigatório"),
  birth_date: z.string({ required_error: "Campo obrigatório" }).regex(/^\d{4}-\d{2}-\d{2}$/, "Data de nascimento deve estar no formato YYYY-MM-DD"),
  id_type: z.string({ required_error: "Tipo de documento é obrigatório" }).transform(Number), // Convertendo para número
  id_number: z.string({ required_error: "Campo obrigatório" }).min(1, "Número do documento é obrigatório"),
  email: z.string({ required_error: "Campo obrigatório" }).email("Email inválido"),
  phone_number: z.string({ required_error: "Campo obrigatório" }).regex(/^\d{9}$/, "Número de telefone deve conter 9 dígitos"),
  address: z.string({ required_error: "Campo obrigatório" }).min(1, "Endereço é obrigatório"),
  observations: z.string().optional(), // Observações podem ser vazias
});

export const schemaClass = z.object({
  name: z.string({required_error:"Campo obrigatorio"}).min(1, "Informe o nome da turma"),
  course_id: z.string().transform(Number),
  user_id: z.string().transform(Number),
  start_date: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  end_date: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  vacancies: z.string().transform(Number)
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