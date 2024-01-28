import axios from "axios";
import {AxiosInstance} from "axios"

const instance: AxiosInstance  = axios.create({
    baseURL: "https://successful-peplum-lamb.cyclic.app/api",
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + sessionStorage.getItem("token")
    },
    timeout: 10000
});

export default instance;