import React from "react";
import { HiHome } from "react-icons/hi";
import { BsFillCameraReelsFill, BsFillCalendar3WeekFill } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";
//this is sidebar

function SidebarCom() {
  const sidebardata = [
    {
      id: 1,
      icon: <HiHome className="text-xl" />,
      title: "Home",
      path: "/home",
    },
    {
      id: 2,
      icon: <BsFillCameraReelsFill className="text-xl" />,
      title: "Movies",
      path: "/movies",
    },
    {
      id: 3,
      icon: <MdOndemandVideo className="text-xl" />,
      title: "TVSeries",
      path: "/tvseries",
    },
    {
      id: 4,
      icon: <BsFillCalendar3WeekFill className="text-xl" />,
      title: "Upcoming",
      path: "/upcoming",
    },
  ];
  return (
    <>
      <div className="w-full text-white fixed bottom-0 pb-2 md:left-0 px-4 bg-gray-700">
        <ul className="group  flex items-center justify-between md:flex-col  pt-2 ">
          {sidebardata.map(({ icon, title }, key) => (
            <li key={key}>
              <NavLink>
                <div className="flex items-center h-8  rounded-md hover:text-white">
                  <div> {icon}</div>
                  <span className="group-hover:inline hidden">{title}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SidebarCom;
