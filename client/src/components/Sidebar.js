import React, { useState } from "react";

// icons
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { MdOutlineFeed, MdOutlineArchive } from "react-icons/md";

import { labels } from "../labelsjson";
import Add from "./Add";
import InputLabel from "./InputLabel";

function Sidebar({ showMenu, setIsOpen }) {
  const [showInputLabel, setShowInputLabel] = useState(false);

  return (
    <>
      <div className="border-r border-white dark:border-[#30363d] h-screen p-8 md:block hidden transition duration-500 space-y-1">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex space-x-3 mb-4 items-center p-1 w-full bg-green-200 hover:bg-green-300 cursor-pointer transition duration-300 rounded-md"
        >
          <GrAdd fontSize={25} />
          <p className=" font-semibold text-xl">Add Task</p>
        </button>
        <div className="flex space-x-3 items-center p-1 hover:bg-green-100 cursor-pointer transition duration-300 rounded-md">
          <MdOutlineFeed fontSize={25} />
          <h1 className="font-semibold text-xl">Activity</h1>
        </div>

        <div className="flex space-x-3 items-center p-1 hover:bg-green-100 cursor-pointer transition duration-300 rounded-md">
          <MdOutlineArchive fontSize={25} />
          <h1 className="font-semibold text-xl">Archive</h1>
        </div>

        <div className="flex items-center justify-between mt-5 p-1">
          <p className="text-base font-medium text-gray-600">Label</p>
          <BsPlusLg
            onClick={() => setShowInputLabel(!showInputLabel)}
            fontSize={20}
            className="hover:bg-green-100 hover-animation rounded-full text-gray-600 p-1 cursor-pointer transition duration-300"
          />
        </div>

        {showInputLabel && <InputLabel />}

        <div className="space-y-1">
          {Object.values(labels).map((label, i) => (
            <div
              key={i}
              className="group flex justify-between items-center space-x-10  hover:bg-green-100 cursor-pointer transition p-1 duration-300 w-full rounded-md"
            >
              <div className="flex space-x-1 items-center">
                <h1 className="text-lg">{label.icon}</h1>
                <p className="text-lg">{label.title}</p>
              </div>

              <div className=" px-2 flex items-center">
                <button className="group-hover:opacity-100 opacity-0 transiton duration-300">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* mobile menu */}

      {showMenu && (
        <div className="border-r h-screen p-8 animate-slide-in transition duration-500 space-y-1">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex space-x-3 mb-4 items-center p-1 w-full bg-green-200 hover:bg-green-300 cursor-pointer transition duration-300 rounded-md"
          >
            <GrAdd fontSize={30} />
            <p className=" font-semibold text-xl">Add Task</p>
          </button>
          <div className="flex space-x-3 items-center p-1 hover:bg-green-100 cursor-pointer transition duration-300 rounded-md">
            <MdOutlineFeed fontSize={30} />
            <h1 className="font-semibold text-xl">Activity</h1>
          </div>

          <div className="flex space-x-3 items-center p-1 hover:bg-green-100 cursor-pointer transition duration-300 rounded-md">
            <MdOutlineArchive fontSize={30} />
            <h1 className="font-semibold text-xl">Archive</h1>
          </div>

          <div className="flex items-center justify-between mt-5 p-1">
            <p className="text-base font-medium text-gray-600">Label</p>
            <BsPlusLg
              onClick={() => setShowInputLabel(!showInputLabel)}
              fontSize={20}
              className="hover:bg-green-100 hover-animation rounded-full text-gray-600 p-1 cursor-pointer transition duration-300"
            />
          </div>

          {showInputLabel && <InputLabel />}

          <div className="space-y-1">
            {Object.values(labels).map((label, i) => (
              <div
                key={i}
                className="group flex justify-between items-center space-x-10  hover:bg-green-100 cursor-pointer transition p-1 duration-300 w-full rounded-md"
              >
                <div className="flex space-x-1 items-center">
                  <h1 className="text-lg">{label.icon}</h1>
                  <p className="text-lg">{label.title}</p>
                </div>

                <div className=" px-2 flex items-center">
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
