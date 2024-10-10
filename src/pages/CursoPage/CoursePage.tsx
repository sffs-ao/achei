import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { useParams } from "react-router-dom";
import { GET_CLASSES_AVAL, GET_CLASSES_PUBLIC } from "@/lib/API";
import { useQuery } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function CoursePage()
{
    const [course, setCourse] = useState<any>(null);
    const {id} = useParams();
    const {data, isPending} = useQuery({
        queryKey: ["get-my-classes"],
        queryFn: GET_CLASSES_PUBLIC,
    })

    useEffect(()=>{ 
        if(data)
            setCourse(data.courses.find((curso:any)=>curso.id == id))
    }, [data])
    console.log("Data ----------------------- ", course)
    return(
        <div className="w-full  bg-zinc-100">
            <div className="relative bg-[url('/login.jpg')] h-52 w-full bg-center bg-cover flex flex-col justify-center pl-4 brightness-75
            ">
                 <h1 className="text-2xl text-white font-semibold">{course?.course_name}</h1>
                 <p className="font-semibold text-white">Aprenda e tranforme sua carreira profissional</p>
            </div>
            <div className="flex flex-col md:flex-row mt-4 items-start gap-4 w-full">
                    <div className="md:flex-1 flex flex-col gap-2">
                    <div className="border shadow-sm rounded-sm p-4 bg-white">
                            <h1 className="font-semibold">Sobre o curso</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in magni temporibus minus itaque unde non excepturi, quia cum quo praesentium blanditiis fugit nemo ex, earum perferendis sapiente architecto impedit!
                            </p>
                       </div>
                       <div className="border shadow-sm rounded-sm p-4 bg-white">
                            <h1 className="font-semibold">Modulo 1</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae soluta sapiente molestias quisquam voluptate numquam laudantium, quidem non cumque debitis atque sit ipsam quos autem ipsum, porro error animi.
                            </p>
                       </div>

                       <div className="border shadow-sm rounded-sm p-4 bg-white">
                            <h1 className="font-semibold">Modulo 2</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae soluta sapiente molestias quisquam voluptate numquam laudantium, quidem non cumque debitis atque sit ipsam quos autem ipsum, porro error animi.
                            </p>
                       </div>
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
                               <ModalRegisterCourse id={course?.id} title="curso"> <Button className="w-full">Inscrever-se</Button></ModalRegisterCourse>
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




export function ModalRegisterCourse({children, id, title}: {children: React.ReactNode,  id: string, title: string}) {
    const [isOpen, setIsOpen] = useState(false);
    const [turmas, setTurmas] = useState<any[]>([]);
    const {data, isPending} = useQuery({
        queryKey: ["get-aval"],
        queryFn: GET_CLASSES_AVAL,
    })
    console.log("modal regi ",data)
    useEffect(()=>{ 
        if(data){
            const newTurmas = data?.find((curso:any)=>curso.id == id)
            setTurmas(newTurmas)
            console.log("-- turmas ",newTurmas)
        }
    }, [data])
    console.log(turmas)
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
        
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Inscrever-se no de {title}</DialogTitle>
                <DialogDescription>
                    <form action="" className="my-4">
                        <div className="flex items-center flex-col gap-1 items-start">
                        <fieldset className="flex flex-col w-full gap-2 md:flex-1">
                            <Select   
                         >
                            
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione o Horario" />
                                </SelectTrigger>
                                <SelectContent>
                                 <SelectGroup>
                                    <SelectLabel>Selecione o Horário</SelectLabel>
                                    <SelectItem value="0">10:00</SelectItem>
                                    <SelectItem value="1">12:30</SelectItem>
                                    <SelectItem value="2">18:30</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select value="1">            
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Turma" />
                                </SelectTrigger>
                                <SelectContent >
                                 <SelectGroup>
                                    {turmas && turmas?.map((turma, index) => (
                                        <SelectItem key={index} value={turma.id}>{turma.class_name}</SelectItem>
                                    ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                             </fieldset>
                            <div className="flex gap-1 items-start justify-start w-full mt-1">
                                <Button type="submit">Inscrever-se</Button>
                                <DialogClose asChild>
                                    <Button variant={"outline"}  type="button" >Cancelar</Button>
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