
import "./DepoimentsCard.css";
import image_url1 from "../../../../assets/user.webp"

export default function DepoimentsCard() {
  return (
    <div className="card-depoiment">
      <div className="text-depoiment">
        "Tenho aprendido demais, eu iniciei do zero e hoje eu tô já fazendo
        JavaScript. É um novo mundo que se abriu pra mim, eu nunca imaginei que
        eu teria capacidade de codar, e hoje eu sou uma coroa que coda, me sinto
        um ser útil pra sociedade."
      </div>
      <div className="details-depoiments">
        <div className="img-depoiments">
          <img src={image_url1} alt="" />
        </div>
        <div className="user-name">
          <p>Grace Kelly Oliveira de Souza</p>
          <p>Aluno da Sffs</p>
        </div>
      </div>
    </div>
  );
}
