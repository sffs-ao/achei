import React, { useState } from "react";
import "./Solution.css";
import SolutionCard from "./SolutionCard";

import imagePlatform from "../../../../assets/image/dashboard.png"
import imageAccompaniment from "../../../../assets/image/imageAccompaniment.jpg";
import imageExtraContent from "../../../../assets/image/imageExtraContent.jpg";
import imageCertificates from "../../../../assets/image/certificado.jpg";
import imageTutors from "../../../../assets/image/tutures.jpg";

// Textos para cada card
const textPlatform =
  "Nossa plataforma oferece uma experiência completa de aprendizado.";
const textAccompaniment =
  "Tenha acompanhamento personalizado para maximizar seus resultados.";
const textTutors = "Contamos com tutores especializados em diversas áreas.";
const textExtraContent =
  "Conteúdos exclusivos para expandir ainda mais seu conhecimento.";
const textCertificates =
  "Certifique-se e comprove sua qualificação no mercado.";

export default function Solution() {
  // Usando useState para controlar o título, imagem e texto do SolutionCard
  const [cardTitle, setCardTitle] = useState("Plataforma");
  const [cardImage, setCardImage] = useState(imagePlatform);
  const [cardText, setCardText] = useState(textPlatform);

  // Função para atualizar o título, imagem e texto do card
  const handleClick = (title:string, image:string, text:string) => {
    setCardTitle(title);
    setCardImage(image);
    setCardText(text);
  };

  return (
    <div className="center-text solution-content">
      <div className="solution-top">
        <h1>
          Conheça a nossa Plataforma! Aqui você encontra tudo que precisa pra
          crescer na carreira
        </h1>
        <p className="sub-title">
          Veja todos os benefícios exclusivos para assinantes
        </p>
        <ul className="list-content">
          <li
            onClick={() =>
              handleClick("Plataforma", imagePlatform, textPlatform)
            }
          >
            Plataforma
          </li>
          <li
            onClick={() =>
              handleClick(
                "Acompanhamento",
                imageAccompaniment,
                textAccompaniment
              )
            }
          >
            Acompanhamento
          </li>
          <li onClick={() => handleClick("Tutores", imageTutors, textTutors)}>
            Tutores
          </li>
          <li
            onClick={() =>
              handleClick("Conteúdo Extra", imageExtraContent, textExtraContent)
            }
          >
            Conteúdo Extra
          </li>
          <li
            onClick={() =>
              handleClick("Certificados", imageCertificates, textCertificates)
            }
          >
            Certificados
          </li>
        </ul>
      </div>
      <div className="solution-down">
        <SolutionCard title={cardTitle} image_url={cardImage} text={cardText} />
      </div>
    </div>
  );
}
