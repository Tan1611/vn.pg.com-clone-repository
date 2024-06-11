import Axios from './../Axios';

const updateArticle = async (id, params = {}) => {
    const req = await Axios.put(`/article/${id}/`, params);

    return req;
};

export default updateArticle;

// config params
// const [params, setParams] = useState({
//     title: '',
//     content: '',
//     draft: '',
//     expert: '',
//     published: '',
//     filename: ''
// })
