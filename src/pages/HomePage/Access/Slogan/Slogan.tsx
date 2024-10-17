import "./Slogan.css";

export default function Slogan() {
  return (
    <div id="slogan-area">
      <div className="up-content">
        <figure>
          <img
            src="https://i.ibb.co/LdDfKFK/71514733.jpg"
            alt="Aluno do SFFS"
          />
          <img
            src="https://i.ibb.co/JkgFKQb/137581478.jpg"
            alt="Aluno do SFFS"
          />
          <img
            src="https://i.ibb.co/RpvwPtc/112092024172106.jpg"
            alt="Aluno do SFFS"
          />
          <img
            src="https://i.ibb.co/pyj1cFd/1725810446013.jpg"
            alt="Aluno do SFFS"
          />
          <img src="https://i.ibb.co/XZmYGhj/Josemar.jpg" alt="Aluno do SFFS" />
        </figure>
        <div className="banner-text">
          Se junte aos alunos que aprendem todos os dias com Achei
        </div>
      </div>

      <div className="slogan">
        Sua jornada de <span>aprendizado contínuo</span> e enriquecedor.
      </div>
    </div>
  );
}
