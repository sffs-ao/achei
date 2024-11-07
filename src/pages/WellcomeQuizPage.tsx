import { Button } from "@/components/ui/button";
import { GET_ONE_QUIZ, POST_QUESTION } from "@/lib/API";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import quizImage from "../assets/quiz.png";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
 
export default function WellcomeQuizPage() {

const {id, class_id} = useParams<{id: string,class_id:string}>();

const welcomeMessages = [
    "Bem-vindo ao Quiz! Prepare-se para testar seus conhecimentos. Clique abaixo para começar!",
    "Teste sua inteligência! Vamos ver o quanto você sabe. Responda às perguntas e descubra o seu resultado. Boa sorte!",
    "Desafie seus conhecimentos! Participe do quiz e aprenda mais a cada pergunta. Boa sorte!",
    "Pronto para o desafio? Vamos começar o quiz e ver como você se sai. Divirta-se e boa sorte!",
    "Bem-vindo ao Quiz! Cada pergunta é uma oportunidade de aprender algo novo. Mostre o que você sabe! Pronto para começar?",
    "Vamos testar seus conhecimentos em História! Responda às perguntas e veja o quanto você conhece sobre o passado. Boa sorte!"
  ];
  
console.log(welcomeMessages); // Exibe todos os textos no console
const texto = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];  
console.log(texto); // Exibe um texto aleatório no console
const { data: getQuiz, isPending: isPedingQuiz } = useQuery({
    queryKey: ["get-one-quiz-id", id],
    queryFn: () => GET_ONE_QUIZ(id!),
})
useEffect(() => { if(getQuiz)
console.log("Data ",getQuiz )

}, [ getQuiz]);
  
    return (
    <div className="mt-20 flex flex-col justify-center items-center w-[920px] max-w-full mx-auto text-center">
            <h1 className="mt-4 text-3xl font-bold">BOA SORTE!</h1>
            <div><img src={quizImage} className="w-44" alt="" /></div>
            <h2 className="text-lg font-medium">{getQuiz?.data.title}</h2>
            <span className=" text-zinc-600 text-sm">{getQuiz?.data.time} minutos | {getQuiz?.data.question.length} Questões</span>
            <p className="mt-4 max-w-lg text-zinc-800">{texto}</p>
        <Link className="mt-4" to={`/portal/quiz/${id}/${class_id}`}><Button className="font-bold">Inciar Agora <ArrowRightIcon width={18} strokeWidth={3}/></Button></Link>
    </div>
    )
}
