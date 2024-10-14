import {  Bell, Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { MenuPopover } from "../MenuPopover";
import { useEffect, useState } from "react";
import { MenuPopoverProfile } from "../MenuPopoverProfile";
import { MenuPopoverNotify } from "../MenuPopoverNotify";
import ModalSearchModal from "../ModalSearchCurso";
import logo from "./../../assets/logo.png"
import { useUserContext } from "@/hooks/UserContext";
interface HeaderProps 
{
    toggleSideBar: () => void;
}
export default function Header({toggleSideBar} : HeaderProps) {
    
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Adiciona o listener para o evento de resize
        window.addEventListener('resize', handleResize);

        // Remove o listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleMenuClick() {
          toggleSideBar(); 
    }
    return (
        <header className="px-4 w-full shadow-md bg-white h-16 items-center justify-between flex ">
            <div className="flex gap-1 items-center">
                {width < 768 ? 
                    <MenuPopover><Button className="" variant={"outline"}><Menu/></Button></MenuPopover> :
                    <Button onClick={handleMenuClick} className="" variant={"outline"}><Menu/></Button>}
                <img className="w-8" src={logo} />
            </div>

            <div className="flex gap-2">
                <Button variant={"outline"}><Search/></Button>
                <Button className="bg-blue-800">Entrar</Button>
                <Button variant={"link"}>Inscrever-se</Button>
            </div>
        </header>
    )
}


export function HeaderLoged({toggleSideBar} : HeaderProps) {
        const [width, setWidth] = useState(window.innerWidth);
        const {user} = useUserContext()
        useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };
    
            // Adiciona o listener para o evento de resize
            window.addEventListener('resize', handleResize);
    
            // Remove o listener quando o componente é desmontado
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);
    
        function handleMenuClick() {
              toggleSideBar(); 
        }
        return (
            <header className="px-4 w-full border-b-2 border-zinc-100 bg-white h-16 items-center justify-between flex ">
                <div className="flex gap-1 items-center">
                    {width < 768 ? 
                        <MenuPopover><Button className="" variant={"outline"}><Menu/></Button></MenuPopover> :
                        <Button onClick={handleMenuClick} className="" variant={"outline"}><Menu/></Button>}
                    <img className="w-8" src={logo} alt="" />
                </div>
    
                <div className="flex gap-2">
                    <ModalSearchModal><Button variant={"outline"}><Search/></Button></ModalSearchModal>
                   {/* <MenuPopoverNotify><Button variant={"outline"}><Bell/></Button></MenuPopoverNotify> */}
                    <MenuPopoverProfile><Button  className="bg-blue-700 rounded-full">{user?.name?.substring(0,1)}</Button></MenuPopoverProfile>
                </div>
            </header>
        )
}