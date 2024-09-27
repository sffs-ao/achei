import { Outlet } from "react-router-dom";
import { HeaderLoged } from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";

export default function Layout() {
    const[openSideBar, setSideBar] = useState(true);
    function toggleSideBar() {
        setSideBar(!openSideBar);
    }
    return (
        <div>
            <HeaderLoged toggleSideBar={toggleSideBar}/>
            <div className="flex items-start">
                <SideBar openSideBar={openSideBar}/>
                <main className="bg-zinc-100/40 h-[calc(100vh-80px)] overflow-y-scroll w-full p-8 flex-1">
                    <Outlet/>
               </main>
            </div>
        </div>
    )
}