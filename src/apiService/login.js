import Axios from './../Axios';

const login = async (params = {}) => {
    const req = await Axios.post('users/login/', params);

    return req;
};

export default login;

// config params
// const [params, setParams] = useState({
//     email: '';
//     password: '';
// })
