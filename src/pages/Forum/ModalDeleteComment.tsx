import { Lock, MessageCircleMore, PencilRuler, Trash2, Users2 } from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DELETE_COMMENT_FORUM, GET_MY_CLASSES } from "@/lib/API";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

 

export function ModalDeleteComentario({openModal, setOpenModal, id, post}: {post: string, openModal: boolean, setOpenModal: (value:boolean) => void, id: string}) {
    const client = useQueryClient()

    const {mutateAsync: deleteComment} = useMutation({
        mutationFn: DELETE_COMMENT_FORUM,
        onSuccess: (data) => {
            console.log("Removido Comentado com sucesso ", data)
            toast.success("Comentário removido")
            client.invalidateQueries({ queryKey: ['get-comment', id, post] });
        },
        onError: (error) => {
            console.log("Erro ao comentar ", error)
            toast.error("Erro ao remover comentário")
        }
    })

    async function handleClick() {
        await deleteComment({id})   
    }
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent>
            <DialogHeader className="flex flex-col items-center justify-center">
                <Trash2 width={24} className="text-red-600"/>
                <h1 className="font-bold text-md text-center">Apagar comentário</h1>
            </DialogHeader>
                <p className="text-center">Tem a certeza que deseja eliminar esse comentario?</p>
                <DialogFooter>
                    <div className="flex gap-2 items-end justify-center w-full">
                        <Button onClick={()=>setOpenModal(false)} variant={"outline"}>Fechar</Button>
                        <Button onClick={handleClick} className="bg-blue-800">Apagar</Button>
                    </div>
                 </DialogFooter>
            </DialogContent>
           
        </Dialog>
    )
}