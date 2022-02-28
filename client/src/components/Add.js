import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import InputFiles from "react-input-files";

import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/entry.nostyle";

// icons
import { HiOutlineArchive, HiSelector } from "react-icons/hi";
import { BiCalendar, BiLabel } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { RiPushpinLine } from "react-icons/ri";
import { AiOutlinePicture } from "react-icons/ai";

import Button from "./Button";

import { labels } from "../labelsjson";

function Add({ isOpen, setIsOpen }) {
  const [date, setDate] = useState(null);
  const [calendar, setCalender] = useState(false);
  const [label, setLabel] = useState(false);
  const [selectLabel, setSelectLabel] = useState(null);

  useEffect(() => {
    calendar ? setDate(new Date()) : setDate(null);
    label ? setSelectLabel(labels[0]) : setSelectLabel(null);
  }, [calendar, label]);

  return (
    <>
      {isOpen && (
        <div className="absolute z-50 top-14 right-0 h-screen w-1/3 border-l dark:border-[#30363d] animate-slide-in-right bg-white text-black dark:bg-[#0d1117] dark:text-white p-5 ">
          <div className="flex justify-between items-center mt-4">
            <p className="font-medium text-xl">Add Task</p>

            <div
              className="p-1 cursor-pointer hover:bg-green-100 rounded-lg duration-300 transition "
              onClick={() => setIsOpen(false)}
            >
              <MdClose fontSize={25} />
            </div>
          </div>

          <div className="w-full mt-8 space-y-3">
            {calendar && (
              <div className="flex items-center space-x-3 animate-slide-down">
                <p className="font-medium">Date : </p>
                <DatePicker onChange={setDate} value={date} />
              </div>
            )}

            {label && (
              <div className="flex items-center space-x-3 animate-slide-down">
                <p className="font-medium">Label : </p>
                <Listbox value={selectLabel} onChange={setSelectLabel}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-[#0d1117] rounded-lg border dark:border-[#30363d] cursor-pointer">
                      <span className="block truncate">
                        {selectLabel?.icon} {selectLabel?.title}
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
                      <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {labels.map((label, i) => (
                          <Listbox.Option
                            key={i}
                            className={({ active }) =>
                              `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                active ? "bg-green-200" : "text-gray-900"
                              }`
                            }
                            value={label}
                          >
                            {({ selectLabel }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectLabel ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {label.icon}
                                  {label.title}
                                </span>
                                {selectLabel ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                    <BsCheck
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            )}
            <textarea className="border dark:border-[#30363d] dark:bg-[#0d1117] duration-150  rounded-md w-full h-28 outline-none p-2 " />

            <div className="flex cursor-pointer items-center justify-between">
              <RiPushpinLine
                fontSize={32}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full "
              />
              <HiOutlineArchive
                fontSize={32}
                className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full "
              />
              <InputFiles>
                <AiOutlinePicture
                  fontSize={32}
                  className="hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full "
                />
              </InputFiles>
              <BiLabel
                onClick={() => setLabel(!label)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  label ? "text-black bg-green-200" : "text-gray-800"
                } `}
              />
              <BiCalendar
                onClick={() => setCalender(!calendar)}
                fontSize={32}
                className={`hover:dark:bg-[#20262d] hover:bg-gray-100 hover:dark:white-black p-1 rounded-full ${
                  calendar
                    ? "hover:dark:bg-[#20262d] hover:bg-gray-100"
                    : "text-gray-400"
                } `}
              />
            </div>

            <div className="flex justify-end">
              <Button />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Add;
