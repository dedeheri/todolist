import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// icons
import { HiOutlineArchive, HiSelector } from "react-icons/hi";
import { BiCalendar, BiLabel } from "react-icons/bi";

import { MdClose, MdTitle } from "react-icons/md";
import { RiPushpinLine } from "react-icons/ri";

import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_DATA_IN_ADD_TASK,
  SLIDETASK_COMPONENTS,
} from "../redux/action-type";
import { addTask } from "../redux/action/task";
import moment from "moment";

import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";

function Add() {
  const {
    loading,
    success: { labels },
  } = useSelector((state) => state.labels);

  const { slideTask } = useSelector((state) => state.style);
  const {
    add: { message, error },
  } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const [idLabels, setIdLabels] = useState(null);
  const [content, setContent] = useState("");
  const [pins, setPins] = useState(false);
  const [archive, setArchive] = useState(false);
  const [title, setTitle] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [showTitle, setShowTitle] = useState(false);
  const [calendar, setCalender] = useState(false);
  const [label, setLabel] = useState(false);
  const [selectLabel, setSelectLabel] = useState(null);

  useEffect(() => {
    if (calendar) {
      setStartDate(new Date());
      setEndDate(new Date());
    } else {
      setStartDate(null);
      setEndDate(null);
    }
    label ? setSelectLabel(labels?.data[0]) : setSelectLabel(null);
    showTitle ? setTitle("") : setTitle(null);
  }, [calendar, label, showTitle]);

  useEffect(() => {
    selectLabel !== false ? setIdLabels(selectLabel?._id) : setIdLabels(null);
  }, [selectLabel]);

  function closeAddTask() {
    dispatch({ type: SLIDETASK_COMPONENTS, slideTask: false });
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(
      addTask(content, title, idLabels, startDate, endDate, pins, archive)
    );
  };

  useEffect(() => {
    if (message?.length > 0) {
      dispatch({ type: SLIDETASK_COMPONENTS, slideTask: false });
    }

    return () => dispatch({ type: REMOVE_DATA_IN_ADD_TASK });
  }, [message]);

  return (
    <>
      <div
        className={`fixed z-10 top-14 right-0 h-screen w-full md:w-1/3 border-l dark:border-[#30363d] bg-white text-black dark:bg-[#0d1117] dark:text-white p-5 duration-700 ${
          slideTask ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mt-4">
          <p className="font-medium text-xl">Add Task</p>

          <div
            className="p-1 cursor-pointer hover:bg-gray-100 hover:dark:bg-[#20262d] rounded-lg duration-300 transition "
            onClick={closeAddTask}
          >
            <MdClose fontSize={25} />
          </div>
        </div>

        <div className="w-full mt-8">
          {showTitle && (
            <div className="flex items-center space-x-3 animate-slide-down">
              <p className="font-medium">Title : </p>
              <div className="dark:bg-[#0d1117] rounded-lg border dark:border-[#30363d] bg-white flex items-center p-2">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="h-5 bg-transparent outline-none"
                />
              </div>
            </div>
          )}

          {calendar && (
            <div className="flex items-center space-x-3 animate-slide-down mt-2">
              <p className="font-medium">Date : </p>
              <div className="dark:bg-[#0d1117] rounded-lg border dark:border-[#30363d] bg-white flex items-center p-2 space-x-4">
                <DatePicker
                  onChange={setStartDate}
                  clearIcon={<MdClose fontSize={20} />}
                  calendarIcon={<BiCalendar fontSize={20} />}
                  calendarClassName={"dark:bg-[#0d1117]"}
                  className={"dark:text-white text-black"}
                  value={startDate}
                />
                <DatePicker
                  onChange={setEndDate}
                  clearIcon={<MdClose fontSize={20} />}
                  calendarIcon={<BiCalendar fontSize={20} />}
                  calendarClassName={"dark:bg-[#0d1117]"}
                  className={"dark:text-white text-black"}
                  value={endDate}
                />
              </div>
            </div>
          )}

          {label && (
            <div className="flex items-center space-x-3 animate-slide-down mt-2">
              <p className="font-medium">Label : </p>
              <Listbox value={selectLabel} onChange={setSelectLabel}>
                <div className="relative rounded-lg border dark:border-[#30363d]">
                  <Listbox.Button className="relative w-full py-1 pl-2 pr-10 text-left   cursor-pointer text-lg">
                    <span className="block truncate">
                      {selectLabel?.icons} {selectLabel?.title}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <HiSelector
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute  scrollbar-hide w-full py-1 mt-1 overflow-auto text-base border dark:border-[#30363d]  bg-white  dark:bg-[#0d1117]  rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                      {Object.values(labels?.data).map((label, i) => (
                        <Listbox.Option
                          key={i}
                          className={({ active }) =>
                            ` flex space-x-2 cursor-pointer select-none relative  px-2 py-1 ${
                              active
                                ? "dark:bg-[#30363d] bg-gray-200"
                                : "text-black dark:bg-[#0d1117]   dark:text-white bg-white z-10"
                            }`
                          }
                          value={label}
                        >
                          <span className="block  text-lg">{label.icons}</span>
                          <span className="block whitespace-nowrap  text-lg">
                            {label.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          )}
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="border dark:border-[#30363d] dark:bg-[#0d1117] duration-150  rounded-md w-full h-28 outline-none p-2 mt-5"
          />

          <div className="flex cursor-pointer items-center justify-between mt-3">
            <div className="relative group">
              <RiPushpinLine
                onClick={() => setPins(!pins)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  pins
                    ? "hover:dark:bg-[#20262d] hover:bg-gray-100 dark:text-white dark:bg-[#31363D] bg-gray-200 text-black"
                    : "dark:text-white text-black"
                } `}
              />
              <p className="absolute top-10 bg-gray-200 dark:bg-[#20262d]  hover:bg-gray-200 p-2 rounded-xl scale-0 group-hover:scale-100 duration-100 transition">
                Pins
              </p>
            </div>

            <div className="relative group">
              <HiOutlineArchive
                onClick={() => setArchive(!archive)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  archive
                    ? "hover:dark:bg-[#20262d] hover:bg-gray-100 dark:text-white dark:bg-[#31363D] bg-gray-200 text-black"
                    : "dark:text-white text-black"
                } `}
              />
              <p className="absolute  top-10 bg-gray-200 dark:bg-[#20262d]  hover:bg-gray-200 p-2 rounded-xl scale-0 group-hover:scale-100 duration-100 transition">
                Archive
              </p>
            </div>

            <div className="relative group">
              <MdTitle
                onClick={() => setShowTitle(!showTitle)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  showTitle
                    ? "hover:dark:bg-[#20262d] hover:bg-gray-100 dark:text-white dark:bg-[#31363D] bg-gray-200 text-black"
                    : "dark:text-white text-black"
                } `}
              />

              <p className="absolute top-10 bg-gray-200 dark:bg-[#20262d]  hover:bg-gray-200 p-2 rounded-xl scale-0 group-hover:scale-100 duration-100 transition">
                Title
              </p>
            </div>

            <div className="relative group">
              <BiLabel
                onClick={() => setLabel(!label)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  label
                    ? "hover:dark:bg-[#20262d] hover:bg-gray-100 dark:text-white dark:bg-[#31363D] bg-gray-200 text-black"
                    : "dark:text-white text-black"
                } `}
              />

              <p className="absolute top-10 bg-gray-200 dark:bg-[#20262d]  hover:bg-gray-200 p-2 rounded-xl scale-0 group-hover:scale-100 duration-100 transition">
                Label
              </p>
            </div>

            <div className="relative group">
              <BiCalendar
                onClick={() => setCalender(!calendar)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  calendar
                    ? "hover:dark:bg-[#20262d] hover:bg-gray-100 dark:text-white dark:bg-[#31363D] bg-gray-200 text-black"
                    : "dark:text-white text-black"
                } `}
              />

              <p className="absolute top-10 bg-gray-200 dark:bg-[#20262d]  hover:bg-gray-200 p-2 rounded-xl scale-0 group-hover:scale-100 duration-100 transition">
                Date
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-16">
            <Button
              onClick={handleAddTask}
              title={"Add Task"}
              width={"md:w-1/2 w-full"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
