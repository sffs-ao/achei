
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideBar/SideMenu";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { useNavigate } from "react-router-dom";
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