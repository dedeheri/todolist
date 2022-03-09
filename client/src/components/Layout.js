import React from "react";
import { useSelector } from "react-redux";
import Add from "./Add";
import Calender from "./Calender";
import Detail from "./Detail";
import ModalDelete from "./ModalDelete";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const { darkMode } = useSelector((state) => state.style);

  return (
    <div className={`h-screen ${darkMode ? "dark bg-[#0d1117]" : "light"}`}>
      <Navbar />
      <div className="flex font-roboto bg-white text-black dark:bg-[#0d1117] dark:text-white">
        <Sidebar />
        <Calender />
        <Add />
        <Detail />
        <ModalDelete />
        {children}
      </div>
    </div>
  );
}

export default Layout;
