import { Loader2, Lock, MessageCircleMore, PencilRuler, Trash2, Users2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_COMMENT_FORUM, DELETE_POST_FORUM, GET_MY_CLASSES } from "@/lib/API";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function ModalDeletePost({openModal, setOpenModal, id, post}: {post: string, openModal: boolean, setOpenModal: (value:boolean) => void, id: string}) {
    const client = useQueryClient()
    const navigate = useNavigate()
    const {mutateAsync: deletePost, isPending} = useMutation({
        mutationFn: DELETE_POST_FORUM,
        onSuccess: (data) => {
            console.log("Removido Comentado com sucesso ", id, post)
            toast.success("publicação removida")
            client.invalidateQueries({ queryKey: ['post-forum'] });
            setOpenModal(false)
            navigate(`/portal/forum/${id}`)
        },
        onError: (error) => {
            console.log("Erro ao comentar ", error)
            toast.error("Erro ao remover a publicação")
        }
    })
    async function handleClick() {
        await deletePost(post)   
    }
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent>
            <DialogHeader className="flex flex-col items-center justify-center">
                <Trash2 width={24} className="text-red-600"/>
                <h1 className="font-bold text-md text-center">Apagar Publicação</h1>
            </DialogHeader>
                <p className="text-center">Tem a certeza que deseja eliminar essa publicação?</p>
                <DialogFooter>
                    <div className="flex gap-2 items-end justify-center w-full">
                        <Button onClick={()=>setOpenModal(false)} variant={"outline"}>Fechar</Button>
                        <Button disabled={isPending} onClick={handleClick} className="bg-red-800">Apagar {isPending && <Loader2 size={16} className="animate-spin"/>}</Button>
                    </div>
                 </DialogFooter>
            </DialogContent>
           
        </Dialog>
    )
}