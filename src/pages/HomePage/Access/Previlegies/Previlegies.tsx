import React from "react";
import "./Previlegies.css";

type PrevilegiesProps = {
  image: string;
  type: string;
  clr: string;
};

export default function Previlegies({ image, type, clr }: PrevilegiesProps) {
  return (
    <div className="card-previlegies">
      {/* <Link to=""> */}
      <div>
        <div className="previlegies-title">
          <p>Pacote</p>
          <p style={{ color: `${clr}` }}>{type}</p>
        </div>
        <div className="previlegies-about">
          Tenha acesso a todos previlégios
        </div>
      </div>
      <div className="previlegies-image-content">
        <img src={image} alt="" />
      </div>
      {/* </Link> */}
    </div>
  );
}
