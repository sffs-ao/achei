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
          <img src="https://i.ibb.co/gdybycB/Josemar.jpg" alt="Aluno do SFFS" />
        </figure>
        <div className="banner-text">
          Junte-se aos alunos que aprendem todos os dias com o SFFS
        </div>
      </div>

      <div className="slogan">
        Inicie a sua jornada de <span>aprendizado contínuo</span> e
        enriquecedora
      </div>
    </div>
  );
}
