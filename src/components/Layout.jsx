import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <div className="flex w-full h-screen m-0 p-0 flex-col md:flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
