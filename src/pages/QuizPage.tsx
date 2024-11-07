import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { UserContext, useUserContext } from "@/hooks/UserContext";
import { GET_ONE_QUIZ, POST_QUESTION } from "@/lib/API";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getDate, set } from "date-fns";
import { CheckCircle2, Loader2, PencilRuler, TimerOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook"
import DonutChart from "./Donot";
import { toast } from "react-toastify";
import { any } from "zod";

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
    const[initExpirationTimestamp,setInitExpirationTimestamp] = useState(new Date());
    const[actualItem, setActualItem] = useState(null);
    const[submitedQuestions, setSubmitedQuestions] = useState([])
    const[items, setItems] = useState([]);
    const[openModalFinal, setOpenModalFinal] = useState(false);
      const { seconds, minutes, hours , isRunning,restart, pause} = useTimer({ expiryTimestamp: initExpirationTimestamp, onExpire: ()=>{ setPosition(0) ; setModalTimeElapsed(true) }});
    useEffect(() => { 
        if(getQuiz){
          console.log("entrou")
          const updatedTimestamp = new Date();
          updatedTimestamp.setSeconds(updatedTimestamp.getSeconds() + 10);
          restart(updatedTimestamp);
        }
    console.log("Data ",getQuiz )
    setItems(getQuiz?.data.question);
    setActualItem(getQuiz?.data.question[0]);
}, [getQuiz]);
 
    const[selectedOption, setSelectedOption] = useState(null);
    const[progress,setProgress] = useState(0);
    useEffect(() => {
        let progressPercent 
        const totalTime = 1 * 10; // total em segundos
        if (hours !== undefined && minutes !== undefined && seconds !== undefined) {
            const timeElapsed = totalTime - (hours * 3600 + minutes * 60 + seconds); // Tempo restante
             progressPercent = Math.max(0, Math.min((timeElapsed / totalTime) * 100, 100)); // Mantém o progresso entre 0 e 100
            setProgress(progressPercent); // Atualiza o progresso
        }
        
}, [seconds, minutes, hours, getQuiz]);
const[position, setPosition] = useState(0);

const {mutateAsync: postQuestion, isPending} = useMutation({
    mutationFn: POST_QUESTION,
    onSuccess: (data)=> {
        console.log(data);
        setSubmitedQuestions([...submitedQuestions, data]);
        setSelectedOption(null);
        if(position === items?.length - 1) {
            console.log(submitedQuestions)
            setOpenModalFinal(true);
            pause()
            return;
        }
    },
    onError: (error)=> {
        console.log(error);
    },
})
async function handleAnswer() {
if (!selectedOption) {
    toast.error("Selecione uma opção para continuar");
    return;
}

await postQuestion({classroom_id: class_id, course_id:getQuiz.data.course_id, user_id: user.id,question_id:actualItem.id, response_id: selectedOption.id});
      setPosition(prevPosition => {
        const newPosition = prevPosition + 1;
        setActualItem(items[newPosition]);
        console.log("Position", items[newPosition]);
        return newPosition;
    }); 
}
 
const[modalTimeElapsed, setModalTimeElapsed] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center w-[920px] max-w-full mx-auto">
      <ModalTimeLapse  openModal={modalTimeElapsed} setOpenModal={setModalTimeElapsed} class_id={class_id} id={id} />
       <ModalFinalized class_id={class_id} items={submitedQuestions}  openModal={openModalFinal} setOpenModal={setOpenModalFinal} />
            <h1 className="mt-4">{getQuiz?.data.title}</h1>
        <Card className="w-full mx-auto mt-10 overflow-hidden">
            <div className={`w-0 ${progress > 50 ? "bg-red-600": "bg-green-600 transition-all"} ${progress < 5 ? "invisible" :"visible" } h-1`}  style={{ width: `${progress}%` }}></div>
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
                                    <input checked={selectedOption?.id === item.id} onChange={(e) => setSelectedOption(item) }  type="radio"  name="quiz-option" className="mr-2 opacity-0" />
                                    <span>{item.response}</span>
                               </div>
                                {selectedOption?.id === item.id && <CheckCircle2 className="text-green-700" />}
                            </label>
                        </div>  
                    ))
                }
                <div className="flex gap-2 w-full items-center justify-center ">
                    <Link to={`/portal/classroom/${class_id}`}><Button variant={"outline"}>Voltar</Button></Link>
                    <Button disabled={isPending}  className="flex items-center" onClick={handleAnswer}>Confirmar {isPending && <Loader2 className="animate-spin" /> }</Button>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}


