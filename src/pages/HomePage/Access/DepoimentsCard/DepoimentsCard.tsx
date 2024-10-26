import "./DepoimentsCard.css";
/* import image_url1 from "../../../../assets/user.webp"; */

export default function DepoimentsCard({
  text_dep,
  image_dep,
  name_dep,
  position_dep,
}) {
  return (
    <div className="card-depoiment">
      <div className="text-depoiment">{text_dep}</div>
      <div className="details-depoiments">
        <div className="img-depoiments">
          <img src={image_dep} alt="" />
        </div>
        <div className="user-name">
          <p>{name_dep}</p>
          <p>{position_dep}</p>
        </div>
      </div>
    </div>
  );
}
