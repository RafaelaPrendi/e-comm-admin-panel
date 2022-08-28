import axiosInstance from "../helpers/axios";
import { categoryConstants } from "./constants";
import Swal from "sweetalert2";

export const getCategoriesPaginate = (page, perPage) => {

  return async (dispatch) => {
    dispatch({
      type: categoryConstants.GET_ALL_REQUEST,
    });
    const res = await axiosInstance.get(`/category/getCategories/${page}/${perPage}`);
    if (res.status === 200) {
      const { categoryList } = res.data;
      console.log(categoryList, "after call", res)
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
}
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
    const res = await axiosInstance.post(`category/create`, { ...category });
    if (res.status === 201) {
      const newCategory = res.data;
      Swal.fire({
        icon: "success",
        title: "Kategoria u shtua me sukses!",
        timer: 3000,
      });
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: { category: newCategory },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Pati nje problem ne shtimin e kategorise!",
        timer: 3000,
      });
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: { error: res?.data?.error },
      });
    }
  };
};
export const editCategory = (category) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.EDIT_CATEGORY_REQUEST,
    });
    const res = await axiosInstance.put("category/edit", { ...category });
    if (res.status === 200) {
      const editedCategory = res.data;
      Swal.fire({
        icon: "success",
        title: "Kategoria u ndryshua me sukses!",
        timer: 3000,
      });
      dispatch({
        type: categoryConstants.EDIT_CATEGORY_SUCCESS,
        payload: { editedCategory },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Pati nje problem ne ndryshimin e kategorise!",
        timer: 3000,
      });
      dispatch({
        type: categoryConstants.EDIT_CATEGORY_FAILURE,
        payload: { error: res?.data?.error },
      });
    }
  };
};
export const deleteCategory = (categoryID) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.DELETE_CATEGORY_REQUEST,
    });
    const res = await axiosInstance.delete(`/category/delete/` + categoryID);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Kategoria u fshi me sukses!",
        timer: 3000,
      });
      dispatch({
        type: categoryConstants.DELETE_CATEGORY_SUCCESS,
        payload: { deleted: true },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Pati nje problem ne fshirjen e kategorise!",
        timer: 3000,
      });
      dispatch({
        type: categoryConstants.DELETE_CATEGORY_FAILURE,
        payload: { error: res?.data?.error, deleted: false },
      });
    }
  };
};
