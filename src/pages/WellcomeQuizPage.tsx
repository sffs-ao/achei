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
 
export default function QuizPage() {

    const {id, class_id} = useParams<{id: string,class_id:string}>();

  
async function handleAnswer() {
 
} 
    return (
    <div className="flex flex-col justify-center items-center w-[920px] max-w-full mx-auto">
            <h1 className="mt-4">BOA SORTE!</h1>
    </div>
    )
}
