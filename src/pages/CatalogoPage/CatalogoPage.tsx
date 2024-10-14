import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"
import { CursoMap } from "@/utils"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuery } from "@tanstack/react-query"
import { GET_CLASSES_PUBLIC } from "@/lib/API"
import { Loader2 } from "lucide-react"
import CourseCardPublic from "./CourseCardPublic"
import { useEffect, useState } from "react"
import { CourseDescription, CourseDescriptionList, CourseListFilter } from "@/lib/utils"

import { Checkbox } from "@/components/ui/checkbox"

export default function CatalogoPage()
{

    const [filterCourses , setFilterCourses] = useState<CourseListFilter[]>([])
    function orderBy(e: string) {
        let sortedCourses = [...filterCourses];
        if (e === "A") {
            sortedCourses.sort((a, b) => a.course_name.localeCompare(b.course_name));
        } else if (e === "Z") {
            sortedCourses.sort((a, b) => b.course_name.localeCompare(a.course_name));
        }
        setFilterCourses(sortedCourses);
    }
    const {data, isPending} = useQuery({
        queryKey: ["get-public-courses"],
        queryFn: GET_CLASSES_PUBLIC,
    })
    if(data)
        console.log("Data ",data )

    const [basicState, selectBasic] = useState(false)
    const [intermediateState, selectIntermediate] = useState(false)
    const [advancedState, selectAdvanced] = useState(false) 
    const [selectedLevels, setSelectedLevels] = useState<string[]>([])
    function handleChangeLevel(value: string, checked: boolean) {
        let updatedSelectedLevels = [...selectedLevels];
        if (checked) {
            updatedSelectedLevels.push(value);
        } else {
            updatedSelectedLevels = updatedSelectedLevels.filter((level) => level !== value);
        }
        setSelectedLevels(updatedSelectedLevels);

        if (value === "Basic") selectBasic(checked);
        if (value === "Intermediate") selectIntermediate(checked);
        if (value === "Advanced") selectAdvanced(checked);

        const updatedFilterCourses: CourseListFilter[] = data?.courses.filter((course: any) => {
            return updatedSelectedLevels.includes(course.level);
        });

        if (updatedSelectedLevels.length === 0) {
            setFilterCourses(data?.courses);
        } else {
            setFilterCourses(updatedFilterCourses);
        }
    }
 
    useEffect(() => {
        if (data) {
            const basicCourses = data.courses.filter((course: any) => course.level === "Basic" || course.level === "Intermediate" || course.level === "Advanced");
        /* const basicCourses = data.courses.filter((course: any) => course.level === "Basic");
        const intermediateCourses = data.courses.filter((course: any) => course.level === "Intermediate");
        const advancedCourses = data.courses.filter((course: any) => course.level === "Advanced");
 */
      /*   console.log("Basic Courses: ", basicCourses);
        console.log("Intermediate Courses: ", intermediateCourses);
        */
       setFilterCourses(basicCourses)
        console.log("Advanced CData", basicCourses);
                }        
    }, [data])
    return(
        <div className="">
            <h1 className="text-2xl">Catalogo</h1>
            <p className="font-semibold">Navegue por todo conteudo da SFFS</p>
            <div className="flex mt-4 items-start gap-4  md:flex-row flex-col-reverse">
                <div className="w-full flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">     
                 {isPending && <div className="w-full h-96 flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin" /></div>}
                   {data && filterCourses.map((curso:any, index:number)=>(
                        <Link to={`/portal/cursos/${curso.id}`} key={index}>
                            <CourseCardPublic course={curso.course_name}
                                 level={curso.level}
                                structor={curso.structor}
                                structor_about={curso.structor_about}
                                imageCourse={curso.imageCourse}
                                price={curso.price}
                            />
                    </Link>
                   ))}
                </div>
                <div className="w-full md:w-64 sticky">
                    <span className="text-lg">Filtros</span>

                    <div className="mt-4">
                    <Label>Ordem de visualização</Label>
                        <Select onValueChange={(e) => orderBy(e)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione a ordem" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem  value="A">A - Z</SelectItem>
                                <SelectItem value="Z">Z - A</SelectItem>         
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-4">
                        <div className="text-zinc-600">
                            <h3 className="text-sm font-bold text-zinc-800">Nivel</h3>
                            <div className="flex gap-1 flex-1 items-center">
                                <Checkbox checked={basicState} id="basico" onCheckedChange={(checked: boolean) => handleChangeLevel("Basic", checked)} />
                                <label htmlFor="basico" className="text-sm">Básico</label>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Checkbox checked={intermediateState} onCheckedChange={(checked: boolean) => handleChangeLevel("Intermediate", checked)} id="interme" />
                                <label htmlFor="interme" className="text-sm">Intermediario</label>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Checkbox  checked={advancedState} onCheckedChange={(checked: boolean) => handleChangeLevel("Advanced", checked)} id="avancado" />
                                <label htmlFor="avancado" className="text-sm">Avançado</label>
                            </div>
                        </div>
                        <div className="w-full h-[3px] bg-slate-100 my-2"></div>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}