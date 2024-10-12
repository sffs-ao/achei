import { Link } from "react-router-dom"

import { CursoMap } from "@/utils"
import CourseCard from "../CatalogoPage/CourseCard"
import { useQuery } from "@tanstack/react-query"
import { GET_MY_CLASSES } from "@/lib/API"
import { Loader2 } from "lucide-react"

export default function MyCourses()
{
    const {data, isPending} = useQuery({
        queryKey: ["get-classes"],
        queryFn: GET_MY_CLASSES,
    })
    if(data)
        console.log("Data ",data )
    return(
        <div className="">
            <h1 className="text-2xl">Cursos matriculados</h1>
            <div className="flex mt-4 items-start gap-4">
                <div className=" overflow-y-scroll scrol flex-1 flex flex-col gap-4">
                    {isPending && <div className="w-full h-96 flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin" /></div>}
                        {!isPending && data.message && <h1>Nenhum curso inscrito</h1>}
                     {data && data[0]?.registrations.map((curso:any, index:number) =>(
                        <Link to={`/portal/classroom/${curso.id}`} key={index}>
                            <CourseCard course={curso.course.course_name}
                                level={curso.courselevel}
                                is_my={true}
                                payment_status={curso.payment_data.payment_status}
                                structor={curso.teacher.name}
                                structor_about={curso.structor_about}
                                imageCourse={curso.imageCourse}
                                time_start={curso.shift.start_time}
                                time_end={curso.shift.end_time}
                            />
                    </Link>
                   ))}
                   
                </div>
              
            </div>
        </div>
    )
}