import React from "react";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideBar/SideMenu";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Outlet />
    </div>
  );
}
