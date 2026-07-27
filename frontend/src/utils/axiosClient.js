import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://leetcodeplatform.onrender.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});


export default axiosClient;

