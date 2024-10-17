import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"

export  const MenuPopoverNotify = ({children} : {children:ReactNode}) => {
   return (
          <Popover>
              <PopoverTrigger>{children}</PopoverTrigger>
              <PopoverContent className="ml-4 mt-5 p-0 mr-4 w-96">
                <h1 className="ml-3 mt-3 mb-2">Notifições</h1>
                <ul className="flex flex-col">
                    <Link className="p-3  border-b-2 hover:bg-zinc-100"  to=""><li className="   text-zinc-800 text-sm text-nowrap">Recebeu uma mensagem</li></Link>      
                    <Link className="p-3  border-b-2 hover:bg-zinc-100"  to=""><li className="   text-zinc-800 text-sm text-nowrap">Novo cursodasdas</li></Link>      
                    <Link className="p-3  border-b-2 hover:bg-zinc-100"  to=""><li className="   text-zinc-800 text-sm text-nowrap">Inscreva-se agora e ganhe afdasfas</li></Link>          
                </ul>
                <Link to="/notificacoes"><button className="w-full bg-zinc-100 text-zinc-900 p-1 flex items-center justify-center font-semibold text-xs h-10">ver todos</button></Link>
              </PopoverContent>
          </Popover>
        )
      }