import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import "./Scroll.css";

function Scroll() {
  return (
    <div>
      <ScrollToTop smooth component={<FaArrowUp />} id="scroll-content" />
    </div>
  );
}

export default Scroll;
