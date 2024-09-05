import React from "react";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideBar/SideMenu";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="main-area">
        <SideMenu />
        <Outlet />
      </div>
    </div>
  );
}
