import React from "react";
import { PiAirplaneTakeoffLight, PiHouse, PiWallet } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { LuPieChart } from "react-icons/lu";
import { HiOutlineCog8Tooth } from "react-icons/hi2";

const Sidebar = () => {
  const activeUsers = [
    "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
    "https://www.themobileheadshot.com/wp-content/uploads/2023/05/Capture-One-Catalog5681.jpg",
    "https://photos.peterhurley.com/wp-content/uploads/legacy/photos/2021/05/26/haas_manning_2-scaled-2000x1600.jpg",
    "https://headshots-inc.com/wp-content/uploads/2023/03/Office-Headshot-Examples-2-1.jpg",
    "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/6d0d06ce-e8a5-434e-a633-a4893841b6a3/2022-08-10-Trinet-Henderson-Tiara-1485.jpg",
    "https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=",
    "https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E=",
  ];
  return (
    <div className="block w-[20%] bg-[#2b3131]  min-h-screen rounded-tr-[25px] rounded-br-[25px]  ">
      {/* display pic */}
      <div className=" bg-[#484949] shadow-md  py-8 flex flex-col justify-center items-center rounded-tr-[25px]">
        <div className=" border border-yellow-400 h-[110px] w-[110px] flex justify-center items-center rounded-full">
          <img
            className=" rounded-full h-[100px] w-[100px] object-cover"
            src="https://www.shutterstock.com/image-photo/headshot-successful-smiling-cheerful-african-600nw-567772042.jpg"
            alt=""
          />
        </div>

        <h2 className=" text-white uppercase font-medium mt-3">ALEX JOHNSON</h2>
        <p className=" text-white text-xs">alexjohson@gmail.com</p>
      </div>

      {/* navlinks */}
      <ul className=" mt-10 ml-10 flex flex-col gap-2">
        <li className=" bg-blue-100 w-full p-2.5 rounded-l-full flex">
          <PiHouse className=" text-yellow-500" size={20} />
          <h1 className=" uppercase text-[#4e5c5c] ml-3">Dashboard</h1>
        </li>

        <li className=" w-full p-2.5 rounded-l-full flex ">
          <PiAirplaneTakeoffLight className=" text-yellow-500" size={20} />
          <h1 className=" uppercase text-white ml-3">FLIGHTS</h1>
        </li>

        <li className=" w-full p-2.5 rounded-l-full flex ">
          <PiWallet className=" text-yellow-500" size={20} />
          <h1 className=" uppercase text-white ml-3">WALLET</h1>
        </li>

        <li className=" w-full p-2.5 rounded-l-full flex ">
          <GrDocumentText className=" text-yellow-500" size={20} />
          <h1 className=" uppercase text-white ml-3">REPORTS</h1>
        </li>

        <li className=" w-full p-2.5 rounded-l-full flex ">
          <LuPieChart className=" text-yellow-500" size={20} />
          <h1 className=" uppercase text-white ml-3">STATISTICS</h1>
        </li>

        <li className=" w-full p-2.5 rounded-l-full flex ">
          <HiOutlineCog8Tooth className=" text-yellow-500" size={20} />
          <h1 className=" uppercase text-white ml-3">SETTINGS</h1>
        </li>
      </ul>

      {/* active user */}
      <div className=" mt-5 ml-10 p-2.5">
        <h2 className=" text-yellow-500 mb-3">ACTIVE USER</h2>
        <div className="flex">
          {activeUsers.map((user, index) => {
            return (
              <img
                key={index}
                className=" h-[30px] w-[30px] rounded-full object-cover -ml-2"
                src={user}
                alt=""
              />
            );
          })}
        </div>
        ;
      </div>
    </div>
  );
};

export default Sidebar;
