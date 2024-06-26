import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8080/',
});

// Alter defaults after instance has been created
// Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN 123';

// Add a request interceptor
Axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
Axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default Axios;
