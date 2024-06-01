import Dot from './../DotNavigate/index';
import Content from './../Content/index';
import FooterNavigate from './../FooterNavigate/index';
// import { useEffect, useState } from 'react';
// import * as Axios from './../../Axios';

function HomePage() {
    // const [data, setData] = useState();
    // useEffect(() => {
    //     const response = async () => {
    //         const res = await Axios.get(Axios.endpoint['article']);
    //         setData(res);
    //         return res;
    //     };
    //     response();
    //     console.log(data);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    return (
        <>
            <Dot />
            <Content />
            <FooterNavigate />
        </>
    );
}

export default HomePage;
