import Cookies from "js-cookie";
import url from "../../api/url";
import {
  ADD_LABEL,
  FAILED_ADD_LABEL,
  FAILED_GET_LABEL,
  GET_LABEL,
} from "../action-type";

const config = {
  headers: {
    "Content-type": "Application/json",
    authorization: `Bearer ${Cookies.get("Token")}`,
  },
};

export function getLabels() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/labels", config);
      dispatch({ type: GET_LABEL, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_GET_LABEL, payload: error });
    }
  };
}

export function addLabel(icons, title) {
  return async (dispatch) => {
    try {
      const { data } = await url.post(
        "/addlabel",
        {
          icons,
          title,
        },
        config
      );

      dispatch({ type: ADD_LABEL, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_ADD_LABEL, payload: error });
    }
  };
}
