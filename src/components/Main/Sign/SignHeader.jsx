import React from "react";
import DarkMode from "../../Elements/DarkMode";
import logo_image from "../../../assets/image/logo.png";

export default function SignHeader() {
  return (
    <header>
      <div className="logo-area">
        <img src={logo_image} alt="Logo" className="img-fluid h-[50px]" />
      </div>
      <DarkMode />
    </header>
  );
}
