import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Loader2, MessageCircleMore, ThumbsUp, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { DELETE_COMMENT_FORUM, GET_COMMENT_FORUM, GET_POST_FORUM, GET_POSTS_FORUM, POST_COMMENT, POST_LIKE } from "@/lib/API"
import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useUserContext } from "@/hooks/UserContext"
import { toast } from "react-toastify"
import { ModalDeleteComentario } from "./ModalDeleteComment"
import { ModalDeletePost } from "./ModalDeletePost"
export default function ForumPostPage() {
    const {id, post} = useParams<{id:string, post: string}>()
    const {user} = useUserContext()
    const [comentary, setComentary] = useState("")
    const[modalDeleteComentario, setModalDeleteComentario] = useState(false)
    const [selectedComment, setSelectedComment] = useState(null)
    const {data} = useQuery({
        queryKey: ['post-forum', id, post],
        queryFn: ({queryKey}) => GET_POST_FORUM(queryKey[2])
    })
    const {data:getComment} = useQuery({
        queryKey: ['get-comment', id, post],
        queryFn: ({queryKey}) => GET_COMMENT_FORUM(queryKey[2])
    })

    const {mutateAsync: createComment, isPending} = useMutation({
        mutationFn: POST_COMMENT,
        onSuccess: (data) => {
            console.log("Comentado com sucesso ", data)
            toast.success("Comentando com sucesso")
            client.invalidateQueries({ queryKey: ['get-comment', id, post] });
            setComentary("")
        },
        onError: (error) => {
            console.log("Erro ao comentar ", error)
            toast.error("Erro ao comentar")
        }
    })

    const {mutateAsync: createLike, isPending:isLoadingLike} = useMutation({
        mutationFn: POST_LIKE,
        onSuccess: (data) => {
            console.log("likado com sucesso ", data)
         //   toast.success("Comentando com sucesso")
            client.invalidateQueries({ queryKey: ['post-forum'] });
        },
        onError: (error) => {
            console.log("Erro ao comentar ", error)
            toast.error("Erro ao gostar")
        }
    })
const [modalDeletePost, setDeletePost] = useState(false)
   const client = useQueryClient()
     
    useEffect(() => {
        if (data) {
            console.log("Data ", data, getComment)
        }
    }, [data, getComment])
    async function handleClickComentar() {
        if (comentary === "") {
            alert("Escreva algo")
            return
        }
        await createComment({user_id: user.id, post_id: post, comment: comentary,name: user.name, date: new Date().toISOString()})
    }

    async function handleClickDeleteComentario(id) {
        setSelectedComment(id)
        setModalDeleteComentario(true)
    }

    async function handleClickDeletePost() {
        setDeletePost(true)
    }
    const[selectedPost, setSelectedPost] = useState(null)
    console.log("Data ", data)
    if (!data) {
        return <div>Carregando...</div>
    }  
    async function handleClickLike() {
      await createLike({user_id: user.id, post_id: post})
    }
   
    return (
        <div className="flex flex-col gap-4">
          <Card className="pt-4">
                  <CardContent>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center ">
                                    <div className="flex flex-col">
                                        <span>{data?.data.name}</span>
                                        <span className="text-xs font-bold text-zinc-600">Publicado a {formatDistanceToNow(new Date(data.data.date), {locale: ptBR, addSuffix:true})}</span>
                                    </div>
                                    <span>{data?.data.user_id === user.id && <Button onClick={handleClickDeletePost} variant="outline" className="p-0 px-4"><Trash2 size={18}/></Button>}</span>
                                </div>
                                <p>{data?.data.text}</p>
                            </div>
                       <br />
                       
                  </CardContent>
                    <CardFooter className="p-0 overflow-hidden" >
                       <div className="w-full flex items-center justify-around overflow-hidden">
                           <Button onClick={handleClickLike} variant={"outline"} className="flex items-center p-1 gap-1 justify-center  flex-1 rounded-none"><ThumbsUp/> <span>{data.data.likes.length}</span></Button> 
                           <Button variant={"outline"} className="flex items-center p-1 gap-1 justify-center flex-1 rounded-none"><MessageCircleMore/> <span>{getComment?.data.length}</span></Button> 
                        </div>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <h1 className="font-semibold text-lg">Deixe seu Comentário</h1>
                        <textarea value={comentary} onChange={({target}) => setComentary(target.value)} className="w-full border shadow-sm rounded-sm  p-2 focus-visible:outline-none" name="post" id="" placeholder="Escreva algo..."/>
                    <Button disabled={isPending} onClick={handleClickComentar}>Comentar &nbsp; {isPending && <Loader2 size={16} className="animate-spin"/>}</Button>
                    </CardHeader>
                    <CardContent className="flex flex-col-reverse gap-4">
                       {
                         getComment?.data.map((item) => (   
                        <div key={item.id} className="p-4 shadow rounded-lg w-full flex items-start ">
                            <div className="flex-1 text-sm flex flex-col gap-2">
                               <span>{item.name}</span>
                                <span className="text-xs">{formatDistanceToNow(new Date(item.created_at), {locale: ptBR, addSuffix:true})}</span>
                                <span>{item.comment}</span>
                            </div>
                           {item.user_id === user.id && <Button onClick={()=>handleClickDeleteComentario(item.id)} variant="outline" className=""><Trash2/></Button>}
                       </div>) )
                       }
                     </CardContent>
                </Card>
                <ModalDeleteComentario post={post} id={selectedComment} openModal={modalDeleteComentario} setOpenModal={setModalDeleteComentario}/>
                <ModalDeletePost post={post} id={id} openModal={modalDeletePost} setOpenModal={setDeletePost}/>
        </div>
    )
}