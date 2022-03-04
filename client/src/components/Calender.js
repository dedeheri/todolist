import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// npm
import Calendar from "react-awesome-calendar";
import { CALENDER_COMPONENTS } from "../redux/action-type";

function Calender() {
  const { darkMode, calender } = useSelector((state) => state.style);

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

  const events = [
    {
      id: 1,
      color: "#fd3153",
      from: "2019-05-02T18:00:00+00:00",
      to: "2019-05-05T19:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2019-05-01T13:00:00+00:00",
      to: "2019-05-05T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: new Date(),
      to: new Date(),
      title: "This is also another event",
    },
  ];

  return (
    <>
      <div
        className={`fixed z-10 top-14 right-0 h-screen  md:w-1/2 w-full  border-l dark:border-[#30363d] bg-white text-black dark:bg-[#0d1117] dark:text-white p-5 duration-700 ease-in-out ${
          calender ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={closeCalender}
          className="flex justify-end mb-4 mx-3 cursor-pointer  "
        >
          <h1 className="w-24 hover:bg-gray-100 hover:dark:bg-[#31363D]  bg-gray-100 dark:bg-[#20262d]  transition p-2 rounded-lg pl-7  duration-300">
            Close
          </h1>
        </div>
        <Calendar events={events} />
      </div>
    </>
  );
}

export default Calender;
