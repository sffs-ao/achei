import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { useParams } from "react-router-dom";
import { GET_CLASSES_AVAL, GET_CLASSES_PUBLIC } from "@/lib/API";
import { useQuery } from "@tanstack/react-query";
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
    console.log("Data ",course )
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
                                <h1 className="font-semibold">{course?.course_name}</h1>                        
                            </CardHeader>
                            <CardContent>
                                por apenas: <span className="text-green-800 font-bold"><span className="text-green-900">{course?.price}</span>kz</span>
                            </CardContent>
                            <CardFooter>
                               <ModalRegisterCourse id="" title="curso"> <Button className="w-full">Inscrever-se</Button></ModalRegisterCourse>
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
    useEffect(()=>{ 
        if(data){
            const newTurmas = data.courses.find((curso:any)=>curso.id == id).turmas
            setTurmas(newTurmas)
            console.log(newTurmas)
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
                        <div className="flex items-center">
                            <Button type="button">Cancelar</Button>
                            <Button type="submit" className="bg-zinc-100 rounded-l-none">Inscrever-se</Button>
                        </div>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
        </>
    );
}