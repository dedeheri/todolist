import React, { useEffect, useState } from "react";

// icons
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineFeed, MdOutlineArchive } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { getLabels } from "../redux/action/labels";
import InputLabel from "./InputLabel";
import { SLIDETASK_COMPONENTS } from "../redux/action-type";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [showInputLabel, setShowInputLabel] = useState(false);
  const {
    loading,
    success: { labels },
  } = useSelector((state) => state.labels);
  const { menu } = useSelector((state) => state.style);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLabels());
  }, []);

  function openAddTask() {
    dispatch({ type: SLIDETASK_COMPONENTS, slideTask: true });
  }
  function transcut(text) {
    return text.length > 12 ? text.substring(0, 12) + "..." : text;
  }

  const activeLinkLabel =
    "group flex  justify-between items-center  hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer bg-gray-100 dark:bg-[#20262d] cursor-pointer transition p-1 duration-300 w-full rounded-md";

  const noActiveLinkLabel =
    "group flex  justify-between items-center hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer transition p-1 duration-300 w-full rounded-md";

  const activeLink =
    "flex space-x-3 mb-4 items-center p-1 w-full  hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer bg-gray-100 dark:bg-[#20262d]  transition duration-300 rounded-md";
  const noActiveLink =
    "flex space-x-3 mb-4 items-center p-1 w-full  hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer transition duration-300 rounded-md";
  return (
    <>
      <div className="border-r w-64 fixed border-white dark:border-[#30363d] h-full p-8 md:block hidden transition duration-500 space-y-1">
        <button
          type="button"
          onClick={openAddTask}
          className="flex space-x-3 mb-4 items-center p-1 w-full  bg-[#8BA6C5] hover:dark:bg-[#8DA2BA] hover:bg-[#7EA1C9] dark:bg-[#5E7EA3] cursor-pointer transition duration-300 rounded-md "
        >
          <AiOutlinePlus fontSize={25} className="dark:text-white" />
          <p className=" font-semibold text-xl">Add Task</p>
        </button>
        <NavLink
          to={"/"}
          end={true}
          className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
        >
          <MdOutlineFeed fontSize={25} />
          <h1 className="font-semibold text-xl">Activity</h1>
        </NavLink>

        <NavLink
          to={"/archive"}
          className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
        >
          <MdOutlineArchive fontSize={25} />
          <h1 className="font-semibold text-xl">Archive</h1>
        </NavLink>

        <div className="flex items-center justify-between mt-5 p-1">
          <p className="text-base font-medium text-gray-600">Label</p>
          <BsPlusLg
            onClick={() => setShowInputLabel(!showInputLabel)}
            fontSize={20}
            className="hover:bg-gray-100 hover:dark:bg-[#31363D] hover-animation rounded-full text-gray-600 p-1 cursor-pointer transition duration-300"
          />
        </div>

        {showInputLabel && <InputLabel />}

        <div className="space-y-1 overflow-scroll scrollbar-hide h-2/3">
          {labels?.data?.map(({ icons, title, _id }) => (
            <NavLink
              to={`/label/${title}`}
              key={_id}
              className={({ isActive }) =>
                isActive ? activeLinkLabel : noActiveLinkLabel
              }
            >
              <div className="flex space-x-1 items-center">
                <h1 className="text-lg">{icons}</h1>
                <p className="text-lg whitespace-nowrap">{transcut(title)}</p>
              </div>

              <div className="px-2 flex items-center">
                <button className="group-hover:opacity-100 opacity-0 transiton duration-300">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* mobile menu */}

      {menu && (
        <div className="border-r dark:border-[#30363d]  h-screen p-8 animate-slide-in transition duration-500 space-y-1">
          <button
            type="button"
            onClick={openAddTask}
            className="flex space-x-3 mb-4 items-center p-1 w-full  hover:bg-gray-100 hover:dark:bg-[#31363D] bg-gray-100 dark:bg-[#20262d] cursor-pointer transition duration-300 rounded-md "
          >
            <AiOutlinePlus fontSize={25} className="dark:text-white" />
            <p className=" font-semibold text-xl">Add Task</p>
          </button>
          <div className="flex space-x-3 items-center p-1 hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer transition duration-300 rounded-md">
            <MdOutlineFeed fontSize={25} />
            <h1 className="font-semibold text-xl">Activity</h1>
          </div>

          <div className="flex space-x-3 items-center p-1 hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer transition duration-300 rounded-md">
            <MdOutlineArchive fontSize={25} />
            <h1 className="font-semibold text-xl">Archive</h1>
          </div>

          <div className="flex items-center justify-between mt-5 p-1">
            <p className="text-base font-medium text-gray-600">Label</p>
            <BsPlusLg
              onClick={() => setShowInputLabel(!showInputLabel)}
              fontSize={20}
              className="hover:bg-gray-100 hover:dark:bg-[#31363D] hover-animation rounded-full text-gray-600 p-1 cursor-pointer transition duration-300"
            />
          </div>

          {showInputLabel && <InputLabel />}

          <div className="space-y-1">
            {labels?.data?.map(({ icons, title, _id }) => (
              <div
                key={_id}
                className="group flex justify-between items-center hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer transition p-1 duration-300 w-full rounded-md"
              >
                <div className="flex space-x-1 items-center">
                  <h1 className="text-lg">{icons}</h1>
                  <p className="text-lg whitespace-nowrap">{transcut(title)}</p>
                </div>

                <div className="px-2 flex items-center">
                  <button className="group-hover:opacity-100 opacity-0 transiton duration-300">
                    <BsThreeDotsVertical />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
