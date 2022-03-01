import Cookies from "js-cookie";
import url from "../../api/url";
import { FAILED_GET_TASK, GET_TASK } from "../action-type";

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
