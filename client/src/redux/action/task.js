import Cookies from "js-cookie";
import url from "../../api/url";
import {
  ADD_TASK,
  FAILED_ADD_TASK,
  FAILED_GET_TASK,
  GET_TASK,
  GET_TASK_BY_LABEL,
} from "../action-type";

const config = {
  headers: {
    "Content-type": "Application/json",
    authorization: `Bearer ${Cookies.get("Token")}`,
  },
};

export function getTask() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/task", config);
      dispatch({ type: GET_TASK, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_GET_TASK, payload: error });
    }
  };
}

export function addTask(content, title, date, idLabels, pins, archive) {
  return async (dispatch) => {
    try {
      const { data } = await url.post(
        "/addtask",
        {
          content,
          title,
          date,
          pins,
          archive,
          label: idLabels,
        },
        config
      );

      dispatch({ type: ADD_TASK, payload: data.message });
    } catch (error) {
      dispatch({ type: FAILED_ADD_TASK, payload: error });
    }
  };
}

export function getTaskByLabels(params) {
  return async (dispatch) => {
    try {
      const { data } = await url.get(`taskbylabel/${params}`, config);
      dispatch({ type: GET_TASK_BY_LABEL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}
