import React, { useEffect, useRef } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// npm
import Calendar from "react-awesome-calendar";
import { CALENDER_COMPONENTS } from "../redux/action-type";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Calender() {
  const { darkMode, calender } = useSelector((state) => state.style);
  const {
    loading,
    success: { task },
  } = useSelector((state) => state.task);

  const dispatch = useDispatch();
  function closeCalender() {
    dispatch({ type: CALENDER_COMPONENTS, calender: false });
  }

  useEffect(() => {
    if (darkMode) {
      const calendarWrapper =
        document.getElementsByClassName("calendarWrapper");
      const modeButton = document.getElementsByClassName("modeButton");

      for (let i = 0; i < calendarWrapper.length; i++) {
        calendarWrapper[i].style.color = "white";
      }
      for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].style.color = "white";
      }
    } else {
      const calendarWrapper =
        document.getElementsByClassName("calendarWrapper");
      const modeButton = document.getElementsByClassName("modeButton");

      for (let i = 0; i < calendarWrapper.length; i++) {
        calendarWrapper[i].style.color = "black";
      }
      for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].style.color = "black";
      }
    }
  }, [darkMode, calender]);

  const events = [];
  for (let i = 0; i < task?.data?.length; i++) {
    events.push({
      id: task?.data[i]._id,
      color: "#8BA6C5",
      from: task?.data[i].startDate,
      to: task?.data[i].endDate,
      title: task?.data[i].content,
    });
  }

  const handleReff = useRef();
  useEffect(() => {
    function hanldeAnyClick(e) {
      if (handleReff.current && !handleReff.current.contains(e.target)) {
        dispatch({ type: CALENDER_COMPONENTS, calender: false });
      }
    }

    document.addEventListener("mousedown", hanldeAnyClick);

    return () => document.removeEventListener("mousedown", hanldeAnyClick);
  }, [handleReff]);

  return (
    <div
      ref={handleReff}
      className={`fixed z-10 top-14 right-0 h-screen  md:w-1/2 w-full  border-l dark:border-[#30363d] bg-white text-black dark:bg-[#0d1117] dark:text-white p-5 duration-700 ease-in-out ${
        calender ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mt-4 mb-10">
        <p className="font-medium text-xl">Calendar</p>

        <div
          className="p-1 cursor-pointer hover:bg-gray-100 hover:dark:bg-[#20262d] rounded-lg duration-300 transition "
          onClick={closeCalender}
        >
          <MdClose fontSize={25} />
        </div>
      </div>
      <Calendar events={events} />
    </div>
  );
}

export default Calender;
