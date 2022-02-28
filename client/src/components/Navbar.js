import React, { Fragment, useState } from "react";

// headles UI
import { Menu, Transition } from "@headlessui/react";

// Icons
import { GrMenu } from "react-icons/gr";
import {
  BsCalendarEvent,
  BsGrid,
  BsViewStacked,
  BsSearch,
} from "react-icons/bs";

function Navbar({ view, setView, showMenu, setShowMenu }) {
  const [searchShow, setSearchShow] = useState(false);

  return (
    <div className="font-roboto border-b dark:border-[#30363d] h-14 px-3 md:px-10 flex items-center justify-between bg-white text-black dark:bg-[#0d1117] dark:text-white">
      <div className="flex space-x-2 items-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="hover:bg-green-100  rounded-lg cursor-pointer transition duration-300"
        >
          <GrMenu className="p-1 block md:hidden" fontSize={30} />
        </button>
        <p className="font-bold text-2xl md:text-3xl">Todo List</p>
      </div>

      <div className="flex space-x-3 items-center">
        {searchShow && (
          <input
            className="animate-side-in-right border-b outline-none w-28"
            placeholder="Search..."
          />
        )}

        <BsSearch
          onClick={() => setSearchShow(!searchShow)}
          fontSize={30}
          className="hover:bg-green-100 cursor-pointer p-1 rounded-lg transition duration-300"
        />
        <BsCalendarEvent
          fontSize={30}
          className="hover:bg-green-100 cursor-pointer p-1 rounded-lg transition duration-300"
        />

        {!view ? (
          <BsGrid
            onClick={() => setView(!view)}
            fontSize={30}
            className="hover:bg-green-100 cursor-pointer p-1 rounded-lg transition duration-300"
          />
        ) : (
          <BsViewStacked
            onClick={() => setView(!view)}
            fontSize={30}
            className="hover:bg-green-100 cursor-pointer p-1 rounded-lg transition duration-300"
          />
        )}

        <>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-black bg-gray-200 rounded-full ">
                H
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
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Edit
                      </button>
                    )}
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
