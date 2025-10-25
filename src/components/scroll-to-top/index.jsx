import useScrollTop from "@/hooks/use-scroll-top";
import { FaAngleUp, FaWhatsapp } from "react-icons/fa";

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop();
  if (stick) {
    return (
      
     <>
      <button className="wa-callup pulse-button" onClick={onClickHandler}>
       <span> <FaWhatsapp/></span>
      </button>

       <button id="scrollUp" className="scroll-top" onClick={onClickHandler}>
       <span> <FaAngleUp /></span>
      </button>
     </>
    );
  }
  return null;
};

export default ScrollToTop;
