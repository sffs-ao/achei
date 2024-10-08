import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import imageName from "../../../../assets/image/logo-bg.png"
import "./ModalRegister";
import ModalRegister from "./ModalRegister";
import { CREATE_USER_ACCOUNT } from "./RegisterReq";


export default function Register() {  // Estado para os campos do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (refresh da página)

    // Validação simples das senhas
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      // Chama a função para criar a conta de usuário
      const response = await CREATE_USER_ACCOUNT(name, email, password);

      // Verifica se a resposta é um JSON válido
      if (!response || typeof response !== "object") {
        throw new Error("Resposta inválida do servidor");
      }
      setSubmit(true);
      console.log("Usuário criado com sucesso:", response);
      // Continue o fluxo com base na resposta
    } catch (err) {
      console.error("Erro ao criar conta:", err);
      setError("Ocorreu um erro ao criar a conta.");
    }
  };

  return (
    <div className="register-container">
      <ModalRegister submit={submit} setSubmit={setSubmit} />
      <div className="register">
        <div className="publicidade">
          <img src={imageName} alt="" className="image-name" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Comece Agora</h1>
          {error && <p className="error">{error}</p>}{" "}
          {/* Mostra a mensagem de erro, se houver */}
          <div className="form-group">
            <label htmlFor="new-user-name">
              <i className="bi bi-person bi-left"></i>
            </label>
            <input
              type="text"
              name="name"
              id="new-user-name"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)} // Atualiza o estado
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-user-email">
              <i className="bi bi-envelope bi-left"></i>
            </label>
            <input
              type="email"
              name="email"
              id="new-user-email"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-user-pass">
              <i className="bi bi-person-lock bi-left"></i>
            </label>
            <input
              type="password"
              name="new-pass"
              id="new-user-pass"
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-user-confirm">
              <i className="bi bi-person-lock bi-left"></i>
            </label>
            <input
              type="password"
              id="new-user-confirm"
              placeholder="Repita a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Atualiza o estado
            />
          </div>
          <div className="form-group terms">
            <input type="checkbox" name="" id="new-user-terms" required />
            <label htmlFor="new-user-terms">
              Concordo com os <Link to="">Termos</Link> e{" "}
              <Link to="">Políticas de privacidade</Link>.
            </label>
          </div>
          <div className="form-group ">
            {/* <Link to="/confirm"> */}
            <button type="submit" className="btn" id="btn-submit-register">
              Avançar
            </button>
            {/* </Link> */}
          </div>
          <div className="space"></div>
          <div className="contact-area">
            <div className="contact-top">
              <i className="bi bi-shield-check"></i>
              <p>Entre em contato!</p>
            </div>
            <p className="contact-text">
              Contacte-nos em casos de dúvidas. Fale conosco para esclarecer
              qualquer dúvida, obter informações adicionais ou discutir suas
              necessidades.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
