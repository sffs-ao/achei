import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DatePicker from "./DatePickerBirth";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { GraduationCap, Trophy } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-6 md:flex-row items-start">
            <Card className="w-full md:w-fit">
                <CardHeader className="relative h-20">
                    <div className="absolute bg-primary h-28 w-28 rounded-full 
                    flex items-center justify-center -bottom-28 left-2/4 -translate-y-2/4 -translate-x-2/4 
                    ">
                        <CardTitle className="text-white">FS</CardTitle>
                    </div>
                </CardHeader>


                <CardContent className="pt-16 bg-zinc-100 flex justify-center items-center flex-col">
                    <h1 className="text-lg font-bold text-center">Fernando Silva</h1>
                    <span className="text-center font-normal text-zinc-600">fernandowonder123@gmail.com</span>
                </CardContent>

            </Card>
            <div className="w-full">
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="account">Minha conta</TabsTrigger>
                    <TabsTrigger value="access">Acesso</TabsTrigger>
                    <TabsTrigger value="grade">Certificados</TabsTrigger>
                </TabsList>
                <TabsContent className="w-full shadow-sm border bg-white p-4 rounded-md" value="account"><MyAccount/></TabsContent>
                <TabsContent className="w-full shadow-sm border bg-white p-4 rounded-md" value="access"><Access/></TabsContent>
                <TabsContent className="w-full shadow-sm border bg-white p-4 rounded-md" value="grade"><Grade/></TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export function MyAccount() {
    const [date, setDate] = useState<Date>()
    return (
    
            <form className="flex flex-col gap-4 w-full">
                <h1>Dados pessoais</h1>
               <div className="flex flex-col md:flex-row md:flex-1 gap-4 w-full items-center">
                    <fieldset className="w-full flex flex-col gap-2 md:flex-1 min-w-80">
                        <Label>Nome</Label>
                        <Input placeholder="Seu nome" type="text"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-2 w-full md:w-72">
                        <Label>Telefone</Label>
                        <Input placeholder="number" type="seu Telefone"/>
                    </fieldset>
               </div>
                <fieldset className="w-full flex flex-col gap-2">
                    <Label>Data de nascimento</Label>
                    <DatePicker  selectedDate={date} setSelectedDate={setDate} />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-2">
                    <Label>Email</Label>
                    <Input placeholder="" value={"fernandowonder123@gmail.com"} disabled type="email"/>
                </fieldset>
                <div className="flex flex-col md:flex-row md:flex-1 gap-4 w-full items-center">
                    <fieldset className="w-full flex flex-col gap-2 md:flex-1">
                        <Label>Selecione tipo de documento</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Tipo de documento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Bilhere de ID</SelectItem>
                                <SelectItem value="banana">Passaporte</SelectItem>
                                <SelectItem value="blueberry">Certidao</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </fieldset>
                    <fieldset className="flex flex-col gap-2 w-full md:flex-1">
                        <Label>Nº de identificação</Label>
                        <Input placeholder="number" type="seu Telefone"/>
                    </fieldset>
               </div>
               <div className="flex items-end justify-end">
                    <Button>Salvar</Button>
               </div>
            </form>
    
    )
}

export function Access() {
    return (
        <div className="flex flex-col gap-4 w-full">
             <h1>Informações de acesso</h1>
            <fieldset>
                <Label>Email</Label>
                <Input disabled value={"fernandowonder123@gmail.com"}/>
            </fieldset>
            <fieldset>
                <Label>Senha</Label>
                <div className="flex items-center">
                    <Input className="rounded-r-none" value={"************"} disabled placeholder=""/>
                    <Button className="rounded-l-none bg-red-800 hover:bg-red-900">Mudar senha</Button>
                </div>
            </fieldset>
        </div>
    )
}


export function Grade() {
    return (
        <div>
            <h1>Certificados</h1>
            <div className="flex flex-col mt-2">
                <div className="border shadow-sm flex h-14 items-center rounded-sm overflow-hidden">
                    <div className="bg-primary text-white h-14 flex items-center w-14 justify-center">
                        <GraduationCap/>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="ml-2">Curso de ingles</span>
                        <Button className="" variant={"link"}>Obter certificado</Button>
                    </div>
                </div> 
            </div>
        </div>
    )
}