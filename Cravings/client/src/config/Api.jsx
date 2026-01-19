import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:4500", credentials: true
    
})


export default axiosInstance;