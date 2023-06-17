import React from 'react';
import './Partners.css'
import partner1 from '../../../images/logos/slack.png';
import partner2 from '../../../images/logos/google.png';
import partner3 from '../../../images/logos/uber.png';
import partner4 from '../../../images/logos/netflix.png';
import partner5 from '../../../images/logos/airbnb.png';
import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <section id="teams" className='partner-container spacing'>
            <Marquee>
                <img src={partner1} alt="slack"/>
                <img src={partner2} alt="google" />
                <img src={partner3} alt="Uber" />
                <img src={partner4} alt="netfilx" />
                <img src={partner5} alt="airhub" />
            </Marquee>
        </section>
    );
};

export default Partners;