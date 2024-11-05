import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { UserContext, useUserContext } from "@/hooks/UserContext";
import { GET_ONE_QUIZ, POST_QUESTION } from "@/lib/API";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getDate, set } from "date-fns";
import { CheckCircle2, Loader2, PencilRuler } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook"
import DonutChart from "./Donot";

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

    const {id, class_id} = useParams<{id: string,class_id:string}>();
    const { user } = useUserContext();
    const { data: getQuiz, isPending: isPedingQuiz } = useQuery({
        queryKey: ["get-one-quiz-id", id],
        queryFn: () => GET_ONE_QUIZ(id!),
    })
    const[actualItem, setActualItem] = useState(null);
    const[submitedQuestions, setSubmitedQuestions] = useState([])
    const[items, setItems] = useState([]);
    const[openModalFinal, setOpenModalFinal] = useState(false);
    const initExpirationTimestamp = new Date();
    const { seconds, minutes, hours ,restart} = useTimer({ expiryTimestamp: initExpirationTimestamp, onExpire: ()=> alert("final")  });
    useEffect(() => { if(getQuiz)
    console.log("Data ",getQuiz )
    initExpirationTimestamp.setSeconds(initExpirationTimestamp.getSeconds() + Number(1) * 60);
    restart(initExpirationTimestamp);
    setItems(getQuiz?.data.question);
    setActualItem(getQuiz?.data.question[0]);
}, [ getQuiz]);
 
    const[selectedOption, setSelectedOption] = useState(null);
    const[progress,setProgress] = useState(0);
    useEffect(() => {
        const totalTime = Number(getQuiz?.data.time) * 60; // total em segundos
        const timeElapsed = totalTime - (hours * 3600 + minutes * 60 + seconds); // tempo restante
        const progressPercent = (timeElapsed / totalTime) * 100;
        setProgress(progressPercent);
}, [seconds, minutes, hours, getQuiz]);
const[position, setPosition] = useState(0);

const {mutateAsync: postQuestion, isPending} = useMutation({
    mutationFn: POST_QUESTION,
    onSuccess: (data)=> {
        console.log(data);
        setSubmitedQuestions([...submitedQuestions, data]);
        if(position === items?.length - 1) {
            setOpenModalFinal(true);
            return;
        }
    },
    onError: (error)=> {
        console.log(error);
    },
})
async function handleAnswer() {

await postQuestion({classroom_id: class_id, course_id:getQuiz.data.course_id, user_id: user.id,question_id:actualItem.id, response_id: selectedOption.id});


    

      setPosition(prevPosition => {
        const newPosition = prevPosition + 1;
        setActualItem(items[newPosition]);
        console.log("Position", items[newPosition]);
        return newPosition;
    }); 
}
console.log("Actual Item", selectedOption);
 
    return (
        <div className="flex flex-col justify-center items-center w-[920px] max-w-full mx-auto">
       <ModalFinalized openModal={openModalFinal} setOpenModal={setOpenModalFinal} />
            <h1 className="mt-4">{getQuiz?.data.title}</h1>
        <Card className="w-full mx-auto mt-10 overflow-hidden">
            <div className="bg-green-600 h-2 "  style={{ width: `${progress}%` }}></div>
            <CardHeader className="grid grid-cols-1 gap-2 items-center justify-center">
              <div className="text-left flex justify-between">
                <span className="text-md">Questão {position + 1} de {items?.length}</span>
                <span className={` ${minutes < 5 ? "text-red-700" : "text-sm text-zinc-700"} font-bold`}>Tempo restante {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span>
              </div>

              <div className="font-bold"><span>{actualItem?.question}</span>
              </div>
            </CardHeader>
            <CardContent className="flex justify-start   items-start flex-col text-center gap-2 w-full">
                 {
                    actualItem?.item.map((item, index) => (
                        <div className="w-full" key={index}>
                            <label className={`${selectedOption?.id === item.id ? "border-green-500 border-2 " : "border-zinc-400" } h-14 rounded-md flex items-center px-2 text-black hover:bg-black/5 cursor-pointer shadow-sm border justify-between`}>
                               <div>
                                    <input   onChange={(e) => setSelectedOption(item) }  type="radio"  name="quiz-option" className="mr-2 invisible" />
                                    <span>{item.response}</span>
                               </div>
                                {selectedOption?.id === item.id && <CheckCircle2 className="text-green-700" />}
                            </label>
                        </div>  
                    ))
                }
                <div className="flex gap-2 w-full items-center justify-center ">
                    <Button variant={"outline"}>Desistir</Button>
                    <Button disabled={isPending}  className="flex items-center" onClick={handleAnswer}>Confirmar {isPending && <Loader2 className="animate-spin" /> }</Button>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}


function ModalFinalized({
   openModal,
   setOpenModal 
}: {openModal: boolean, setOpenModal: (value:boolean) => void}) {
    return (
        <Dialog  open={openModal} onOpenChange={setOpenModal}>
        <DialogContent>
        <DialogHeader className="flex flex-col items-center justify-center">
            <PencilRuler width={24} className="text-red-600"/>
            <h1 className="font-bold text-md text-center text-2xl">Parabens!</h1>
        </DialogHeader>
            <p className="text-center">Voce chegou ao fim do Quiz</p>
            <div className=" justify-center items-center w-full">
                <DonutChart />
            </div>
            <DialogFooter>
                <div className="flex gap-2 items-end justify-center w-full">
                    <Button onClick={()=>setOpenModal(false)} variant={"outline"}>Voltar</Button>
                </div>
             </DialogFooter>
        </DialogContent>
       
    </Dialog>
    )
}