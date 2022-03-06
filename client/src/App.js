import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Sidebar from "./components/Sidebar";
import Archive from "./pages/Archive";

import Auth from "./pages/Auth";

import {
  MENU_COMPONENTS,
  REMOVE_DELETE_TASK,
  REMOVE_MESSAGE_ARCHIVE_TASK,
  REMOVE_MESSAGE_PINS_TASK,
} from "./redux/action-type";
import { getTask } from "./redux/action/task";
import TaskByLabel from "./pages/TaskByLabel";
import Add from "./components/Add";
import { getDataUsers } from "./redux/action/authorization";
import Calender from "./components/Calender";
import Detail from "./components/Detail";
import ModalDelete from "./components/ModalDelete";

function App() {
  const dispatch = useDispatch();
  const { darkMode, menu, search } = useSelector((state) => state.style);
  const {
    add: { message, error },
    pin: { message_pin },
    delete: { message_delete },
    archive: { message_archive },
  } = useSelector((state) => state.task);

  console.log(message_archive);

  useEffect(() => {
    dispatch(getTask());
  }, [message, message_pin, message_delete, message_archive]);

  useEffect(() => {
    dispatch(getDataUsers());
  }, []);

  useEffect(() => {
    return () => {
      dispatch({ type: REMOVE_MESSAGE_PINS_TASK });
      dispatch({ type: REMOVE_DELETE_TASK });
      dispatch({ type: REMOVE_MESSAGE_ARCHIVE_TASK });
    };
  }, [message_pin, message_delete, message_archive]);

  useEffect(() => {
    function hideMenuAuto() {
      if (window.innerWidth > 768 && menu == true) {
        dispatch({ type: MENU_COMPONENTS, menu: false });
      }
    }

    window.addEventListener("resize", hideMenuAuto);

    return () => window.removeEventListener("resize", hideMenuAuto);
  });
  return (
    <div className={`h-screen ${darkMode ? "dark bg-[#0d1117]" : "light"}`}>
      <Navbar />
      <Grid>
        <Sidebar />
        <Calender />
        <Add />
        <Detail />
        <ModalDelete />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complate" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/label/:slug" element={<TaskByLabel />} />
          {/* <Route path="/:id" element={<Detail />} /> */}
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
