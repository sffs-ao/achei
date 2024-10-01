import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1 className="mb-8">Olá, Fernando! </h1>
            <div className="grid  items-start gap-4">
                <Card>
                    <CardHeader>
                        <span>Meu perfil</span>
                    </CardHeader>
                    <CardContent>
                        <Button>Ver perfil</Button>
                        <div className="mt-4">
                            <span className="font-semibold text-zinc-900 text-md">Nivel básico</span>
                            <div className="bg-zinc-300 w-full h-6 rounded-lg  relative">
                                <div className="h-6 bg-green-500 rounded-lg w-1/4 ">
                                    <span className="text-xs font-semibold absolute right-2/4 top-2/4 translate-x-2/4 -translate-y-2/4 ">25%</span>
                                </div>
                            </div>
                        </div>
                    
                    </CardContent>
                </Card>

                <div className="flex flex-col max-md:mt-8 md:max-w-[512px]">
                    <h1 className="mb-2">Agenda</h1>
                    <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto">

                     <Link to="">
                        <div className="h-20 flex rounded-sm overflow-hidden">
                            <div className="bg-primary flex flex-col items-center p-4 text-white" >
                                    <span className="text-2xl font-semibold">26</span>
                                    <span className="text-sm ">setembro</span>
                                </div> 
                                <div className="flex pl-4 flex-col border shadow-sm w-full justify-center">
                                    <span className="font-semibold">Exame final</span>
                                    <span className="text-sm text-zinc-700">11:00 AM</span>
                                </div>
                            </div>
                     </Link>
                    

               

                    </div>
                </div>
            </div>
        </div>
    )
}