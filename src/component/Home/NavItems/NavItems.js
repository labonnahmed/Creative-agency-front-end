import React from 'react';
import { motion } from "framer-motion";

const NavItems = () => {
    const navList = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const navItem = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    };
    return (
        <motion.ul
            className="bg-primary rounded-md px-4 pt-4 pb-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navList}
        >
            <motion.li className="my-2" variants={navItem}>
                <a href="/dashboard/Web%20&%20Mobile%20design" className="block text-sm my-6 pl-3 mt-2 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700  hover:font-semibold md:dark:hover:bg-transparent">Web & Mobile Design</a>
            </motion.li>
            <motion.li className="my-2" variants={navItem}>
                <a href="/dashboard/Web%20development" className="block text-sm text-gray-200 my-6 pl-3 mt-2 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700  hover:font-semibold md:dark:hover:bg-transparent">Web Development</a>
            </motion.li>
            <motion.li className="my-2" variants={navItem}>
                <a href="/dashboard/Graphic%20design" className="block text-sm my-6 pl-3 mt-2 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700  hover:font-semibold md:dark:hover:bg-transparent">Graphic Design</a>
            </motion.li>
            <motion.li className="my-2" variants={navItem}>
                <a href="/dashboard/Digital%20Marketing" className="block text-sm my-6 pl-3 mt-2 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700  hover:font-semibold md:dark:hover:bg-transparent">Digital Marketing</a>
            </motion.li>
            <motion.li className="my-2" variants={navItem}>
                <a href="/dashboard/Data%20Entry" className="block text-sm my-6 pl-3 mt-2 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700  hover:font-semibold md:dark:hover:bg-transparent">Data Entry</a>
            </motion.li>
        </motion.ul>
    );
};

export default NavItems;