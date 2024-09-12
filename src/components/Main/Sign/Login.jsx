import "./Sign.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { login, saveLocalStorageToken } from "../../../utils/API";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { flashMessage } from "../../../utils/lib";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../hooks/UserContext";

const schema = zod.object({
  email: zod
    .string({ required_error: "Campo obrigatorio" })
    .email("Email inválido")
    .min(5, "Deve conter no minimo 5 letras")
    .max(50, "Deve conter no maximo 50 letras"),
  password: zod
    .string({ required_error: "Campo obrigatorio" })
    .min(8, "Deve conter pelo menos 8 letras")
    .max(25, "Deve conter no maximo"),
});

export default function Login({ nextStep, setUserLogin }) {
  const { user, setUser } = useContext(UserContext);
  const form = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function loginSubmit(data) {
    setLoading(true);
    try {
      const response = await login(data.email, data.password);
      console.log(response);
      saveLocalStorageToken(response.token);
      if (response.status == 1) {
        flashMessage("Bem vindo ao Achei", "SUCCESS");
        setUser(response);
        navigate("/");
      }
      if (response.status == 2) {
        flashMessage("Dados de Acesso Incorrecto", "ERROR");
      }
      if (response.status == 3) {
        flashMessage("Conta Bloqueada, contacte o supporte", "ERROR");
      }
      if (response.status == 4) {
        flashMessage("Verfique seu email", "INFO");
        setUserLogin(data.email, data.password);
        nextStep();
      }
    } catch (error) {
      console.log(error);
      // Trata erros de rede ou outros problemas
      toast.error("Ocorreu um erro ao tentar realizar o login", {
        /* position: toast.POSITION.TOP_RIGHT, */
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="box login-form">
      <h1>Login</h1>
      <p className="login-text">
        Digite seus dados de acesso nos campos abaixo.
      </p>
      <form onSubmit={form.handleSubmit(loginSubmit)}>
        <div className="form-group">
          <label htmlFor="email" className="labelEmail">
            E-mail
          </label>
          <input type="text" {...form.register("email")} />
          <div className="text-red-700">
            {form.formState.errors.email && (
              <span>{form.formState.errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="labelPass">
            Senha
          </label>
          <div className="relative">
            <input type="password" {...form.register("password")} />
            {/* <i className="bi bi-eye-fill toggle-password absolute top-3 right-2"></i> */}
          </div>

          <div className="text-red-700">
            {form.formState.errors.password && (
              <span>{form.formState.errors.password.message}</span>
            )}
          </div>
        </div>
        <a href="#" className="forgot-password">
          Esqueci a minha senha
        </a>
        <div className="form-group button-send">
          <button
            type="submit"
            disabled={loading}
            className="btn flex gap-2 items-center justify-center font-bold"
          >
            Acessar{" "}
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          </button>
          <div className="loader hide"></div>
        </div>
      </form>
    </section>
  );
}
