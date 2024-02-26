import React from "react";
import { FaCouch, FaLocationDot } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { MdKeyboardArrowDown, MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className=" w-full min-h-screen">
      {/* destination */}
      <div className=" bg-white p-5 rounded-2xl flex flex-col gap-4">
        <div className=" flex w-full justify-between items-center">
          <div className=" bg-gray-200 p-2 w-[50%] h-[40px] rounded-full flex justify-around items-center">
            <span className="text-[#2b3131] flex gap-2 items-center">
              <FaLocationDot />
              <p className=" text-sm font-medium">NEW YORK (JFK)</p>
            </span>

            <div className=" text-white bg-[#2b3131] w-[30px] h-[30px] rounded-full text-center flex justify-center items-center">
              <GoArrowSwitch size={20} />
            </div>

            <span className="text-[#2b3131] flex gap-2 items-center">
              <FaLocationDot />
              <p className=" text-sm font-medium">MUMBAI (BOM)</p>
            </span>
          </div>

          <div className=" bg-gray-200 w-[20%] rounded-full p-1.5 flex items-center h-[40px] justify-center gap-4">
            <MdOutlineCalendarMonth />
            <p className=" text-sm font-medium">25 JULY 2019</p>
          </div>

          <div className=" bg-gray-200 w-[20%] rounded-full p-1.5 flex items-center h-[40px] justify-center gap-4">
            <IoMdPerson />
            <p className=" text-sm font-medium">2 TRAVELLERS</p>
          </div>
        </div>
        <div className=" flex w-full justify-between items-center">
          <div className=" bg-gray-200 p-2 w-[50%] h-[40px] rounded-full flex justify-between items-center">
            <button className=" bg-[#2b3131] font-medium text-sm py-1.5 w-[130px] text-center text-white rounded-full">
              ONE WAY
            </button>
            <button className="  py-1.5 w-[130px] font-medium text-sm text-center text-[#2b3131] rounded-full">
              ROUND TRIP
            </button>
            <button className="  py-1.5 w-[130px] font-medium text-sm text-[#2b3131] text-center rounded-full">
              MULTI CITY
            </button>
          </div>

          <div className=" bg-gray-200 w-[20%] rounded-full p-1.5 flex items-center h-[40px] justify-center gap-4">
            <FaCouch />
            <p className=" text-sm font-medium">FIRST CLASS</p>
          </div>

          <div className=" text-sm bg-yellow-600 w-[20%] text-white rounded-full p-1.5 flex items-center h-[40px] justify-center">
            SEARCH
          </div>
        </div>
      </div>
      {/* filter */}
      <div className=" flex justify-between my-7">
        <h1 className=" font-semibold text-[#2b3131]">RESULT (25)</h1>

        <div className=" flex gap-4">
          <button className=" uppercase text-sm bg-white p-2 font-medium text-center text-[#2b3131] rounded-full">
            Filter
          </button>

          <button className=" w-full flex justify-between  font-medium items-center uppercase text-sm bg-white p-2 text-center text-[#2b3131] rounded-full">
            TICKET OF CLASS <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className=" bg-white p-3 w-[60%]"></div>

        <div className="  bg-[#2b3131] p-3 w-[30%]"></div>
      </div>
    </div>
  );
};

export default Dashboard;
