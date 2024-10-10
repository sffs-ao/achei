import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa"; // Biblioteca react-icons

function Scroll() {
  return (
    <div>
      <ScrollToTop
        smooth
        component={<FaArrowUp />} // Adiciona ícone de seta para cima
        style={{
          backgroundColor: "#007bff", // Cor de fundo do botão
          borderRadius: "50%", // Botão arredondado
          padding: "10px", // Espaçamento interno
          color: "white", // Cor do ícone
        }}
      />
      {/* Conteúdo da página */}
    </div>
  );
}

export default Scroll;
