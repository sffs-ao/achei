import React, { forwardRef } from "react";
import "./Button.css";


const Button = forwardRef(({ text, typeClass, onClick, ...rest }, ref) => (
  <button
    className={`btn ${typeClass}`}
    onClick={onClick}
    ref={ref}
    {...rest} // Espalha quaisquer outras propriedades recebidas
  >
    {text}
  </button>
));

export default Button