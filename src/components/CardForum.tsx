import { Lock, MessageCircleMore, PencilRuler, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Dialog, DialogHeader , DialogContent, DialogFooter} from "./ui/dialog";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GET_MY_CLASSES } from "@/lib/API";

 
interface ModalForumSign{
    openModal: boolean,
    setOpenModal: (value:boolean) => void,
    id: string
    
}
export default function CardForum({title, id, handleClick}: {title:string, id: number, handleClick: (id: number) => void}) {
    const navigate = useNavigate()
   
    const[openModal, setOpenModal] = useState(false)
 
    return (
        <>
        <Card onClick={()=>handleClick(id)} className="hover:ring-1 ring-blue-600 transition-all cursor-pointer">
            <span className="text-xs font-mono text-zinc-600 p-6">Comunidade</span>
            <CardHeader className="overflow-hidden">
                <h1 className="font-semibold ">{title}</h1>
            </CardHeader>
            <CardContent className="flex text-zinc-800 gap-2">
                <div className="flex text-xs items-center"><MessageCircleMore width={18}/> <span>25</span></div>
                <div className="flex text-xs items-center"><Users2 width={18}/> <span>06</span></div>
            </CardContent>   
    </Card>
    
    </>
    )
}

export function ModalForumSign({openModal, setOpenModal, id}: ModalForumSign) {
    return (
        <Dialog  open={openModal} onOpenChange={setOpenModal}>
            <DialogContent>
            <DialogHeader className="flex flex-col items-center justify-center">
                <PencilRuler width={24} className="text-red-600"/>
                <h1 className="font-bold text-md text-center">Conteudo exclusivo para alunos inscritos nesse curso</h1>
            </DialogHeader>
                <p className="text-center">Matricule-se neste curso agora e tenha acesso a essa comunidade</p>
                <DialogFooter>
                    <div className="flex gap-2 items-end justify-center w-full">
                        <Button onClick={()=>setOpenModal(false)} variant={"outline"}>Fechar</Button>
                        <Link to={`/portal/cursos/${id}`}> <Button className="bg-blue-800">Matricula-se &nbsp; <Lock size={18}/></Button></Link>
                    </div>
                 </DialogFooter>
            </DialogContent>
           
        </Dialog>
    )
}