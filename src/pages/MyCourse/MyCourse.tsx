import { Link } from "react-router-dom";

import { CursoMap } from "@/utils";
import CourseCard from "../CatalogoPage/CourseCard";

export default function MyCourses() {
  return (
    <div className="">
      <h1 className="text-2xl">Cursos matriculados</h1>
      <div className="flex items-start gap-4 mt-4">
        <div className="flex flex-col flex-1 gap-4 overflow-y-scroll scrol">
          {CursoMap.map((curso, index) => (
            <Link to="/classroom/2" key={index}>
              <CourseCard
                course={curso.course}
                level={curso.level}
                is_my={true}
                structor={curso.structor}
                structor_about={curso.structor_about}
                imageCourse={curso.imageCourse}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