function ModalFinalized({
   openModal,
   setOpenModal,
   items,
   class_id
}: {openModal: boolean, setOpenModal: (value:boolean) => void, items: any[], class_id: string }) {

    const total_acertos = items.reduce((acc, item) => {
        if(item.status === 1) {
            return acc + 1;
        }
        return acc;
    }, 0);
    const total_erros = items.reduce((acc, item) => {
        if(item.status === 0) {
            return acc + 1;
        }
        return acc;
    }, 0);
     
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-[1920px] w-[70%]">
        <DialogHeader className="flex flex-col items-center justify-center">
            <PencilRuler width={24} className="text-red-600"/>
            <h1 className="font-bold text-md text-center text-6xl max-md:text-2xl">Parabéns!</h1>
        </DialogHeader>
            <p className="text-center">Voce chegou ao fim do Quiz</p>
            <div className=" justify-center items-center w-full">
                <DonutChart acertos={total_acertos} errados={total_erros}/>
            </div>
            <DialogFooter>
                <div className="flex gap-2 items-end justify-center w-full">
                    <Link to={`/portal/classroom/${class_id}`}><Button variant={"outline"}>Desistir</Button></Link>
                </div>
             </DialogFooter>
        </DialogContent>
       
    </Dialog>
    )
}

function ModalTimeLapse({
    openModal,
    setOpenModal,
    id,
    class_id,
 }: {openModal: boolean, setOpenModal: (value:boolean) => void, id: string, class_id: string }) {
    
      return (
         <Dialog open={openModal} onOpenChange={setOpenModal} modal={true}>
         <DialogContent   onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => e.preventDefault()}
 className="max-w-[520px] w-[70%]">
         <DialogHeader className="flex flex-col items-center justify-center">
             <TimerOff width={44} className="text-red-600"/>
             <h1 className="font-bold text-md text-center text-3xl">Tempo Esgostado</h1>
         </DialogHeader>
             <Button onClick={() => window.location.reload()}>Tentar novamente!</Button>
             <DialogFooter>
                 <div className="flex gap-2 items-end justify-center w-full">
                     <Link to={`/portal/classroom/${class_id}`}className="w-full" ><Button className="w-full" onClick={()=>setOpenModal(false)} variant={"outline"}>Desistir</Button></Link>
                 </div>
              </DialogFooter>
         </DialogContent>
        
     </Dialog>
     )
 }


 function ModalInitQuiz({
    openModal,
    setOpenModal,
    id,
    class_id,
 }: {openModal: boolean, setOpenModal: (value:boolean) => void, id: string, class_id: string }) {
    
      return (
         <Dialog open={openModal} onOpenChange={setOpenModal} modal={true}>
         <DialogContent   onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => e.preventDefault()}
 className="max-w-[520px] w-[70%]">
         <DialogHeader className="flex flex-col items-center justify-center">
             <TimerOff width={44} className="text-red-600"/>
             <h1 className="font-bold text-md text-center text-3xl">BOA SORTE!</h1>
         </DialogHeader>
         <p className="text-2xl"></p>
             <Button onClick={() => window.location.reload()}>Tentar novamente!</Button>
             <DialogFooter>
                 <div className="flex gap-2 items-end justify-center w-full">
                     <Link to={`/portal/classroom/${class_id}`}className="w-full" ><Button className="w-full" onClick={()=>setOpenModal(false)} variant={"outline"}>Desistir</Button></Link>
                 </div>
              </DialogFooter>
         </DialogContent>
        
     </Dialog>
     )
 }