import Axios from './../Axios';

const getArticleDetail = async (params) => {
    const res = await Axios.get(`article/${params}/`);

    return res;
};

export default getArticleDetail;
