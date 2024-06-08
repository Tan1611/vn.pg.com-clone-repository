import React from 'react';
import './style.css';
import { Col, Row } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const locations = {
    'Africa & Middle East': [
        { name: 'Arab Peninsula', languages: ['English', 'عربي'] },
        { name: 'Egypt', languages: ['English', 'عربي'] },
        { name: 'Israel', languages: ['English', 'עִבְרִית'] },
        { name: 'Morocco', languages: ['English', 'عربي'] },
        { name: 'South Africa', languages: ['English'] },
    ],
    Americas: [
        { name: 'Argentina', languages: ['Español'] },
        { name: 'Brazil', languages: ['Português'] },
        { name: 'Canada', languages: ['English', 'Français'] },
        { name: 'Chile', languages: ['Español'] },
        { name: 'Colombia', languages: ['Español'] },
    ],
    'Asia & Pacific': [
        { name: 'Arab Peninsula', languages: ['English', 'عربي'] },
        { name: 'Egypt', languages: ['English', 'عربي'] },
        { name: 'Israel', languages: ['English', 'עִבְרִית'] },
        { name: 'Morocco', languages: ['English', 'عربي'] },
        { name: 'South Africa', languages: ['English'] },
    ],
};

const LocationItem = ({ name, languages }) => (
    <div className="location-item">
        <p className="location-name">{name}</p>
        <div className="language-switcher">
            {languages.map((language, index) => (
                <React.Fragment key={index}>
                    <p>{language}</p>
                    {index < languages.length - 1 && <p className="separator">|</p>}
                </React.Fragment>
            ))}
        </div>
    </div>
);

const LocationSection = ({ region, items }) => (
    <div style={{ marginBottom: '50px' }}>
        <p
            style={{
                fontSize: '16px',
                lineHeight: '1.2',
                fontWeight: '750',
                marginBottom: '30px',
            }}
        >
            {region}
        </p>
        {items.map((item, index) => (
            <LocationItem key={index} name={item.name} languages={item.languages} />
        ))}
    </div>
);

function Location() {
    return (
        <div>
            <Header />
            <h1 className="titleLocation">Choose your location.</h1>
            <Row
                className="displayLocation"
                style={{
                    padding: '0 20vw',
                }}
            >
                <Col className="widthLocation">
                    {Object.keys(locations)
                        .slice(0, 2)
                        .map((region) => (
                            <LocationSection key={region} region={region} items={locations[region]} />
                        ))}
                </Col>
                <Col className="widthLocation">
                    {Object.keys(locations)
                        .slice(2)
                        .map((region) => (
                            <LocationSection key={region} region={region} items={locations[region]} />
                        ))}
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Location;
