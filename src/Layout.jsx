import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu";

export default function Layout() {
    return (
        <div>
            <Header />
                <SideMenu />
            <Outlet />
        </div>
    )
}