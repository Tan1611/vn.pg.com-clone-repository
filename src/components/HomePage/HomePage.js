/* eslint-disable no-unused-vars */
import Dot from './../DotNavigate/index';
import Content from './../Content/index';
import FooterNavigate from './../FooterNavigate/index';
import { useEffect, useState } from 'react';
// import login from './../../apiService/login';
import getAllArticle from './../../apiService/getAllArticle';

function HomePage() {
    // const params = useState({
    //     // name: 'nhnhuttan',
    //     email: 'nhnt2001@gmail.com',
    //     password: 'Nhuttan1611@',
    //     // password1: 'Nhuttan1611@',
    // });

    const [data, setData] = useState({});

    useEffect(() => {
        try {
            const handleGetAll = async () => {
                const req = await getAllArticle();
                console.log(req);
                return req;
            };
            handleGetAll();
        } catch (error) {
            console.log(error);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Dot />
            <Content />
            <FooterNavigate />
        </>
    );
}

export default HomePage;
