import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8080/',
});
export default Axios;

export const get = async (path, option = {}) => {
    const res = await Axios.get(path, option);
    return res.data;
};

export const endpoint = {
    article: 'article/',
};
