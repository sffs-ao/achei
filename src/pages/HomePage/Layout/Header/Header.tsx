import { Link } from "react-router-dom";
import logo from "../../../../assets/image/logo.png";
import "./Header.css";

export default function HeaderHomePage() {
  return (
    <header id="header-area">
      <div className="header-left-side logo-area">
        <Link to="/" className="link-logo">
          <img src={logo} alt="" className="logo-image" />
          <p className="logo-name">
            <span>SF</span>
            <span>FS</span>
          </p>
        </Link>
        {/* <i className="bi bi-list" id="btn-menu"></i> */}
      </div>
      <div className="header-right-side">
        {/* <ul className="menu-header">
          <li>
            <Link to="">
              <span>Promoções</span>
              <span className="destaque">Oferta</span>
            </Link>
          </li>
          <li>
            <Link to="">Cursos</Link>
          </li>
          <li>
            <Link to="">
              <span>Conteúdo Grátis</span>
              <i className="bi bi-chevron-down"></i>
            </Link>
          </li>
          <li>
            <Link to="">
              <span>Para Empresas</span>
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </li>
        </ul> */}

        <div className="access-area">
          <button>
            <Link to="/entrar">
              <i className="bi bi-person" id="btn-entrar-icon"></i>
              <span>Entrar</span>
            </Link>
          </button>
          <button
            onClick={() => {
              const scrollTopValue = window.innerWidth < 1040 ? 850 : 0;
              window.scrollTo({ top: scrollTopValue, behavior: "smooth" });
            }}
          >
            <Link to="">
              <span>Registrar-se</span>
              <i className="bi bi-chevron-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
