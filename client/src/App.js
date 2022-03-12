import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import TaskByLabel from "./pages/TaskByLabel";

// Redux
import * as actionTypes from "./redux/action-type";

// routes
import ProtectedRouters from "./routers/ProtectedRouters";
import Auth from "./pages/Auth";
import Cookies from "js-cookie";
import { getDataUsers } from "./redux/action/authorization";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();
  const {
    pin: { message_pin },
    delete: { message_delete },
    archive: { message_archive },
  } = useSelector((state) => state.task);

  useEffect(() => {
    function auth() {
      if (Cookies.get("token")) {
        dispatch({ type: actionTypes.IS_LOGGIN });
      }
    }

    auth();
  }, []);

  useEffect(() => {
    dispatch(getDataUsers());
  }, []);

  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.REMOVE_MESSAGE_PINS_TASK });
      dispatch({ type: actionTypes.REMOVE_DELETE_TASK });
      dispatch({ type: actionTypes.REMOVE_MESSAGE_ARCHIVE_TASK });
    };
  }, [message_pin, message_delete, message_archive]);

  return (
    <Routes>
      <Route path="/" element={<ProtectedRouters />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/label/:slug" element={<TaskByLabel />} />
        <Route path="/*" element={<NotFound />} />
      </Route>

      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
