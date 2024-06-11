import React from 'react';
import Section1 from './Body/Section1/Section1';
import Section2 from './Body/Section2/Section2';
import Section3 from './Body/Section3/Section3';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ContactUs() {
    return (
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    );
}

export default ContactUs;
