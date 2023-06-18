import React from 'react';
import { motion, useScroll } from "framer-motion";

const Footer = () => {
    const { scrollYProgress } = useScroll();

    const handleSubmit = (e) => {

        e.preventDefault();

        const contactInfo = {
            name: e.target[0].value,
            email: e.target[1].value,
            massage: e.target[2].value
        }

        fetch('https://creative-agency-backend-c6v0vvu1w-labonnahmed.vercel.app/contact', {
            method: 'POST',
            body: JSON.stringify(contactInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                alert(`${data.name}, 
                We will Contact with you soon, Stay with us..`)
            });


        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
    }
    return (
        <motion.div style={{ scaleX: scrollYProgress }}>
            <section id='contact' className='bg-[#FBD062]'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 p-6 py-10'>
                    <div className='w-10/12 mx-auto mb-6'>
                        <h3 className='text-3xl md:font-bold lg:font-black leading-snug mb-6 text-primary'>Let us handle your project, professionally.</h3>
                        <p className='text-gray-600 leading-sung md:hidden'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className='w-10/12 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Your Name/ Company Name</label>
                                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ex: Google.com" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Your Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" require />
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Your message</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." require></textarea>
                            </div>
                            <button type="submit" href="/" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-4">Send</button>
                        </form>
                    </div>
                </div>
                <p className='text-center text-gray-600 pb-4'><small>copyright Creative Agency @Labonno, 2023</small></p>
            </section>
        </motion.div>
    );
};

export default Footer;