import { ReactNode, useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"

import { MENU } from "../utils"
      
export  const MenuPopover = ({children} : {children:ReactNode}) => {
   const [openMenu, setOpenMenu] = useState(false)
   const location = useLocation();
   const {  } = useParams()
   useEffect(() => {
        setOpenMenu(false)
    },[location])

   return (
          <Popover open={openMenu} onOpenChange={setOpenMenu}>
              <PopoverTrigger>{children}</PopoverTrigger>
              <PopoverContent className="ml-4 mt-5 p-0">
                <ul className="flex flex-col gap-2" >
                    {
                        MENU.map((item) => {
                            return (
                                <Link className="" key={item.name} to={item.link}><li className="hover:bg-zinc-100 px-6 py-4 rounded-sm flex gap-4 text-zinc-800">{item.icon} {item.name}</li></Link>
                            )
                        })
                    }
             
                </ul>
              </PopoverContent>
          </Popover>
        )
      }