import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://blogutt.herokuapp.com/api"
});