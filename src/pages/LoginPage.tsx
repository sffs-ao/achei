import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardHeader } from "../components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, saveLocalStorageToken } from "../lib/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useUserContext } from "@/hooks/UserContext";
import { useEffect } from "react";

const schema = z.object({
    email: z.string().email("Email invalido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});
type schemaType = z.infer<typeof schema>;

export default function LoginPage() {
    const navigate = useNavigate();
    const { user, setUser } = useUserContext();

    useEffect(() => {
        if (user) {
          navigate("/portal");
        }
      }, [user]);
      console.log(user)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<schemaType>({
        resolver: zodResolver(schema),
    });
   
    const {mutateAsync: sign, isPending: isPendingCreate} = useMutation({
        mutationFn: login,
        onSuccess(data){
           // console.log(data.user_data);
            if(data.token){
                saveLocalStorageToken(data.token);
              
                setUser({name:data.user_data.user_name,email: data.user_data.user_email});
                toast.success("Sessão iniciada com sucesso")
                navigate("/portal");
            }else {
                toast.error("Nao foi possivel iniciar sessão")
            }
        },
        onError(error){
            toast.error("Nao foi possivel iniciar sessão")
            console.log(error);
        }
    })
    const onSubmit = (data: schemaType) => {
        console.log(data);
        sign(data);
        //navigate("/portal");
    };

    return (
        <div className="flex items-start min-h-screen">
            <div className="relative w-0 overflow-hidden md:flex-1 bg-[url(login.jpg)] h-screen  brightness-50 flex justify-center items-center">
                <h1 className="text-white font-extrabold text-6xl absolute">Bem vindo de volta!</h1>
            </div>

            <div className="w-full flex flex-col p-8 md:w-[500px]">
                <header>
                    <h1 className="font-mono font-extralight">SFFS TREINING</h1>
                </header>
                <h2 className="font-extrabold my-4 text-muted-foreground text-2xl">Acesse sua conta</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="flex flex-col gap-2 mb-4">
                        <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                        <Input type="text" placeholder="Digite seu e-mail" {...register("email")} />
                        {errors.email && <span className="text-red-500">{String(errors.email.message)}</span>}
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <Label htmlFor="password" className="text-muted-foreground">Palavra-passe</Label>
                        <Input type="password" placeholder="Digite sua senha" {...register("password")} />
                        {errors.password && <span className="text-red-500">{String(errors.password.message)}</span>}
                    </div>
                    <div><Link to="" className="text-sm text-sky-700 text-bold">Esqueci minha senha</Link></div>
                    <div className="w-full flex flex-col mt-2">
                        <Button className="bg-blue-700 hover:bg-blue-900 transition-colors flex items-center justify-center" type="submit">
                            Entrar {isPendingCreate && <Loader2 className="animate-spin"/>}</Button>
                    </div>

                    <Card className="mt-4">
                        <CardHeader className="flex items-center justify-center">
                            <div><Link to="/" className="text-foreground text-sm">Não tem ainda uma conta? <span className="text-violet-800">Inscreve-se</span></Link></div>
                        </CardHeader>
                    </Card>
                </form>
            </div>
        </div>
    );
}