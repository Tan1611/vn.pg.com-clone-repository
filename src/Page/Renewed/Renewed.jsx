import React from 'react';
import Section1 from './body/Section1/Section1';
import Section2 from './body/Section2/Section2';
import Section3 from './body/Section3/Section3';
import Section4 from './body/Section4/Section4';
import Section5 from './body/Section5/Section5';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Renewed() {
    return (
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    );
}

export default Renewed;
