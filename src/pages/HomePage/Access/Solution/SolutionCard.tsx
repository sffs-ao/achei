import { Link } from "react-router-dom";
import "./SolutionCard.css";

type SolutionCardProps = {
  title: string;
  image_url: string;
  text: string;
};

export default function SolutionCard({
  title,
  image_url,
  text,
}: SolutionCardProps) {
  return (
    <div className="solution-card">
      <div className="solution-left">
        <h2>{title}</h2>
        <p className="solution-text">{text}</p>
        <button>
          <Link to="">
            <span
              onClick={() => {
                const scrollTopValue = window.innerWidth < 1040 ? 850 : 0;
                window.scrollTo({ top: scrollTopValue, behavior: "smooth" });
              }}
            >
              Fazer o Cadastro
            </span>
            <i className="bi bi-chevron-right"></i>
          </Link>
        </button>
      </div>
      <div className="image-soluction">
        <img src={image_url} alt={title} />
      </div>
    </div>
  );
}
