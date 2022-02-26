import React from "react";

// icons
import { BsCalendarDate, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { HiOutlineArchive } from "react-icons/hi";

function Card({ title, view, labels, icons, date }) {
  function transcut(props, view) {
    if (view) {
      return props.length > 120 ? props.substring(0, 120) + "..." : props;
    } else {
      return props;
    }
  }

  return (
    <div className="border p-4 animate-slide-down rounded-lg cursor-pointer hover:border-green-400 space-y-5 group trasition duration-500">
      <div className="flex space-x-2 items-center bg-yellow-200 px-2 w-32 rounded-lg ">
        <BsCalendarDate fontSize={24} />
        <p className="whitespace-nowrap font-medium">{date}</p>
      </div>
      <p className="text-md leading-5 md:text-lg md:leading-5">
        {transcut(title, view)}
      </p>

      <div className="flex justify-between items-center">
        <div className="bg-gray-100 py-1 px-3 rounded-xl flex space-x-2">
          <p>{icons}</p>
          <p className="font-medium text-md">{labels}</p>
        </div>

        <div className="opacity-0 group-hover:opacity-100 trasition duration-500">
          <div className="lg:flex hidden items-center space-x-1 ">
            <BsPin
              fontSize={30}
              className="hover:bg-green-100 p-1 rounded-full"
            />
            <MdDeleteOutline
              fontSize={30}
              className="hover:bg-green-100 p-1 rounded-full"
            />
            <MdOutlineEdit
              fontSize={30}
              className="hover:bg-green-100 p-1 rounded-full"
            />
            <HiOutlineArchive
              fontSize={30}
              className="hover:bg-green-100 p-1 rounded-full"
            />
          </div>
          <div className="lg:hidden flex items-center space-x-1 ">
            <BsThreeDotsVertical
              fontSize={30}
              className="hover:bg-green-100 p-1 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
