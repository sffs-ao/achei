import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircleMore, ThumbsUp, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { GET_POST_FORUM, GET_POSTS_FORUM } from "@/lib/API"
import { useEffect } from "react"

export default function ForumPostPage() {
    const {id, post} = useParams<{id:string, post: string}>()
    const {data} = useQuery({
        queryKey: ['post-forum', id, post],
        queryFn: ({queryKey}) => GET_POST_FORUM(queryKey[2])
    })

    useEffect(() => {
        if (data) {
            console.log("Data ", data)
        }
    }, [data])
    return (
        <div className="flex flex-col gap-4">
          <Card className="pt-4">
                  <CardContent>
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-bold text-zinc-600">Publicado a {data?.data.date}</span>
                                <p>{data?.data.text}</p>
                            </div>
                       <br />
                       
                  </CardContent>
                    <CardFooter className="p-0 overflow-hidden" >
                       <div className="w-full flex items-center justify-around overflow-hidden">
                           <Button variant={"outline"} className="flex items-center p-1 gap-1 justify-center  flex-1 rounded-none"><ThumbsUp/> <span>{9}</span></Button> 
                           <Button variant={"outline"} className="flex items-center p-1 gap-1 justify-center flex-1 rounded-none"><MessageCircleMore/> <span>{Array(data?.data.comments).length}</span></Button> 
                        </div>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <h1 className="font-semibold text-lg">Deixe seu Comentário</h1>
                        <textarea className="w-full border shadow-sm rounded-sm  p-2 focus-visible:outline-none" name="post" id="" placeholder="Escreva algo..."/>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                       <div className="p-4 shadow rounded-lg w-full flex items-start ">
                            <p className="flex-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium magnam architecto magni, tempora libero delectus commodi similique maxime ipsum nemo ut quidem animi voluptatum debitis dolor ullam voluptates! Quo.</p>
                            <Button variant="outline" className=""><Trash2/></Button>
                       </div>

                       <div className="p-4 shadow rounded-lg w-full flex items-start ">
                            <p className="flex-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium magnam architecto magni, tempora libero delectus commodi similique maxime ipsum nemo ut quidem animi voluptatum debitis dolor ullam voluptates! Quo.</p>
                       </div>
                     </CardContent>
                </Card>
        </div>
    )
}