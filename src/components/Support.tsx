import { Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";

interface SupportProps{
    closeSupport: ()=>void 
}
export default function Support({closeSupport}: SupportProps) {
    return (
        <Card className="absolute bottom-4 right-4 max-w-sm shadow-lg">
            <CardHeader className="relative">
                <h1>Suporte</h1>
                <Button className="absolute right-0 top-0" variant={"ghost"} onClick={closeSupport}><X/></Button>
            </CardHeader>
            <CardContent className="flex flex-col h-[calc(100vh-300px)] ">
                <div className="flex flex-col flex-1 overflow-y-auto mb-4">
                    <div className="bg-zinc-200 text-black max-w-full w-fit rounded-lg my-4 p-4">
                        <p>
                            ola, em que podemos ajudar?
                        </p>
                      
                    </div>
                </div>
                <div className="h-10">
                        <form className="flex">
                            <Input required  className="focus-visible:ring-0 rounded-r-none" type="text" placeholder="Pergunte algo" />
                            <Button className="rounded-l-none"><Send/></Button>
                        </form>
                </div>      
               
            </CardContent>
        </Card>
    )
}