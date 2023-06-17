import React from 'react';
import Header from '../Header/Header';
import Partners from '../partners/Partners';
import Service from '../Service/Service';
import Portfolio from '../portfolio/Portfolio';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='home-container scroll-smooth'>
            <Header/>
            <Partners />
            <Service />
            <Portfolio />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;