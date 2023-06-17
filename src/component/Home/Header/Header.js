import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = ({isInView}) => {
    return (
        <div className='header-container min-h-screen spacing relative'>
            <Navbar />
            <HeaderMain isInView={isInView}/>    
        </div>
    );
};

export default Header;