import Axios from './../Axios';

const createArticle = (params = {}) => {
    const req = Axios.post('/article/create-article/', params);

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
