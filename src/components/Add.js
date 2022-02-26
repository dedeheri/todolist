import React, { Fragment } from "react";

import { Transition, Dialog } from "@headlessui/react";
import { BsPin, BsCalendar2Date } from "react-icons/bs";
import { HiOutlineArchive } from "react-icons/hi";
import { MdLabelOutline } from "react-icons/md";

function Add({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed  bottom-48 right-0 left-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-4xl border p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="mt-2">
                  <textarea
                    className="w-full outline-none"
                    placeholder="Create Note"
                  />
                </div>

                <div className="mt-4 flex items-center cursor-pointer space-x-2">
                  <BsPin
                    fontSize={28}
                    className="hover:bg-green-100 p-1 rounded-lg"
                  />
                  <HiOutlineArchive
                    fontSize={30}
                    className="hover:bg-green-100 p-1 rounded-lg"
                  />
                  <MdLabelOutline
                    fontSize={30}
                    className="hover:bg-green-100 p-1 rounded-lg"
                  />
                  <BsCalendar2Date
                    fontSize={27}
                    className="hover:bg-green-100 p-1 rounded-lg"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Add;
