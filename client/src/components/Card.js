import React from "react";

// icons
import { BsCalendarDate, BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { HiOutlineArchive } from "react-icons/hi";
import { RiPushpinLine } from "react-icons/ri";

function Card({ title, grid, label, date }) {
  function transcut(props, grid) {
    if (grid) {
      return props.length > 120 ? props.substring(0, 120) + "..." : props;
    } else {
      return props;
    }
  }

  return (
    <div className="border dark:border-[#30363d] p-4 animate-slide-down rounded-lg cursor-pointer hover:border-gray-400 hover:dark:border-[#535555] space-y-5 group trasition duration-500">
      <div className="flex space-x-2 items-center text-black bg-yellow-200 px-2 w-32 rounded-lg ">
        <BsCalendarDate fontSize={24} />
        <p className="whitespace-nowrap font-medium">{date}</p>
      </div>
      <p className="text-md leading-5 md:text-lg md:leading-5">
        {transcut(title, grid)}
      </p>

      {label ? (
        <div className="flex justify-between items-center">
          <div className="bg-gray-100 dark:bg-[#20262d] py-1 px-3 rounded-xl flex space-x-2">
            <p>{label?.icons}</p>
            <p className="font-medium text-md">{label?.title}</p>
          </div>

          <div className="opacity-0 group-hover:opacity-100 trasition duration-500">
            <div className="lg:flex hidden items-center space-x-1 ">
              <RiPushpinLine
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
              <MdDeleteOutline
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
              <MdOutlineEdit
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
              <HiOutlineArchive
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
            </div>

            <div className="lg:hidden flex items-center space-x-1 ">
              <BsThreeDotsVertical
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="opacity-0 group-hover:opacity-100  trasition duration-500">
          <div className="flex justify-between items-center space-x-1 ">
            <RiPushpinLine
              fontSize={30}
              className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
            />
            <MdDeleteOutline
              fontSize={30}
              className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
            />
            <MdOutlineEdit
              fontSize={30}
              className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
            />
            <HiOutlineArchive
              fontSize={30}
              className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
