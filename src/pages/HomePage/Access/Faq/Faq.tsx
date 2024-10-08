import React, { useState } from "react";
import "./Faq.css";

  type FaqProps = {
    number: string;
    question: string;
    answer: string;
  };

  export default function Faq({ number, question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="faq-top" onClick={toggleAnswer}>
        <div>
          <p>{number}</p>
          <p>{question}</p>
        </div>
        <p>
          <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`}></i>
        </p>
      </div>
      <div className={`answer ${isOpen ? "open" : ""}`}>{answer}</div>
    </li>
  );
}
