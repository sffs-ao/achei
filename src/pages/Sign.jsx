import "./Sign.css"
export default function Sign() {
    return (
      <div>
         <header className="login-header">
          <a href="#">
          <img src="vite.svg" alt="" className="logotipo"/>
          </a>
          <div className="light switch-container">
            <i className="bi bi-brightness-high-fill btn-light" title="Activar modo claro"></i>
            <div className="light switch-btn">
              <div className="switch-inside"></div>
            </div>
            <i className="bi bi-moon-stars-fill btn-dark" title="Activar modo escuro"></i>
          </div>
        </header>
        <div className="main-login">
           <section className="box login-form bg-red-600">
              <h1>Login</h1>
              <p className="login-text text-red-600">Digite seus dados de acesso nos campos abaixo.</p>
              <form action="#">
                <div className="form-group">
                  <label for="email" className="labelEmail">E-mail</label>
                  <input type="email" id="email" name="email" value="manuelmuanza20@gmail.com"/>
                  <div className="error email-error hide"></div>
                </div>
                <div className="form-group">
                  <label for="password" className="labelPass">Senha</label>
                  <input type="password" id="password" name="password" value="Manuel1234#" />
                  <i class="bi bi-eye-fill toggle-password"></i>
                  <div className="error password-error hide"></div>
                </div>
                <a href="#" className="forgot-password">Esqueci a minha senha</a>
                <div className="form-group button-send">
                  <button type="submit" className="btn" id="id-submit">Acessar</button>
                  <div className="loader hide"></div>
                </div>
              </form>
            </section>

        </div>
     
    </div>
    );
}