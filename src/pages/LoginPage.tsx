import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardHeader } from "../components/ui/card";

export default function LoginPage()
{
    const navigate = useNavigate()
    return (
        <div className="flex items-start min-h-screen">
            <div className="relative w-0 overflow-hidden md:flex-1 bg-[url(login.jpg)] h-screen  brightness-50 flex justify-center items-center" >
                <h1 className="text-white font-extrabold text-6xl absolute">Bem vindo de volta!</h1>
            </div>

             <div className="w-full flex flex-col p-8 md:w-[500px]">
                <header>
                    <h1 className="font-mono font-extralight">SFFS TREINING</h1>
                </header>
                <h2 className="font-extrabold my-4 text-muted-foreground text-2xl">Acesse sua conta</h2>
                
                
                <form action="" className="w-full">
                    <div className="flex flex-col gap-2 mb-4">
                        <Label htmlFor="" className="text-muted-foreground">Email</Label>
                        <Input type="text" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <Label htmlFor="" className="text-muted-foreground">Palavra-passe</Label>
                        <Input type="password" placeholder="Digite sua senha" />
                    </div>
                    <div><Link to="" className="text-sm text-sky-700 text-bold">Esqueci minha senha</Link></div>
                    <div className="w-full flex flex-col mt-2">
                        <Button className="bg-blue-700 hover:bg-blue-900 transition-colors" onClick={()=>navigate("/")} type="button">Entrar</Button>
                    </div>

                    <Card className="mt-4">
                        <CardHeader className="flex items-center justify-center">
                            <div><Link to="" className="text-foreground text-sm">Não tem ainda uma conta? <span className="text-violet-800">Inscreve-se</span></Link></div>
                        </CardHeader>
                    </Card>
                </form>
            </div>
        </div>    
    )
}