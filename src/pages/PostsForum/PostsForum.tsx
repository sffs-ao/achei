import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircleMore, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function PostsForum() {
    return (
        <div className="flex flex-col max-w-2xl mx-auto">
            <h1 className="font-semibold text-lg">Comunidade - curso de ingles</h1>
            <form className="flex flex-col gap-2 items-start">
                <textarea  className="w-full border shadow-sm rounded-sm  p-2 focus-visible:outline-none" name="" id="" placeholder="Escreva algo..."/>
                <Button>Publicar</Button>
            </form>

            <div className="mt-8">
                <Card>
                  <CardHeader>
                    <Link className="text-blue-800" to="#"><span>Fernando Silva</span></Link>
                  </CardHeader>
                  <CardContent>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe, aperiam esse maiores labore amet consequatur impedit hic enim, quo quia excepturi quae provident dolorem rerum voluptate mollitia officia aliquid <Link className="text-blue-800" to="#">ver mais</Link></p>
                            </div>
                       
                        <div className="flex gap-1 items-center">
                           <Button variant={"outline"} className="flex items-center "><ThumbsUp/> <span>22</span></Button> 
                          <Link to={""}> <Button variant={"outline"} className="flex items-center "><MessageCircleMore/> <span>23</span></Button> </Link>
                         
                        </div>
                  </CardContent>
                    
                </Card>
            </div>
        </div>
    )
}