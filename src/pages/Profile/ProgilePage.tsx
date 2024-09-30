import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DatePicker from "./DatePickerBirth";
import { useState } from "react";

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="relative h-20">
                    <div className="absolute bg-blue-700 h-28 w-28 rounded-full 
                    flex items-center justify-center -bottom-28 left-2/4 -translate-y-2/4 -translate-x-2/4 
                    ">
                        <CardTitle className=" ">FS</CardTitle>
                    </div>
                </CardHeader>


                <CardContent className="pt-16 bg-zinc-100 flex justify-center items-center flex-col">
                    <h1 className="text-lg font-bold text-center">Fernando Silva</h1>
                    <span className="text-center font-normal text-zinc-600">fernandowonder123@gmail.com</span>
                </CardContent>

            </Card>
            <div className="">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Minha conta</TabsTrigger>
                    <TabsTrigger value="access">Acesso</TabsTrigger>
                    <TabsTrigger value="grade">Certificados</TabsTrigger>
                </TabsList>
                <TabsContent value="account"><MyAccount/></TabsContent>
                <TabsContent value="access">Change your password here.</TabsContent>
                <TabsContent value="grade">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export function MyAccount() {
    const [date, setDate] = useState<Date>()
    return (
        <div>
            <form >
                <fieldset>
                    <Label>Nome</Label>
                    <Input placeholder="Seu nome" type="text"/>
                </fieldset>
                <fieldset>
                    <Label>Data de nascimento</Label>
                    <Input placeholder="Seu nome" type="text"/>
                    <DatePicker selectedDate={date} setSelectedDate={setDate} />
                </fieldset>
            </form>
        </div>
    )
}