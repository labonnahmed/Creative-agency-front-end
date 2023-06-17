import React, { useRef } from 'react';
import bg from '../../../images/logos/Frame.png';
import { useInView } from 'framer-motion';

const HeaderMain = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <main className='grid lg:grid-cols-2 items-center mx-auto w-10/12 my-4 pb-10 overflow-hidden'  ref={ref }>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className='lg:text-left text-center lg:my-0 my-10'
            >
                <div className='mx-auto'>
                    <h1 className='text-primary text-5xl leading-tight font-black' style={{fontFamily:'sans-serif'}}>Let’s Grow Your <br className='lg:block hidden' /> Brand To The <br className='lg:block hidden' /> Next Level</h1> <br />
                    <p className='text-lg font-medium text-primary lg:px-0 px-4'>Lorem ipsum dolor sit amet, consectetur <br className='lg:block hidden' /> adipiscing elit. Purus commodo ipsum duis <br className='lg:block hidden' /> laoreet maecenas. Feugiat</p>
                    <div className='flex justify-center lg:justify-start mt-4'>
                        <a href="/login" className='lg:hidden'>
                            <button type="button" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-4">Login</button>
                        </a>
                        <a href="#services">
                            <button type="button" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-4">Hire us</button>
                        </a>
                    </div>
                </div>
            </span>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className='lg:block hidden'
            >
                <div className='mx-auto'>
                    <img src={bg} alt="header" className='' />
                </div>
            </span>
        </main>
    );
};

export default HeaderMain;