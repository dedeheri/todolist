import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Login from "./pages/Auth";
import TaskByLabel from "./pages/TaskByLabel";

// Redux
import {
  MENU_COMPONENTS,
  REMOVE_DELETE_TASK,
  REMOVE_MESSAGE_ARCHIVE_TASK,
  REMOVE_MESSAGE_PINS_TASK,
} from "./redux/action-type";

// routes
import ProtectedRouters from "./routers/ProtectedRouters";
import Register from "./pages/Register";
import Auth from "./pages/Auth";

function App() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.style);
  const {
    pin: { message_pin },
    delete: { message_delete },
    archive: { message_archive },
  } = useSelector((state) => state.task);

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
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route element={<ProtectedRouters />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/label/:slug" element={<TaskByLabel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
