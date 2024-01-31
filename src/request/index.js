import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 10000;

axios.interceptors.request.use((config) => {
    return config;
}), (err) => {
    return Promise.reject(err);
}

axios.interceptors.response.use((response) => {
    return response;
});

export default axios;