import Axios from './../Axios';

const login = (params = {}) => {
    const req = Axios.post('users/login/', params);

    return req;
};

export default login;

// config params
// const [params, setParams] = useState({
//     email: '';
//     password: '';
// })
