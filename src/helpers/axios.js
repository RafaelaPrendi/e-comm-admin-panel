import axios from "axios";
import { api } from "../urlConfig";
//create an axios instance for centralized api
const token = window.localStorage.getItem("token");
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});
export default axiosInstance;
