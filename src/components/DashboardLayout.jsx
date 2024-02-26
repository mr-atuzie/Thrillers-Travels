import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className=" min-h-screen flex  bg-gray-100">
      <Sidebar />
      <div className=" w-[80%]   py-10 ">
        <div className=" w-[85%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
