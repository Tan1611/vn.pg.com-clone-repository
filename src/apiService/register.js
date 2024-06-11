import Axios from './../Axios';

const register = async (params = {}) => {
    const req = await Axios.post('users/register/', params);

    return req;
};

export default register;

// config params
// const [params, setParams] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password1: '',
// })
