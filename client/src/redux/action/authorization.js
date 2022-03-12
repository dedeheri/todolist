import { toast } from "react-toastify";

import * as actionType from "../action-type";
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
      dispatch({ type: actionType.GET_LOGGIN, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_LOGGIN,
        payload: error.response.data.message,
      });
    }
  };
}

export function getRegister(email, password, repeatPassword) {
  return async (dispatch) => {
    try {
      const { data } = await url.post(
        "/signup",
        {
          email,
          password,
          repeatPassword,
        },
        config
      );
      dispatch({
        type: actionType.GET_REGISTER,
        payload: data.message,
      });
      toast(data.message);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_REGISTER,
        payload: error.response.data.message,
      });
    }
  };
}

export function getDataUsers() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/users", {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      dispatch({ type: actionType.GET_DATA_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function forgotPassword(email) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_FORGOT_PASSWORD });
      const { data } = await url.post("/forgot", { email });
      dispatch({ type: actionType.FORGOT_PASSWORD, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_FORGOT_PASSWORD,
        payload: error.response.data.message,
      });
    }
  };
}

export function resetPassword(password, repeatPassword, params) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_RESET_PASSWORD });
      const { data } = await url.post("/reset" + params, {
        password,
        repeatPassword,
      });
      dispatch({ type: actionType.RESET_PASSWORD, payload: data });
    } catch (error) {
      /* eslint eqeqeq: 0 */
      if (error.response.status == 500) {
        dispatch({
          type: actionType.INVALIDE_SIGNATURE_RESET_PASSWORD,
        });
      } else {
        dispatch({
          type: actionType.FAILED_RESET_PASSWORD,
          payload: error.response.data.message,
        });
      }
    }
  };
}

export function invalidSignature(token) {
  return async (dispatch) => {
    try {
      await url.get("/invalid" + token);
    } catch (error) {
      if (error.response.status == 500) {
        dispatch({
          type: actionType.INVALIDE_SIGNATURE_RESET_PASSWORD,
        });
      }

      console.clear();
    }
  };
}
