import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className=" min-h-screen flex">
      <div className="block lg:w-[20%] bg-[#08432d]  fixed left-0 h-screen   ">
        <li>Nav</li>
        <li>Nav</li>
        <li>Nav</li>
        <li>Nav</li>
        <li>Nav</li>
        <li>Nav</li>
        <li>Nav</li>
        <li>Nav</li>
      </div>
      <div className=" w-[80%]  bg-gray-100  py-5 ">
        <div className=" w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
