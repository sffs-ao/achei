import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa"; // Biblioteca react-icons

function Scroll() {
  return (
    <div>
      <ScrollToTop
        smooth
        component={<FaArrowUp />}
        style={{
          backgroundColor: "#007bff",
          borderRadius: "50%",
          padding: "10px",
          color: "white",
        }}
      />
      {/* Conteúdo da página */}
    </div>
  );
}

export default Scroll;
