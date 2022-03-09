import React from "react";

import moment from "moment";

// icons
import { BsCalendarDate } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { HiOutlineArchive, HiArchive } from "react-icons/hi";
import { RiPushpinLine, RiPushpinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { MODAL_DELETE_ON, SLIDE_DETAIL } from "../redux/action-type";
import { archiveTask, pinTask } from "../redux/action/task";

function Card({
  id,
  content,
  grid,
  label,
  startDate,
  endDate,
  title,
  pin,
  archives,
  time,
}) {
  const dispatch = useDispatch();

  function transcut(props, grid) {
    if (grid) {
      return props.length > 400 ? props.substring(0, 400) + "..." : props;
    } else {
      return props;
    }
  }

  function detail(id) {
    dispatch({ type: SLIDE_DETAIL, slideDetail: true, idTask: id });
  }

  function pins(id, pin) {
    dispatch(pinTask(id, pin));
  }

  function archive(id, v) {
    dispatch(archiveTask(id, v));
  }

  function deleteTask(id, title) {
    dispatch({ type: MODAL_DELETE_ON, modal: true, idTask: id, title: title });
  }

  return (
    <div className="cursor-pointer group break-inside-avoid-column">
      <div className="border dark:border-[#30363d] p-4 rounded-lg hover:border-gray-400 hover:dark:border-[#535555]  trasition duration-500">
        <div onClick={() => detail(id)} className="space-y-3 mt-2">
          {time && (
            <div className="flex justify-start">
              <div className="flex space-x-2  dark:bg-[#20262d] bg-gray-100 py-1 px-3 rounded-xl   items-center dark:text-white text-black">
                <BiTimeFive />
                <p className="md:text-base font-medium text-sm"> {time}</p>
              </div>
            </div>
          )}

          {startDate && endDate && (
            <div className="flex justify-start overflow-x-scroll scrollbar-hide">
              <div className="flex space-x-2 dark:bg-[#20262d] bg-gray-100 py-1 px-3  rounded-xl items-center dark:text-white text-black">
                <BsCalendarDate fontSize={16} />
                <p className="md:text-base font-medium text-sm whitespace-nowrap ">
                  {moment(startDate).format("LL")} -{" "}
                  {moment(endDate).format("LL")}
                </p>
              </div>
            </div>
          )}

          {title && <p className="whitespace-nowrap text-xl">{title}</p>}

          <p className="text-md leading-5 md:text-lg md:leading-6 whitespace-pre-line">
            {transcut(content, grid)}
          </p>

          {label && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2 dark:bg-[#20262d] py-1 px-3 rounded-xl bg-gray-100 ">
                <p>{label?.icons}</p>
                <p className="md:text-base font-medium text-sm">
                  {label?.title}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="opacity-0 group-hover:opacity-100 trasition duration-500 mt-3">
          <div className="flex justify-between items-center space-x-1 ">
            {pin ? (
              <RiPushpinFill
                onClick={() => pins(id, !pin)}
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100  p-1 rounded-full"
              />
            ) : (
              <RiPushpinLine
                onClick={() => pins(id, !pin)}
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100  p-1 rounded-full"
              />
            )}

            <MdDeleteOutline
              onClick={() => deleteTask(id, title)}
              fontSize={30}
              className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
            />
            <MdOutlineEdit
              fontSize={30}
              className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
            />
            {archives ? (
              <HiArchive
                onClick={() => archive(id, false)}
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
            ) : (
              <HiOutlineArchive
                onClick={() => archive(id, true)}
                fontSize={30}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
