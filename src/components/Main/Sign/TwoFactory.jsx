import React, { useEffect } from "react"
import { Loader2 } from "lucide-react"
import "./Sign.css"
import { useState } from "react"
import "./Sign.css"
import { useTimer } from "react-timer-hook"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { useForm } from "react-hook-form"
import { validateCodeTwoFactory } from "../../../utils/API"
const schema = z.object({
    code: z.string({ required_error: "Insira o codigo" }).min(6, "insira pelo menos 6 digitos")
})
export default function TwoFactory({userLogin}) {
  
    const[loading, setLoading] = useState(false)
    const[tryes, setTryes] = useState(1)
    const initExpirationTimestamp = new Date();
    initExpirationTimestamp.setSeconds(initExpirationTimestamp.getSeconds() + 3 );
    useEffect(()=>{
        const expirationTimestamp = new Date();
        expirationTimestamp.setSeconds(expirationTimestamp.getSeconds() + 3 );
        restart(expirationTimestamp, true)
        console.log(tryes)
    }, [tryes])
    function finalizeTimer()
    {
        if (tryes === 3)
            window.location.reload();
        
    }
    function retryCode() {
        setTryes((state) => state + 1)
    }
    const form = useForm({
        resolver: zodResolver(schema)
    })
    async function handleSubmitCode(data) {

        const dados = await validateCodeTwoFactory(data.code, userLogin.email, userLogin.password)
        console.log(dados)
    }
    console.log(form.formState.errors)
    const { seconds, minutes, hours, start, pause, reset ,restart} = useTimer({ expiryTimestamp: initExpirationTimestamp, onExpire: finalizeTimer  });
    return(
        <div className="box login-form">
            <form onSubmit={form.handleSubmit(handleSubmitCode)} className="gap-2 flex flex-col items-center justify-center">
                <i className="bi bi-key-fill text-6xl"></i>
                <h2 className="text-lg font-bold">Verifição de Código</h2>
                <div className="w-full flex gap-1 flex-col">
                    <span className="text-[16px]">Digite o código de 6 dígitos que enviamos para o seu e-mail.</span>
                    <label className="font-extrabold">Código</label>
                    <input placeholder="Digite o codigo de 6 digitos" type="number" {...form.register("code")} />
                    <div className="text-red-700">
                        {form.formState.errors.code && (
                            <span>{form.formState.errors.code.message}</span>
                        )}
                     </div>
                    <div className="flex items-center justify-between">
                      { seconds != 0 && tryes != 3 ? <span> {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2,'0')}</span> : <button type="button" onClick={retryCode} className="text-sm text-bold bg-transparent text-[#007bff] p-1 rounded-md underline ">Receber novamente o codigo</button> } <span className="flex mt-2 justify-end font-medium cursor-pointer ">Cancelar</span>
                    </div>
                    <button
                            type="submit"
                            disabled={loading}
                            className="btn flex gap-2 items-center justify-center font-bold button-send mt-2"
                            >
                            Confirmar
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    </button>
                    
                </div>
            </form>
             
        </div>
    )
}