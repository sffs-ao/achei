import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { useParams } from "react-router-dom";
import { GET_CLASSES_AVAL, GET_CLASSES_PUBLIC, GET_CONTENT_COURSE, REGISTER_CLASS } from "@/lib/API";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { CourseContent } from "@/lib/utils";
export default function CoursePage() {
    const [course, setCourse] = useState<any>(null);
    const { id } = useParams();
    const { data, isPending } = useQuery({
        queryKey: ["get-classes-p"],
        queryFn: GET_CLASSES_PUBLIC,
    })

    const {data: content, isPending:isLoadingContent} = useQuery({
        queryKey: ["get-view-course", id],
        queryFn: ()=>GET_CONTENT_COURSE(id!),
    })
    if(data)
        console.log("Data ",data )
    

    useEffect(() => {
        if (data)
            setCourse(data.courses.find((curso: any) => curso.id == id))
    }, [data])

    useEffect(() => {
        if (content)
        console.log("Data ----------------------- ", content)
    }, [content])
    console.log("Data ----------------------- ", course)
    return (
        <div className="w-full  bg-zinc-100">
            <div className="relative bg-[url('/login.jpg')] h-52 w-full bg-center bg-cover flex flex-col justify-center pl-4 brightness-75
            ">
                <h1 className="text-2xl text-white font-semibold">{course?.course_name}</h1>
                <p className="font-semibold text-white">Aprenda e tranforme sua carreira profissional</p>
            </div>
            <div className="flex flex-col md:flex-row mt-4 items-start gap-4 w-full">
                <div className="md:flex-1 flex flex-col gap-2">
                   
                   
                    {content?.contents.map((content: CourseContent, index: number) => (
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
                            <h1 className="font-semibold text-wrap break-words overflow-hidden text-ellipsis">{course?.course_name}</h1>
                        </CardHeader>
                        <CardContent>
                            por apenas: <span className="text-green-800 font-bold"><span className="text-green-900">{course?.price}</span>kz</span>
                        </CardContent>
                        <CardFooter>
                            <ModalRegisterCourse id={course?.course_name} title="curso"> <Button className="w-full">Inscrever-se</Button></ModalRegisterCourse>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h1 className="font-semibold">Requisitos</h1>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col">
                                <span>Documento: Bilhete de identidade</span>
                                <span>Escolaridade: 10 classe</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}




export function ModalRegisterCourse({ children, id, title }: { children: React.ReactNode, id: string, title: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [turmas, setTurmas] = useState<any[]>([]);
    const [horario, setHorario] = useState("0")
    const [selectedClasse, setSelectedClasse] = useState<object>({})

    const { data, isPending } = useQuery({
        queryKey: ["get-aval"],
        queryFn: GET_CLASSES_AVAL,
    })
    function filterClasse(idTurma: string) {
        console.log(turmas, idTurma)
        return (turmas.find((t) => t.id == idTurma))
    }
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

    useEffect(() => {
        if (data) {
            const newTurmas = data?.filter((curso: any) => curso.course_name === id)
            setTurmas(newTurmas)
        }
    }, [data])
    function handleClick() {
        signCourse({class_id: selectedClasse.id})
    }
    return (
        <>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Inscrever-se no de {title}</DialogTitle>
                        <DialogDescription>
                            <form action="" className="my-4">
                                <div className="flex items-center flex-col gap-1">
                                    <fieldset className="flex flex-col w-full gap-2 md:flex-1">
                                        <Select
                                            value={horario}
                                            onValueChange={(e) => { setHorario(e); setSelectedClasse({ id: e }); setSelectedClasse(filterClasse(e)) }}
                                        >

                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o Horario" />
                                            </SelectTrigger>
                                            <SelectContent className="text-black">
                                                <SelectGroup>
                                                    <SelectItem value={"0"}>Selecione o Horário</SelectItem>
                                                    {turmas?.map((turma, index) => (
                                                        <SelectItem key={index} value={turma.id.toString()}>Inicio: {turma.start_time} | Término: {turma.end_time}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <Input readOnly value={`Turma: ${selectedClasse?.class_name}`} />
                                        <Input readOnly value={`Curso: ${selectedClasse?.course_name}`} />
                                        <Input readOnly value={`Data de Inicio da turma: ${selectedClasse?.start_date}`} />
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