import axiosInstance from "../helpers/axios";
import { authConstants } from "./constants";

export const signup = (user) => {
    return async dispatch => {
        dispatch({type: authConstants.SIGNUP_REQUEST});
        const res = await axiosInstance.post('/admin/signup', {
            ...user
        });
        if(res.status === 201){
            const { user} = res.data;
            dispatch({
                type: authConstants.SIGNUP_SUCCESS,
                payload: { user}
            });
        }else{
            dispatch({
                type: authConstants.SIGNUP_FAILURE,
                payload: { error: res.data.error}
            });
        }
    }
}