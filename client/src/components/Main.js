import React from "react";
import { useSelector } from "react-redux";

// icons
import { NavLink } from "react-router-dom";
import Add from "./Add";
import Content from "./Content";

function Main() {
  const { menu } = useSelector((state) => state.style);

  const stateNoAcitive =
    "text-lg whitespace-nowrap  dark:text-white hover:bg-gray-100 hover:dark:bg-[#20262d] px-2 py-1 rounded-lg cursor-pointer transition duration-300 ";
  const stateAcitive =
    "text-lg whitespace-nowrap bg-gray-100 dark:bg-[#20262d] px-2 py-1 bg-gray-100 rounded-lg cursor-pointer";

  return (
    <div
      className={`md:m-8 mt-8 px-3 w-full md:pl-64 transition duration-500 ${
        menu ? "animate-slide-in " : ""
      } `}
    >
      <div className="flex items-center overflow-x-scroll scrollbar-hide">
        <div className="space-x-1 items-center flex">
          <NavLink
            to={"/"}
            end={true}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            Today
          </NavLink>

          <NavLink
            to={"/tomorrow"}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            Tomorrow
          </NavLink>

          <NavLink
            to={"/oneweek"}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            One Week
          </NavLink>
          <NavLink
            to={"/twoWeek"}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            Two Week
          </NavLink>
          <NavLink
            to={"/all"}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            All
          </NavLink>

          <NavLink
            to={"/complete"}
            className={({ isActive }) =>
              isActive ? stateAcitive : stateNoAcitive
            }
          >
            Complete
          </NavLink>
        </div>
      </div>

      <Content />
      <Add />
    </div>
  );
}

export default Main;
