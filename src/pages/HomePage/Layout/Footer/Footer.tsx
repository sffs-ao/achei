
import { Link } from "react-router-dom";
import "./Footer.css";
import imageFooter from "../../../../assets/image/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="center-text footer-padding">
        <div className="footer-area">
          <div className="footer-top">
            <div>
              <Link to="" className="footer-logo">
                <img src={imageFooter} alt="" />
                <span>SFFS</span>
              </Link>
            </div>
            <div className="social-media">
              <Link to="">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="">
                <i className="bi bi-whatsapp"></i>
              </Link>
              <Link to="">
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-down">
          <p>&copy; SFFS Centro. Direitos reservados</p>
          <a href="#">
            <span>Enviar um Feedback</span>
            <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
