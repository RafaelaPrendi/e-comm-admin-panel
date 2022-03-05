import axios from 'axios';
import { api } from '../urlConfig';
//create an axios instance for centralized api
const token = window.localStorage.getItem('token');
console.log("TOKEN=", token);

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        "Authorization" : token ? `Bearer ${token}` : null,
    },
});
export default axiosInstance;