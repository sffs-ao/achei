import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DatePicker from "./DatePickerBirth";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import userProfile from "../../assets/user-profile.png";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row">
      <Card className="w-full md:w-fit">
        <CardHeader className="relative h-20">
          <div className="absolute flex items-center justify-center rounded-full h-28 w-28 -bottom-28 left-2/4 -translate-y-2/4 -translate-x-2/4 ">
            <img src={userProfile} alt="" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center pt-16 bg-zinc-100">
          <h1 className="text-lg font-bold text-center">Fernando Silva</h1>
          <span className="font-normal text-center text-zinc-600">
            fernandowonder123@gmail.com
          </span>
        </CardContent>
      </Card>
      <div className="w-full">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Minha conta</TabsTrigger>
            <TabsTrigger value="access">Acesso</TabsTrigger>
            <TabsTrigger value="grade">Certificados</TabsTrigger>
          </TabsList>
          <TabsContent
            className="w-full p-4 bg-white border rounded-md shadow-sm"
            value="account"
          >
            <MyAccount />
          </TabsContent>
          <TabsContent
            className="w-full p-4 bg-white border rounded-md shadow-sm"
            value="access"
          >
            <Access />
          </TabsContent>
          <TabsContent
            className="w-full p-4 bg-white border rounded-md shadow-sm"
            value="grade"
          >
            <Grade />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export function MyAccount() {
  const [date, setDate] = useState<Date>();
  return (
    <form className="flex flex-col w-full gap-4">
      <h1>Dados pessoais</h1>
      <div className="flex flex-col items-center w-full gap-4 md:flex-row md:flex-1">
        <fieldset className="flex flex-col w-full gap-2 md:flex-1 min-w-80">
          <Label>Nome</Label>
          <Input placeholder="Seu nome" type="text" />
        </fieldset>
        <fieldset className="flex flex-col w-full gap-2 md:w-72">
          <Label>Telefone</Label>
          <Input placeholder="number" type="seu Telefone" />
        </fieldset>
      </div>
      <fieldset className="flex flex-col w-full gap-2">
        <Label>Data de nascimento</Label>
        <DatePicker selectedDate={date} setSelectedDate={setDate} />
      </fieldset>
      <fieldset className="flex flex-col w-full gap-2">
        <Label>Email</Label>
        <Input
          placeholder=""
          value={"fernandowonder123@gmail.com"}
          disabled
          type="email"
        />
      </fieldset>
      <div className="flex flex-col items-center w-full gap-4 md:flex-row md:flex-1">
        <fieldset className="flex flex-col w-full gap-2 md:flex-1">
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
        <fieldset className="flex flex-col w-full gap-2 md:flex-1">
          <Label>Nº de identificação</Label>
          <Input placeholder="number" type="seu Telefone" />
        </fieldset>
      </div>
      <div className="flex items-end justify-end">
        <Button>Salvar</Button>
      </div>
    </form>
  );
}

export function Access() {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1>Informações de acesso</h1>
      <fieldset>
        <Label>Email</Label>
        <Input disabled value={"fernandowonder123@gmail.com"} />
      </fieldset>
      <fieldset>
        <Label>Senha</Label>
        <div className="flex items-center">
          <Input
            className="rounded-r-none"
            value={"************"}
            disabled
            placeholder=""
          />
          <Button className="bg-red-800 rounded-l-none hover:bg-red-900">
            Mudar senha
          </Button>
        </div>
      </fieldset>
    </div>
  );
}

export function Grade() {
  return (
    <div>
      <h1>Certificados</h1>
      <div className="flex flex-col mt-2">
        <div className="flex items-center overflow-hidden border rounded-sm shadow-sm h-14">
          <div className="flex items-center justify-center text-white bg-primary h-14 w-14">
            <GraduationCap />
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="ml-2">Curso de ingles</span>
            <Button className="" variant={"link"}>
              Obter certificado
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
