import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { motion, AnimatePresence } from "framer-motion";
import SidebarItems from '../SidebarItems/SidebarItems';

const SideBar = ({ id, adminAccess }) => {

    const [isToggled, setToggle] = useState(true);

    const navContainer = {
        visible: {
            //x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3
            }
        },
        hidden: {
            //x: -250,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3
            }
        }
    };

    return (
        <nav className="max-w-screen-xl max-md:flex flex-wrap items-center justify-between mx-auto">
            <Link to='/'>
                <img src={logo} alt="logo" className='w-36' />
            </Link>
            <div className='my-6'>
                <button className="flex p-2 rounded-md text-xl font-bold" onClick={() => setToggle(!isToggled)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                    </svg> Status
                </button>
                <AnimatePresence>
                    {isToggled && (
                        <motion.div
                            className="absolute z-10"
                            initial="hidden"
                            animate={isToggled ? "visible" : "hidden"}
                            exit="hidden"
                            variants={navContainer}
                        >
                            <SidebarItems isToggled={isToggled} id={id} adminAccess={adminAccess} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default SideBar;