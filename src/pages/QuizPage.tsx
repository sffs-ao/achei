import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
/*
export default function QuizPage() {
    return (
        <div className="flex justify-center items-center">
            <Card className="max-w-lg mx-auto mt-40">
                <CardHeader className="flex flex-col gap-2 items-center">
                  <h1 className="font-bold text-lg">Testando seu conhecimento ✨</h1>
                </CardHeader>
                <CardContent className="flex justify-center items-center flex-col text-center gap-2">
                    <p>
                        Voce conseguiu aprender o suficiente durante essa jornada? teste o seu conhecimento fazendo um joguinho
                    </p>
                   <Button>Iniciar Quiz</Button>
                </CardContent>
            </Card>
        </div>
      
    )
}
*/

export default function QuizPage() {
    return (
        <div className="flex justify-center items-center w-[600px] mx-auto">
        <Card className="w-full mx-auto mt-40 ">
            <CardHeader className="grid grid-cols-2 gap-2 items-center items-center">
              <div className="text-left"><span className="font-bold">Questão 1</span></div> <div className="text-right">Tempo restante 00:10</div>
            </CardHeader>
            <CardContent className="flex justify-start   items-start flex-col text-center gap-2 w-full">
                <p>Qual a sintaxe correcta?</p>
                <div className="w-full">
                    <div className="border-green-700  h-10 rounded-md flex items-center px-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border justify-between "><span>{"{array.map((item)=> />}"}</span> <span><CheckCircle2 className="text-green-700"/></span></div>
                </div>
                <div className="w-full">
                    <div className=" h-10 rounded-md flex items-center  pl-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border justify-between "><span>{"{array.find((item)=> />}"}</span></div>
                </div>
                <div className="w-full">
                    <div className=" h-10 rounded-md flex items-center justify-start pl-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border "><span>{"{array.filter((item)=> />}"}</span></div>
                </div>
                <div className="w-full">
                    <div className=" h-10 rounded-md flex items-center justify-start pl-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border "><span>{"{array.forEach((item)=> />}"}</span></div>
                </div>
                <div className="flex gap-2 w-full items-center justify-center ">
                    <Button variant={"outline"}>Desistir</Button>
                    <Button>Confirmar</Button>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}