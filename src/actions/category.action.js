import axios from "axios";
import axiosInstance from "../helpers/axios";
import { api } from "../urlConfig";
import { categoryConstants } from "./constants";
export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.GET_ALL_REQUEST,
    });
    const res = await axiosInstance.get("/category/getCategories");
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstants.GET_ALL_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: categoryConstants.GET_ALL_FAILURE,
        payload: { error: res?.data?.error },
      });
    }
  };
};
export const addCategory = (category) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.ADD_CATEGORY_REQUEST,
    });
    const res = await axiosInstance.post(
      `category/create`,
      { ...category },
    );
    if (res.status === 201) {
      const newCategory = res.data;
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: { category: newCategory },
      });
    } else {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: { error: res?.data?.error },
      });
    }
  };
};
