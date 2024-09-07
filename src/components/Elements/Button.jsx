import React from "react";
import "./Button.css";

export default function Button({ id, text, typeClass }) {
  return (
    <button className={`btn ${typeClass}`} id={id}>
      {text}
    </button>
  );
}