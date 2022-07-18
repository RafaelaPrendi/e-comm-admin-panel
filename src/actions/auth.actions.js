import axiosInstance from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    localStorage.clear();
    const res = await axiosInstance.post(`/admin/signin`, {
      ...user,
    });
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...res,
      },
    });
    if (res?.status === 200) {
      console.log(res.data, "data");
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      await dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      await dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res?.data?.message },
      });
    }
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};

export const isUserLoggedIn = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        authenticate: true,
        authenticating: false,
        payload: { token, user },
      });
    }
  };
};
export const signout = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axiosInstance.post("/admin/signout");
    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
