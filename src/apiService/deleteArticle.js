import Axios from './../Axios';

const deleteArticle = async (params) => {
    const req = await Axios.delete(`/article/${params}/`);

    return req;
};

export default deleteArticle;
