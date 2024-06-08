import Axios from './../Axios';

const getAllArticle = async () => {
    const res = await Axios.get('article/');

    return res;
};

export default getAllArticle;
