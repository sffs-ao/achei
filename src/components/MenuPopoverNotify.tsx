import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"

export  const MenuPopoverNotify = ({children} : {children:ReactNode}) => {
   return (
          <Popover>
              <PopoverTrigger>{children}</PopoverTrigger>
              <PopoverContent className="ml-4 mt-5 p-0">
                <ul className="flex flex-col gap-2">
                    <Link className=""  to=""><li className="hover:bg-zinc-100 px-6 py-3 rounded-sm border-b-2 flex gap-4 text-zinc-800 text-sm">Recebeu uma mensagem</li></Link>      
                    <Link className=""  to=""><li className="hover:bg-zinc-100 px-6 py-3 rounded-sm border-b-2 flex gap-4 text-zinc-800 text-sm">Novo curso</li></Link>      
                    <Link className=""  to=""><li className="hover:bg-zinc-100 px-6 py-3 rounded-sm border-b-2 flex gap-4 text-zinc-800 text-sm">Inscreva-se agora e ganhe promoção</li></Link>          
                </ul>
              </PopoverContent>
          </Popover>
        )
      }