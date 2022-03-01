import React, { Fragment, useState } from "react";

// headles UI
import { Menu, Transition } from "@headlessui/react";

// Icons
import {
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewBoards,
  HiOutlineX,
  HiOutlineSearch,
} from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsMoonStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GRID_COMPONENTS, MENU_COMPONENTS } from "../redux/action-type";

function Navbar() {
  const [searchShow, setSearchShow] = useState(false);

  const { menu, grid } = useSelector((state) => state.style);
  const dispatch = useDispatch();

  function openMenu() {
    dispatch({ type: MENU_COMPONENTS, menu: true });
  }
  function closeMenu() {
    dispatch({ type: MENU_COMPONENTS, menu: false });
  }

  function gridMode() {
    dispatch({ type: GRID_COMPONENTS, grid: false });
  }
  function listMode() {
    dispatch({ type: GRID_COMPONENTS, grid: true });
  }

  return (
    <div className="font-roboto sticky top-0 w-min-full border-b dark:border-[#30363d] h-14 px-3 md:px-6 flex items-center justify-between bg-white text-black dark:bg-[#0d1117] dark:text-white">
      <div className="flex space-x-2 items-center">
        {!menu ? (
          <button
            onClick={openMenu}
            className="hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer p-1 rounded-lg transition duration-300"
          >
            <HiOutlineMenu className="block md:hidden" fontSize={25} />
          </button>
        ) : (
          <button
            onClick={closeMenu}
            className="hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer p-1 rounded-lg transition duration-300"
          >
            <HiOutlineX className="block md:hidden" fontSize={25} />
          </button>
        )}

        <p className="font-bold text-2xl md:text-3xl whitespace-nowrap">
          Todo List
        </p>
      </div>

      <div className="flex space-x-3 items-center">
        {searchShow && (
          <input
            className="animate-side-in-right dark:border-[#30363d] border-b bg-white text-black dark:bg-[#0d1117] dark:text-white  outline-none w-28 ml-6"
            placeholder="Search..."
          />
        )}

        <HiOutlineSearch
          onClick={() => setSearchShow(!searchShow)}
          className="hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer p-1 rounded-lg transition duration-300"
          fontSize={30}
        />
        <BiCalendar
          fontSize={30}
          className="hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer p-1 rounded-lg transition duration-300"
        />

        {grid ? (
          <HiOutlineViewBoards
            onClick={gridMode}
            fontSize={31}
            className="hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer p-1 rounded-lg transition duration-300"
          />
        ) : (
          <HiOutlineViewGrid
            onClick={listMode}
            fontSize={31}
            className="hover:bg-gray-100 hover:dark:bg-[#31363D] cursor-pointer p-1 rounded-lg transition duration-300"
          />
        )}

        <>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex px-2  hover:bg-gray-100 hover:dark:bg-[#31363D] items-center justify-center w-full text-sm font-medium text-black dark:text-white rounded-lg duration-500">
                dedeheri@gmail.com
                <MdKeyboardArrowDown fontSize={26} />
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
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-[#0d1117] border dark:border-[#30363d] divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-1">
                  <Menu.Item>
                    <button className="group hover:bg-gray-100 hover:dark:bg-[#31363D] flex rounded-md space-x-4 items-center w-full p-2 ">
                      <BsMoonStars fontSize={18} />
                      <p>Appearance</p>
                    </button>
                  </Menu.Item>

                  <Menu.Item>
                    <button className="group hover:bg-gray-100 hover:dark:bg-[#31363D] flex rounded-md space-x-4 items-center w-full px-2 py-2 ">
                      <RiLogoutBoxRLine fontSize={20} />
                      <p>Log out</p>
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      </div>
    </div>
  );
}

export default Navbar;
