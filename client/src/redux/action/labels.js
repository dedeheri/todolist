import Cookies from "js-cookie";
import url from "../../api/url";
import * as actionTypes from "../action-type";

const config = {
  headers: {
    "Content-type": "Application/json",
    authorization: `Bearer ${Cookies.get("token")}`,
  },
};

export function getLabels() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/labels", config);
      dispatch({ type: actionTypes.GET_LABEL, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_GET_LABEL, payload: error });
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

      dispatch({ type: actionTypes.ADD_LABEL, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_ADD_LABEL, payload: error });
    }
  };
}
