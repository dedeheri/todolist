import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTaskById } from "../redux/action/task";

const Detail = () => {
  const {
    detail: { slideDetail },
  } = useSelector((state) => state.style);
  const {
    loading,
    detail: { task: dataTask },
  } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const { search } = useLocation();
  useEffect(() => {
    dispatch(getTaskById(search));
  }, [slideDetail]);

  console.log(dataTask);

  return (
    <div
      className={`fixed z-10 top-14 right-0 h-screen  md:w-1/2 w-full  border-l dark:border-[#30363d] bg-white text-black dark:bg-[#0d1117] dark:text-white p-5 duration-700 ease-in-out ${
        slideDetail ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end mb-4 mx-3 cursor-pointer  ">
        <h1 className="w-24 hover:bg-gray-100 hover:dark:bg-[#31363D]  bg-gray-100 dark:bg-[#20262d]  transition p-2 rounded-lg pl-7  duration-300">
          Close
        </h1>
      </div>

      <div>
        <p className="font-medium text-2xl">title</p>
        <p className="font-base text-xl">
          {moment(dataTask.data?.startDate).format("ll")}
        </p>
        <p className="font-base text-xl">{dataTask.data?.label?.icons}</p>
        <p className="font-base text-xl">{dataTask.data?.content}</p>
      </div>
    </div>
  );
};

export default Detail;
