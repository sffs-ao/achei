import React from "react";
/* import image from "../../../assets/image/courses.jpg"; */
import imageUser from "../../../../assets/image/user.webp";
import "./CourseCard.css";

type CourseCardProps = {
  level: string;
  structor: string;
  course: string;
  structor_about: string;
  course_state: string;
  imageCourse: string;
  address: string;
};

export default function CourseCard({
  level,
  structor,
  course,
  structor_about,
  course_state,
  imageCourse,
  address,
}: CourseCardProps) {
  // Função para converter o nível do curso para português
  const getLevelInPortuguese = (level: string) => {
    switch (level) {
      case "Basic":
        return "Básico";
      case "Intermediate":
        return "Intermediário";
      case "Advanced":
        return "Avançado";
      default:
        return level; // Retorna o valor original caso não corresponda a nenhum nível conhecido
    }
  };

  return (
    <div className="course-container">
      {/* <Link to={address}> */}
      <span className="course-state">{course_state}</span>
      <img src={imageCourse} alt="" id="bk-image" />
      <div className="course-details">
        <div>
          <div className="course-level">{getLevelInPortuguese(level)}</div>
        </div>
        <div className="course-name">{course}</div>
        <div className="structor-details">
          <img
            src="https://i.ibb.co/b2bVhYn/Whats-App-Image-2024-09-21-at-17-40-19.jpg"
            alt=""
          />
          <div>
            <div className="course-structor">{structor}</div>
            <div className="structor-about">{structor_about}</div>
          </div>
        </div>
      </div>
      {/*  </Link> */}
    </div>
  );
}
