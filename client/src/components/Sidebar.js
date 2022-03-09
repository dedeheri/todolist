import React, { useEffect, useState, Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

// icons
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {
  MdDeleteOutline,
  MdOutlineEdit,
  MdOutlineFeed,
  MdOutlineArchive,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { getLabels } from "../redux/action/labels";
import InputLabel from "./InputLabel";
import {
  REMOVE_MESSAGE_ADD_LABEL,
  SLIDETASK_COMPONENTS,
} from "../redux/action-type";
import { NavLink } from "react-router-dom";
import LabelLoading from "./LabelLoading";

function Sidebar() {
  const [showInputLabel, setShowInputLabel] = useState(false);
  const {
    loading,
    success: { labels },
    add: { message, error },
  } = useSelector((state) => state.labels);
  const { menu } = useSelector((state) => state.style);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabels());
  }, [message]);

  useEffect(() => {
    setShowInputLabel(false);
    if (message?.message === "Working") {
      return dispatch({ type: REMOVE_MESSAGE_ADD_LABEL });
    }
  }, [message]);

  function openAddTask() {
    dispatch({ type: SLIDETASK_COMPONENTS, slideTask: true });
  }
  function transcut(text) {
    return text.length > 9 ? text.substring(0, 9) + "..." : text;
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
      <div className="border-r w-60 fixed  dark:border-[#30363d]  h-full p-8 md:block hidden  space-y-1">
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

        {message?.message?.error && <p>{message?.message?.error}</p>}
        {showInputLabel && <InputLabel />}

        {loading ? (
          <LabelLoading />
        ) : (
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

                <Menu as="div" className="relative inline-block  text-left">
                  <div>
                    <Menu.Button className="group-hover:opacity-100 opacity-0 transiton duration-300">
                      <BsThreeDotsVertical />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-32 z-50 right-0 mt-3 origin-top-right bg-white dark:bg-[#0d1117] border dark:border-[#30363d] divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-1 ">
                        <Menu.Item>
                          <button className="group  hover:bg-gray-100 hover:dark:bg-[#31363D] flex rounded-md space-x-2 items-center w-full px-2 py-1 ">
                            <MdOutlineEdit fontSize={20} />
                            <p>Edit</p>
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="group  hover:bg-gray-100 hover:dark:bg-[#31363D] flex rounded-md space-x-2 items-center w-full px-2 py-1 ">
                            <MdDeleteOutline fontSize={20} />
                            <p>Delete</p>
                          </button>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </NavLink>
            ))}
          </div>
        )}
        <div className="text-sm text-gray-400 dark:text-gray-400">
          Create By{" "}
          <a
            href="https://github.com/dedeheri/todolist"
            target="_blank"
            className="cursor-pointer underline"
          >
            Dede Heri
          </a>
        </div>
      </div>

      {/* mobile menu */}

      <div
        className={`border-r z-10 fixed w-60 bg-white dark:bg-[#0d1117] dark:text-white  dark:border-[#30363d]  h-screen p-8 transition duration-500  space-y-1 ${
          menu ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={openAddTask}
          className="flex space-x-3 mb-4 items-center p-1 w-full  hover:bg-gray-100 hover:dark:bg-[#31363D] bg-gray-100 dark:bg-[#20262d] cursor-pointer transition duration-300 rounded-md "
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

        {message?.message?.error && <p>{message?.message?.error}</p>}
        {showInputLabel && <InputLabel />}

        {loading ? (
          <LabelLoading />
        ) : (
          <div className="space-y-1 overflow-scroll scrollbar-hide h-2/3 ">
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

                <Menu as="div" className="relative inline-block  text-left">
                  <div>
                    <Menu.Button className="group-hover:opacity-100 opacity-0 transiton duration-300">
                      <BsThreeDotsVertical />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-32 z-50 right-0 mt-3 origin-top-right bg-white dark:bg-[#0d1117] border dark:border-[#30363d] divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-1 ">
                        <Menu.Item>
                          <button className="group  hover:bg-gray-100 hover:dark:bg-[#31363D] flex rounded-md space-x-2 items-center w-full px-2 py-1 ">
                            <MdOutlineEdit fontSize={20} />
                            <p>Edit</p>
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="group  hover:bg-gray-100 hover:dark:bg-[#31363D] flex rounded-md space-x-2 items-center w-full px-2 py-1 ">
                            <MdDeleteOutline fontSize={20} />
                            <p>Delete</p>
                          </button>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </NavLink>
            ))}
          </div>
        )}

        <div className="text-sm text-gray-400 dark:text-gray-400">
          Create By{" "}
          <a
            href="https://github.com/dedeheri/todolist"
            target="_blank"
            className="cursor-pointer underline"
          >
            Dede Heri
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
