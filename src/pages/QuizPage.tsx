import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GET_ONE_QUIZ } from "@/lib/API";
import { useQuery } from "@tanstack/react-query";
import { getDate } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook"

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

    const {id} = useParams<{id: string}>();
    const { data: getQuiz, isPending: isPedingQuiz } = useQuery({
        queryKey: ["get-one-quiz-id", id],
        queryFn: () => GET_ONE_QUIZ(id!),
    })
    const[items, setItems] = useState([]);
    const initExpirationTimestamp = new Date();
    const { seconds, minutes, hours, start, pause ,restart} = useTimer({ expiryTimestamp: initExpirationTimestamp, onExpire: ()=> alert("final")  });
    useEffect(() => { if(getQuiz)
    console.log("Data ",getQuiz )
    initExpirationTimestamp.setSeconds(initExpirationTimestamp.getSeconds() + 1* 60);
    restart(initExpirationTimestamp);
    
    setItems(getQuiz?.data.question);
    
}, [ getQuiz]);
    const[progress,setProgress] = useState(0);
    useEffect(() => {
    // Calcular a porcentagem de progresso
    const totalTime = Number(getQuiz?.data.time) * 60; // total em segundos
    const timeElapsed = totalTime - (hours * 3600 + minutes * 60 + seconds); // tempo restante
    const progressPercent = (timeElapsed / totalTime) * 100;
 console.log("Items")
    setProgress(progressPercent);
}, [seconds, minutes, hours, getQuiz]);

function handleAnswer() {
    // Verificar se a resposta está correta
}
    return (
        <div className="flex flex-col justify-center items-center w-[600px] max-w-full mx-auto">
            <h1 className="mt-4">{getQuiz?.data.title}</h1>
        <Card className="w-full mx-auto mt-10 overflow-hidden">
            <div className="bg-green-600 h-2 "  style={{ width: `${progress}%` }}></div>
            <CardHeader className="grid grid-cols-2 gap-2 items-center i">
              <div className="text-left"><span className="font-bold">Questão 1</span></div> <div className="text-right">Tempo restante <span className={` ${minutes < 5 ? "text-red-700" : "text-zinc-700"} `}>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span></div>
            </CardHeader>
            <CardContent className="flex justify-start   items-start flex-col text-center gap-2 w-full">
                <p>Qual a sintaxe correcta</p>
                <div className="w-full">
                    <label className="border-green-700 h-10 rounded-md flex items-center px-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border justify-between">
                        <input type="radio" name="quiz-option" className="mr-2" />
                        <span>{"{array.map((item)=> />}"}</span>
                        <CheckCircle2 className="text-green-700" />
                    </label>
                </div>
                <div className="w-full">
                    <label className="h-10 rounded-md flex items-center pl-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border justify-between">
                        <input type="radio" name="quiz-option" className="mr-2" />
                        <span>{"{array.find((item)=> />}"}</span>
                    </label>
                </div>
                <div className="w-full">
                    <label className="h-10 rounded-md flex items-center justify-start pl-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border">
                        <input type="radio" name="quiz-option" className="mr-2" />
                        <span>{"{array.filter((item)=> />}"}</span>
                    </label>
                </div>
                <div className="w-full">
                    <label className="h-10 rounded-md flex items-center justify-start pl-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border">
                        <input type="radio" name="quiz-option" className="mr-2" />
                        <span>{"{array.forEach((item)=> />}"}</span>
                    </label>
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