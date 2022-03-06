import Cookies from "js-cookie";
import url from "../../api/url";
import {
  ADD_TASK,
  FAILED_ADD_TASK,
  FAILED_GET_TASK,
  GET_DETAIL_TASK,
  GET_TASK,
  GET_TASK_BY_LABEL,
  PINS_TASK,
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

export function addTask(
  content,
  title,
  idLabels,
  startDate,
  endDate,
  pins,
  archive
) {
  return async (dispatch) => {
    try {
      const { data } = await url.post(
        "/addtask",
        {
          content,
          title,
          startDate,
          endDate,
          pins,
          archive,
          label: idLabels,
        },
        config
      );

      dispatch({ type: ADD_TASK, payload: data.message });
    } catch (error) {
      dispatch({
        type: FAILED_ADD_TASK,
        payload: error.response.data.validaton,
      });
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

export function getTaskById(params) {
  return async (dispatch) => {
    try {
      const { data } = await url.get(`taskbyid/${params}`, config);
      dispatch({ type: GET_DETAIL_TASK, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function pinTask(params, body) {
  return async (dispatch) => {
    try {
      const { data } = await url.post(`pins/${params}`, { pin: body }, config);
      dispatch({ type: PINS_TASK, payload: data.message });
    } catch (error) {
      console.log(error);
    }
  };
}
