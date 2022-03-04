import React from "react";
import { useSelector } from "react-redux";

// icons
import { NavLink } from "react-router-dom";
import Content from "../components/Content";

function Main() {
  const stateNoAcitive =
    "text-lg whitespace-nowrap  dark:text-white hover:bg-gray-100 hover:dark:bg-[#20262d] px-2 py-1 rounded-lg cursor-pointer transition duration-300 ";
  const stateAcitive =
    "text-lg whitespace-nowrap bg-gray-100 dark:bg-[#20262d] px-2 py-1 bg-gray-100 rounded-lg cursor-pointer";

  return (
    <div className="md:m-8 mt-8 px-3 w-full md:pl-64 duration-500">
      <div className="flex items-center overflow-x-scroll scrollbar-hide">
        <div className="space-x-1 items-center flex">
          <NavLink
            to={"/"}
            end={true}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            List
          </NavLink>

          <NavLink
            to={"/complate"}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            Complate
          </NavLink>
        </div>
      </div>

      <Content />
    </div>
  );
}

export default Main;
