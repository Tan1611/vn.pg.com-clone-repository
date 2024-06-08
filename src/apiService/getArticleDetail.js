import Axios from './../Axios';

const getArticleDetail = (params) => {
    const res = Axios.get(`article/${params}/`);

    return res;
};

export default getArticleDetail;
