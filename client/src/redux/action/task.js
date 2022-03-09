import Cookies from "js-cookie";
import url from "../../api/url";
import {
  ADD_TASK,
  ARCHIVE_TASK,
  DELETE_TASK,
  FAILED_ADD_TASK,
  FAILED_ARCHIVE_TASK,
  FAILED_DELETE_TASK,
  FAILED_GET_TASK,
  GET_DETAIL_TASK,
  GET_TASK,
  GET_TASK_BY_ARCHIVE,
  GET_TASK_BY_LABEL,
  MESSAGE_GET_TASK_BY_ARCHIVE,
  NO_DATA_IN_TASK_BY_LABEL,
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
  time,
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
          time,
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
      dispatch({
        type: NO_DATA_IN_TASK_BY_LABEL,
        payload: error.response.data.message,
      });

      console.clear();
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
      const { data } = await url.put(`pins/${params}`, { pin: body }, config);
      dispatch({ type: PINS_TASK, payload: data.message });
    } catch (error) {
      console.log(error);
    }
  };
}

export function archiveTask(params, body) {
  return async (dispatch) => {
    try {
      const { data } = await url.put(
        `archive/${params}`,
        { pin: body },
        config
      );
      dispatch({ type: ARCHIVE_TASK, payload: data.message });
    } catch (error) {
      dispatch({ type: FAILED_ARCHIVE_TASK, payload: error });
    }
  };
}

export function deleteTask(id) {
  return async (dispatch) => {
    try {
      const { data } = await url.delete(`task/${id}`, config);
      dispatch({ type: DELETE_TASK, payload: data.message });
    } catch (error) {
      dispatch({ type: FAILED_DELETE_TASK, payload: error.response.data });
    }
  };
}

export function getTaskByArchive() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("archive", config);
      dispatch({ type: GET_TASK_BY_ARCHIVE, payload: data });
    } catch (error) {
      dispatch({
        type: MESSAGE_GET_TASK_BY_ARCHIVE,
        payload: error.response.data.message,
      });

      console.clear();
    }
  };
}
