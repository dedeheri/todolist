import React from "react";

import moment from "moment";

// icons
import { BsCalendarDate, BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { HiOutlineArchive } from "react-icons/hi";
import { RiPushpinLine } from "react-icons/ri";
import {
  createSearchParams,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { SLIDE_DETAIL } from "../redux/action-type";

function Card({ id, content, grid, label, startDate, endDate, title }) {
  function transcut(props, grid) {
    if (grid) {
      return props.length > 120 ? props.substring(0, 120) + "..." : props;
    } else {
      return props;
    }
  }
  // console.log(id);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function detail() {
    navigate({
      pathname: "/",
      search: `${createSearchParams({ todo: id })}`,
    });
    dispatch({ type: SLIDE_DETAIL, slideDetail: true });
  }

  return (
    <div
      onClick={detail}
      className="cursor-pointer group break-inside-avoid-column"
    >
      <div className="border dark:border-[#30363d] p-4 rounded-lg hover:border-gray-400 hover:dark:border-[#535555] space-y-4  trasition duration-500">
        {startDate && endDate && (
          <div className="flex space-x-2 items-center dark:text-white text-black">
            <BsCalendarDate fontSize={16} />
            <p className="text-sm md:text-md">
              {moment(startDate).format("LL")} - {moment(endDate).format("LL")}
            </p>
          </div>
        )}
        {title && <p className="whitespace-nowrap text-xl">{title}</p>}

        <p className="text-md leading-5 md:text-lg md:leading-5">
          {transcut(content, grid)}
        </p>

        {label ? (
          <div className="flex justify-between items-center">
            <div className="bg-gray-100 dark:bg-[#20262d] py-1 px-3 rounded-xl flex space-x-2">
              <p>{label?.icons}</p>
              <p className="font-medium text-md">{label?.title}</p>
            </div>

            <div className="opacity-0 group-hover:opacity-100 trasition duration-500 bottom-0">
              <div className="sm:flex hidden items-center space-x-1 ">
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

              <div className="sm:hidden flex items-center space-x-1 ">
                <BsThreeDotsVertical
                  fontSize={30}
                  className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="opacity-0 group-hover:opacity-100 trasition inset-0 duration-500">
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
    </div>
  );
}

export default Card;
