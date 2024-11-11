import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Bolt, GraduationCap, LogOut } from "lucide-react"

export  const MenuPopoverProfile = ({children} : {children:ReactNode}) => {
   return (
          <Popover>
              <PopoverTrigger>{children}</PopoverTrigger>
              <PopoverContent className="ml-4 mt-5 p-0">
                <ul className="flex flex-col">
                    <Link className=""  to="/portal/me"><li className="hover:bg-zinc-100 px-6 py-4 rounded-sm flex gap-4 text-zinc-800"><Bolt/> Minha conta</li></Link>      
                  {/*   <Link className=""  to=""><li className="hover:bg-zinc-100 px-6 py-4 rounded-sm flex gap-4 text-zinc-800"><GraduationCap/> Certificados</li></Link>       */}
                    <Link className=""  to="/logout"><li className="hover:bg-zinc-100 px-6 py-4 rounded-sm flex gap-4 text-zinc-800"><LogOut/> Sair</li></Link>          
                </ul>
              </PopoverContent>
          </Popover>
        )
      }