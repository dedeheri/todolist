import { FAILED_GET_LOGGIN, GET_DATA_USERS, GET_LOGGIN } from "../action-type";
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

export function getDataUsers() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/users", {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${Cookies.get("Token")}`,
        },
      });
      dispatch({ type: GET_DATA_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}
