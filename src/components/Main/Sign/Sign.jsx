import "./Sign.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { login, saveLocalStorageToken } from "../../../utils/API";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import SignHeader from "./SignHeader";
import { toast } from "react-toastify";
/* import "react-toastify/dist/ReactToastify.css"; // Certifique-se de que o CSS do react-toastify está importado */

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

const statusMessages = {
  1: "Sessão criada (token Gerado), chame o dashboard",
  2: "Dados de Acesso Incorrectos",
  3: "Conta Bloqueada",
  4: "Dois Factores (Verificação de Email) ativado ou conta pendente de configuração, abre o formulário para verificar Email (Código enviado no Email)",
};

export default function Sign() {
  const form = useForm({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  async function loginSubmit(data) {
    setLoading(true);
    try {
      const response = await login(data.email, data.password);
      saveLocalStorageToken(response.token);

      // Exibe a mensagem correspondente ao status
      if (statusMessages[response.status]) {
        toast.info(statusMessages[response.status], {
          /*           position: toast.POSITION.TOP_RIGHT, */
          autoClose: 5000,
        });

        // Redirecionar para o dashboard se o status for 1
        if (response.status === 1) {
          // Exemplo de redirecionamento (ajuste conforme sua necessidade)
          // window.location.href = '/dashboard';
        }
      } else {
        toast.error("Erro desconhecido", {
          /*           position: toast.POSITION.TOP_RIGHT, */
          autoClose: 5000,
        });
      }
    } catch (error) {
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
    <div>
      <SignHeader />

      <div className="main-login">
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
      </div>
    </div>
  );
}
