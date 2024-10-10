import { MessageCircleMore, PencilRuler, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Dialog, DialogHeader , DialogContent, DialogFooter} from "./ui/dialog";

import { useState } from "react";
import { Button } from "./ui/button";

 
interface ModalForumSign{
    openModal: boolean,
    setOpenModal: (value:boolean) => void,
    
}
export default function CardForum({title}: {title:string}) {
    const[openModal, setOpenModal] = useState(false)
    function handleClick() {
        setOpenModal(!openModal)
    }
    return (
        <>
        <Card onClick={handleClick} className="hover:ring-1 ring-blue-600 transition-all cursor-pointer">
            <span className="text-xs font-mono text-zinc-600 p-6">Comunidade</span>
            <CardHeader><h1 className="font-semibold">{title}</h1></CardHeader>
            <CardContent className="flex text-zinc-800 gap-2">
                <div className="flex text-xs items-center"><MessageCircleMore width={18}/> <span>25</span></div>
                <div className="flex text-xs items-center"><Users2 width={18}/> <span>06</span></div>
            </CardContent>   
    </Card>
    <ModalForumSign openModal={openModal} setOpenModal={setOpenModal}/>
    </>
    )
}

export function ModalForumSign({openModal, setOpenModal}: ModalForumSign) {
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
                        <Button className="bg-blue-800">Matricular-se</Button>
                    </div>
                 </DialogFooter>
            </DialogContent>
           
        </Dialog>
    )
}