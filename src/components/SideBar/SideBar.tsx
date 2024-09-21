import { Link } from "react-router-dom";
import { MENU } from "../../utils";
import clsx from "clsx";
interface SideBarProps {
    openSideBar: boolean;
}
export default function SideBar({openSideBar} : SideBarProps) 
{
    return (
        <div className={clsx("w-0 overflow-hidden sticky h-[calc(100vh-80px)] overflow-y-auto border-r-2 border-zinc-100", openSideBar && "md:w-60", !openSideBar && "md:w-20")}>
             <ul className="flex flex-col gap-2 w-full " >
                    {
                        MENU.map((item) => {
                            return (
                                <Link className="" key={item.name} to={item.link}><li className="hover:bg-zinc-100 px-6 py-4 rounded-sm flex gap-4 text-zinc-800">{item.icon} {openSideBar && item.name}</li></Link>
                            )
                        })
                    }
             
                </ul>
        </div>
    )
}