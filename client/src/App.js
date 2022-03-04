import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Sidebar from "./components/Sidebar";
import Archive from "./pages/Archive";

import Auth from "./pages/Auth";

import { MENU_COMPONENTS } from "./redux/action-type";
import { getTask } from "./redux/action/task";
import TaskByLabel from "./pages/TaskByLabel";
import Add from "./components/Add";
import { getDataUsers } from "./redux/action/authorization";
import Calender from "./components/Calender";
import Detail from "./components/Detail";

function App() {
  const dispatch = useDispatch();
  const { darkMode, menu } = useSelector((state) => state.style);
  const {
    add: { message, error },
  } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTask());
  }, [message]);

  useEffect(() => {
    dispatch(getDataUsers());
  }, []);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complate" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/label/:slug" element={<TaskByLabel />} />
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
