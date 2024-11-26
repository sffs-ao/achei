import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUserContext } from "@/hooks/UserContext";
import { GET_POSTS_FORUM, POST_FORUM_POST, POST_LIKE } from "@/lib/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Loader2, MessageCircleMore, ThumbsUp } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function PostsForum() {
    const {id , post} = useParams<{id:string, post: string}>()
    const{user} = useUserContext()
   const useClient = useQueryClient()
    const {mutateAsync: createPost, isPending} = useMutation({
        mutationFn: POST_FORUM_POST,
        onSuccess: (data) => {
            toast.success("Postado com sucesso")
            console.log("Postado com sucesso ", data )
            useClient.invalidateQueries({ queryKey: ['posts-forum', id] });
        },
        onError: (error) => {
            toast.error("Erro ao postar")
            console.log("Erro ao postar ", error)
        }
    })

    const {data} = useQuery({
        queryKey: ['posts-forum', id],
        queryFn: ({queryKey}) => GET_POSTS_FORUM(queryKey[1])
    })
   console.log("User ", user)

   useEffect(() => {
         if (data) {
              console.log("Data ", data)
         }
   }, [data])
    function handleSubmit(params:FormEvent) {
        params.preventDefault();
        const form = params.currentTarget as HTMLFormElement;
        const post = (form.elements.namedItem("post") as HTMLTextAreaElement);
        createPost({course_id:id, user_id: user.id,name: user.name, text: post.value, user_type: 2, date: new Date().toISOString()})
        post.value = ""
    }
    const client = useQueryClient()
    const[seletedPost, setSelectPost] = useState(null)

    const {mutateAsync: createLike, isPending: isLoadingLike} = useMutation({
        mutationFn: POST_LIKE,
        onSuccess: (data) => {
            console.log("likado com sucesso ", data)
            useClient.invalidateQueries({ queryKey: ['posts-forum', id] });
        },
        onError: (error) => {
            console.log("Erro ao comentar ", error)
            toast.error("Erro ao gostar")
        }
    })

    async function handleClickLike(id) {
        await createLike({user_id: user.id, post_id: id})
    }
     
    return (
        <div className="flex flex-col max-w-2xl mx-auto">
            <h1 className="font-semibold text-lg">Comunidade - curso de ingles</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-start">
                <textarea  required className="w-full border shadow-sm rounded-sm  p-2 focus-visible:outline-none" name="post" id="" placeholder="Escreva algo..."/>
                <Button disabled={isPending} type="submit">Publicar {isPending && <Loader2 className="animate-spin"/>}</Button>
            </form>

            <div className="mt-8 flex  gap-4 flex-col-reverse">
                { data && data.data.map((item) => (
                <Card className="pt-4" key={item.id}>
                  <CardHeader>
                    <Link to={`/portal/forum/${id}/${item.id}`} className="flex items-center gap-2 text-blue-800 font-bold" > <span>{item.name}</span></Link>
                    <span className="text-xs font-bold text-zinc-600">Publicado a {formatDistanceToNow(new Date(item.date), {locale: ptBR, addSuffix:true})}</span>
                    </CardHeader>
                  <CardContent>
                            <div>
                                <p>{item.text}</p>
                            </div>
                       <br />
                        <div className="flex gap-1 items-center">
                        
                           <Button onClick={()=>handleClickLike(item.id)} variant={"outline"} className="flex items-center "><ThumbsUp/> <span>{item.likes.length}</span></Button> 
                          <Link to={`/portal/forum/${id}/${item.id}`}> <Button variant={"outline"} className="flex items-center "><MessageCircleMore/> <span>{item.comments.length}</span></Button> </Link>
                         
                        </div>
                  </CardContent>
                    
                </Card>
                ) )
                }
            </div>
        </div>
    )
}