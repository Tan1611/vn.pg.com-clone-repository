import Axios from './../Axios';

const deleteArticle = (params) => {
    const req = Axios.delete(`/article/${params}/`);

    return req;
};

export default deleteArticle;
