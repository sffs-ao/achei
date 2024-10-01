import { Link } from "react-router-dom"

import { CursoMap } from "@/utils"
import CourseCard from "../CatalogoPage/CourseCard"

export default function MyCourses()
{
    return(
        <div className="">
            <h1 className="text-2xl">Cursos matriculados</h1>
            <div className="flex mt-4 items-start gap-4">
                <div className=" overflow-y-scroll scrol flex-1 grid md:grid-cols-2 gap-4">
        
                   {CursoMap.map((curso, index)=>(
                        <Link to="/cursos/2" key={index}>
                            <CourseCard course={curso.course}
                                course_state={curso.course_state}
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
    )
}