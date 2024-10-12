import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUserContext } from "@/hooks/UserContext";
import { QuestionPayload } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function numeroParaMes(numero:string) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  return meses[Number(numero) - 1];  // Subtraímos 1 porque o array começa do índice 0
}

export default function Home() {
  const { user } = useUserContext();
  const [dataStudy, setDataStudy] = useState<QuestionPayload>();
useEffect(() => {
  
  (async ()=>{
          const dataLocalStorage = window.localStorage.getItem("data-study")
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
      <h1 className="mb-8">Olá, {user?.name?.split(" ")[0]}! </h1>
      <div className="grid items-start gap-4">
        <Card>
          <CardHeader>
            <span>Meu perfil</span>
          </CardHeader>
          <CardContent>
            <Link to="/portal/me">
              {" "}
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
        {dataStudy &&
        <div className="flex flex-col max-md:mt-8 md:max-w-[512px]">
          <h1 className="mb-2">Continue a estudar</h1>
          <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto">
            <Link to={dataStudy.linkUrl}>
              <div className="flex h-20 overflow-hidden rounded-sm">
                <div className="flex flex-col items-center p-4 text-white bg-primary">
                  <span className="text-2xl font-semibold">{dataStudy.date.split("/")[0]}</span>
                  <span className="text-sm ">{numeroParaMes(dataStudy.date.split("/")[1])}</span>
                </div>
                <div className="flex flex-col justify-center w-full pl-4 border shadow-sm">
                  <span className="font-semibold">{dataStudy.question.replace(/-/g, " ")}</span>
                  <span className="text-sm text-zinc-700">{dataStudy.date.split("|")[1].toString().substring(0,5)}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        }
{/*
        <div className="flex flex-col max-md:mt-8 md:max-w-[512px]">
          <h1 className="mb-2">Agenda</h1>
          <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto">
            <Link to="">
              <div className="flex h-20 overflow-hidden rounded-sm">
                <div className="flex flex-col items-center p-4 text-white bg-primary">
                  <span className="text-2xl font-semibold">26</span>
                  <span className="text-sm ">setembro</span>
                </div>
                <div className="flex flex-col justify-center w-full pl-4 border shadow-sm">
                  <span className="font-semibold">Exame final</span>
                  <span className="text-sm text-zinc-700">11:00 AM</span>
                </div>
              </div>
            </Link>
          </div>
        </div>*/}
      </div>
    </div>
  );
}
