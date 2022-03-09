import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskById } from "../redux/action/task";

import { BiCalendar, BiTimeFive } from "react-icons/bi";
import { SLIDE_OOF_DETAIL } from "../redux/action-type";

const Detail = () => {
  const {
    detail: { slideDetail, idTask },
  } = useSelector((state) => state.style);
  const {
    detail: { task: dataTask },
  } = useSelector((state) => state.task);

  const dispatch = useDispatch();
  useEffect(() => {
    if (idTask.length > 0) {
      dispatch(getTaskById(idTask));
    }
  }, [idTask]);

  function closeSlide() {
    dispatch({ type: SLIDE_OOF_DETAIL, slideDetail: false });
  }

  return (
    <div
      className={`fixed overflow-x-scroll scrollbar-hide  top-0 right-0 h-full  md:w-1/2 w-full  border-l dark:border-[#30363d] bg-white text-black dark:bg-[#0d1117] dark:text-white p-5 duration-700 ease-in-out ${
        slideDetail ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end mb-4 mx-3 cursor-pointer pt-20">
        <h1
          onClick={closeSlide}
          className="w-24 hover:bg-gray-100 hover:dark:bg-[#31363D]  bg-gray-100 dark:bg-[#20262d]  transition p-2 rounded-lg pl-7  duration-300"
        >
          Close
        </h1>
      </div>

      <div className="space-y-4">
        {dataTask?.data?.title && (
          <p className="font-medium text-2xl">{dataTask?.data?.title}</p>
        )}

        <div className="flex space-x-2 items-center overflow-x-scroll scrollbar-hide">
          {dataTask?.data?.time && (
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-[#20262d] rounded-xl px-3 py-1">
              <BiTimeFive fontSize={23} />
              <p className="font-base text-xl">{dataTask?.data?.time}</p>
            </div>
          )}

          {dataTask?.data?.startDate && (
            <div className="flex items-center space-x-2 whitespace-nowrap bg-gray-100 dark:bg-[#20262d] rounded-xl px-3 py-1">
              <BiCalendar fontSize={23} />

              <p className="font-base text-xl">
                {moment(dataTask.data?.startDate).format("ll")}
              </p>
              <p className="font-base text-xl">-</p>
              <p className="font-base text-xl">
                {moment(dataTask.data?.endDate).format("ll")}
              </p>
            </div>
          )}

          {dataTask?.data?.label && (
            <div className="flex space-x-2 bg-gray-100 dark:bg-[#20262d] rounded-xl px-3 py-1">
              <p className="font-base text-xl">{dataTask.data?.label?.icons}</p>
              <p className="font-base text-xl">{dataTask.data?.label?.title}</p>
            </div>
          )}
        </div>

        <p className="font-base text-xl whitespace-pre-line">
          {dataTask.data?.content}
        </p>
      </div>
    </div>
  );
};

export default Detail;
