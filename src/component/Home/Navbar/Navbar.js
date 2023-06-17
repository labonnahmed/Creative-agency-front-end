import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { motion, AnimatePresence } from "framer-motion";
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isToggled, setToggle] = useState(false);

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
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto w-10/12 py-10">
            <img src={logo} alt="logo" className=' w-44' />
            <button onClick={() => setOpen(!isOpen)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900'>
                    <li>
                        <a href="/" className="block md:hover:text-secondary md:hover:underline py-2 pl-3 mt-2 pr-4 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="block py-2 pl-3 mt-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Portfolio</a>
                    </li>
                    <li>
                        <div>
                            <button
                                onClick={() => setToggle(!isToggled)}
                                id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Services
                                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <AnimatePresence>
                                {isToggled ? (
                                    <motion.div
                                        className="absolute"
                                        initial="hidden"
                                        animate={isToggled ? "visible" : "hidden"}
                                        exit="hidden"
                                        variants={navContainer}
                                    >
                                        <NavItems />
                                    </motion.div>
                                ) : <></>}
                            </AnimatePresence>
                        </div>
                    </li>
                    <li>
                        <a href="/dashboard/Web%20&%20Mobile%20design/serviceList" className="block py-2 pl-3 pr-4 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
                    </li>
                    <li>
                        <a href="#contact" className="block py-2 pl-3 pr-4 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                    </li>
                    <li className='hidden lg:block'>
                        <Link to='/login'>
                            <button type="button" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md w-28 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;