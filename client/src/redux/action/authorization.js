import { FAILED_GET_LOGGIN, GET_LOGGIN } from "../action-type";
import Cookies from "js-cookie";

import url from "../../api/url";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function getLoggin(email, password) {
  return async (dispatch) => {
    try {
      const { data } = await url.post(
        "signin",
        {
          email,
          password,
        },
        config
      );
      dispatch({ type: GET_LOGGIN, payload: data });
      Cookies.set("Token", data.accessToken);
    } catch (error) {
      if (error.response.data.validation) {
        dispatch({
          type: FAILED_GET_LOGGIN,
          validation: error.response.data.validation,
        });
      } else {
        dispatch({
          type: FAILED_GET_LOGGIN,
          error: error.response.data.message,
        });
      }
    }
  };
}
