import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { useUserContext } from "@/hooks/UserContext";
import { QuestionPayload } from "@/lib/utils";
import { PencilRuler } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarLog } from "./CalendarLog";

function numeroParaMes(numero: string) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return meses[Number(numero) - 1];  // Subtraímos 1 porque o array começa do índice 0
}

export default function Home() {
  const[config, setConfig] = useState(false)
  const { user } = useUserContext();
  
  const [dataStudy, setDataStudy] = useState<QuestionPayload>();
useEffect(() => {
  
  (async ()=>{
          const dataLocalStorage = window.localStorage.getItem("data-study")
          const dataConfig = window.localStorage.getItem("data-aready")
          
          if  (dataConfig) {
            setConfig(true)
          }
          if (!dataLocalStorage) {
            return; 
          }
          const data_study = await JSON.parse(dataLocalStorage) as QuestionPayload
          setDataStudy(data_study ?? null)
          console.log("Data study ", data_study)  
  })()

}, []);

  return (
    <div>
      <ConfigProfile openModal={config} setOpenModal={()=>{}}/>
      <h1 className="mb-8">Olá, {user?.name?.split(" ")[0]}! </h1>
      <div className="grid items-start gap-4">
        <Card>
          <CardHeader>
            <span>Meu perfil</span>
          </CardHeader>

          <CardContent>
            <Link to="/portal/me">
              <Button>Ver perfil</Button>
            </Link>
            <div className="mt-4">
              <span className="font-semibold text-zinc-900 text-md">
                Nivel básico
              </span>
              <div className="relative w-full h-6 rounded-lg bg-zinc-300">
                <div className="w-1/4 h-6 bg-green-500 rounded-lg ">
                  <span className="absolute text-xs font-semibold right-2/4 top-2/4 translate-x-2/4 -translate-y-2/4 ">
                    25%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {dataStudy && (
          <div className="flex flex-col max-md:mt-8 md:max-w-[512px] bg-white p-4 border shadow rounded-lg">
            <h1 className="mb-2">Continue a estudar</h1>
            <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto">
              <Link to={dataStudy.linkUrl}>
                <div className="flex h-20 overflow-hidden rounded-sm">
                  <div className="flex flex-col items-center p-4 text-white bg-primary">
                    <span className="text-2xl font-semibold">
                      {dataStudy.date.split("/")[0]}
                    </span>
                    <span className="text-sm ">
                      {numeroParaMes(dataStudy.date.split("/")[1])}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center w-full pl-4 border shadow-sm">
                    <span className="font-semibold">
                      {dataStudy.question.replace(/-/g, " ")}
                    </span>
                    <span className="text-sm text-zinc-700">
                      {dataStudy.date.split("|")[1].toString().substring(0, 5)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        <div className="flex flex-col w-full">
            <span>Presenças</span>
            <CalendarLog />   
        </div>

      </div>
    </div>
  );
}



export function ConfigProfile({openModal, setOpenModal}: {openModal: boolean, setOpenModal: (value: boolean) =>void}) {
  return (
      <Dialog open={openModal} onOpenChange={setOpenModal} >
          <DialogContent>
          <DialogHeader className="flex flex-col items-center justify-center">
              <PencilRuler width={24} className="text-red-600"/>
              <h1 className="font-bold text-md text-center">Complete o seu perfil pra ter acesso total ao achei</h1>
          </DialogHeader>
              <DialogFooter>
                  <div className="flex gap-2 items-end justify-center w-full">
                      <Link to="/portal/me"> <Button className="bg-blue-800">Completar</Button></Link>
                  </div>
               </DialogFooter>
          </DialogContent>
         
      </Dialog>
  )
}