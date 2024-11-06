import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { useParams } from "react-router-dom";
import { GET_CLASSES_AVAL, GET_CLASSES_PUBLIC, GET_CONTENT_COURSE, GET_COURSE_ONE, REGISTER_CLASS } from "@/lib/API";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { ClassDetails, CourseContent, CourseDescription } from "@/lib/utils";
export default function CoursePage() {
    const [course, setCourse] = useState<CourseDescription>();
    const { id } = useParams();
    const { data, isPending } = useQuery({
        queryKey: ["get-classes-p", id],
        queryFn: () => GET_COURSE_ONE(id!),
    })
 
    if(data)
        console.log("Data ",data )
    

    useEffect(() => {
        if (data)
            setCourse(data)
    }, [data])
/*
    useEffect(() => {
        if (content)
        console.log("Data ----------------------- ", content)
    }, [content])*/

    console.log("Data ----------------------- ", course)
    return (
        <div className="w-full  bg-zinc-100">
            <div className="relative bg-[url('/login.jpg')] h-52 w-full bg-center bg-cover flex flex-col justify-center pl-4 brightness-75
            ">
                <h1 className="text-2xl text-white font-semibold">{data?.course?.course_name}</h1>
                <p className="font-semibold text-white">Aprenda e tranforme sua carreira profissional</p>
            </div>
            <div className="flex flex-col md:flex-row mt-4 items-start gap-4 w-full">
                <div className="md:flex-1 flex flex-col gap-2">
                   {!data?.course.contents && <div className="border shadow-sm rounded-sm p-4 bg-white">
                    Nenhum conteudo disponivel
                    </div>}
                   
                    {data?.course.contents?.map((content: CourseContent, index: number) => (
                        <div key={index} className="border shadow-sm rounded-sm p-4 bg-white">
                            <h1 className="font-semibold">{content.title}</h1>
                            <ul className="list-disc pl-5">
                                {content.contents.map((item:string, idx:number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="italic">{content.obsarvations}</p>
                        </div>
                    ))}
                   
                </div>

                <div className="w-full gap-2 md:w-80 flex flex-col">
                    <Card>
                        <CardHeader>
                            <h1 className="font-semibold text-wrap break-words overflow-hidden text-ellipsis">{course?.course.course_name}</h1>
                        </CardHeader>
                        <CardContent>
                            por apenas: <span className="text-green-800 font-bold"><span className="text-green-900">{course?.course?.price}</span>kz</span>
                        </CardContent>
                        <CardFooter>
                            <ModalRegisterCourse  course={course!}> <Button className="w-full">Inscrever-se</Button></ModalRegisterCourse>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h1 className="font-semibold">Requisitos</h1>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col">
                                <span className="flex gap-2">Documento: {course && JSON.parse(course?.course.prerequisites.id_documentation.toString()).map((id) => <span className="bg-green-700 text-white p-1 rounded-md text-sm font-bold">{id}</span>)}</span>
                                <span>Escolaridade: {course?.course.prerequisites.school}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}




export function ModalRegisterCourse({ children, course }: { children: React.ReactNode, course:CourseDescription}) {
    const [isOpen, setIsOpen] = useState(false);
    const [turmas, setTurmas] = useState<any[]>([]);
    const [horario, setHorario] = useState("0") 
    const [classes, setClasses] = useState<ClassDetails>();
 
    const {mutateAsync: signCourse, isPending: isPendingCreate} = useMutation({
        mutationFn: REGISTER_CLASS,
        
        onSuccess(data){
            console.log(data)
             if (data.error) {
                toast.error("Nao foi possivel inscrever-se"); return;
             }
             toast.success("Foi inscrito com sucesso")
        },
        onError(error){
            toast.error("Nao foi possivel inscrever-se")
            console.log(error);
        }
    })

    function setSelectedClasse(id : string){
        setClasses(course.course.open_classes.find(turma => turma.class_id.toString() === id))
    }
    function handleClick() {
       if (horario === "0") {
           toast.error("Selecione um horario")
           return;
       }
        signCourse({class_id: classes!.class_id.toString()})
    }


    function handleChange(e) {
        setHorario(e.target.value); 
        setSelectedClasse(e.target.value) 
    }
   
    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Inscrever-se no de {course?.course?.course_name}</DialogTitle>
                        <DialogDescription>
                            <form action="" className="my-4">
                                <div className="flex items-center flex-col gap-1">
                                    <fieldset className="flex flex-col w-full gap-2 md:flex-1">
                                        <select
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                                            value={horario}
                                            onChange={handleChange}
                                        >
                                          <option value={0} >Selecione o Horario</option>
                                            {course?.course.open_classes?.length > 0 ? (
                                                course.course.open_classes.map((turma, index) => (
                                                    <option className="p-4" key={index} value={turma.class_id.toString()}>
                                                        Início: {turma.shift?.start_time?.substring(0, 5)} | Término: {turma.shift?.end_time?.substring(0, 5)}
                                                    </option>
                                                ))
                                            ) : (
                                                <option  value="-1">Nenhum horário disponível</option>
                                            )}
                     
                                        </select>
                                        <Input readOnly value={`Turma: ${classes?.class_name}`} />
                                        <Input readOnly value={`Curso: ${course?.course?.course_name}`} />
                                        <Input readOnly value={`Data de Inicio da turma: ${classes?.start_date}`} />
                                    </fieldset>
                                    <div className="flex gap-1 items-start justify-start w-full mt-2">
                                        <Button onClick={handleClick}  type="button">Inscrever-se</Button>
                                        <DialogClose asChild>
                                            <Button variant={"outline"} type="button" >Cancelar</Button>
                                        </DialogClose>
                                    </div>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}