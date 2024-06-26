import Axios from './../Axios';

const createArticle = async (params = {}) => {
    const req = await Axios.post('/article/create-article/', params);

    return req;
};

export default createArticle;

// config params
// const [params, setParams] = useState({
//     title: '',
//     content: '',
//     draft: '',
//     expert: '',
//     published: '',
//     filename: ''
// })
