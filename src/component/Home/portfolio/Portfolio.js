import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import Carousel from 'react-simply-carousel';
import image1 from '../../../images/carousel-1.png';
import image2 from '../../../images/carousel-2.png';
import image4 from '../../../images/carousel-4.png';
import image5 from '../../../images/carousel-5.png';
import { useInView } from 'framer-motion';

const Portfolio = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const images = [image1, image2, image5, image4, image1, image2, image5, image4, image2];


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlideIndex(count => count + 1);
        }, 2000);
        return () => clearInterval(interval);

    }, []);

    const setOnRequestChange = () => {
        if (activeSlideIndex == 10) {
            setActiveSlideIndex(0)
        }
    };
    setOnRequestChange();


    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id='portfolio' className='mx-auto spacing mt-10 portfolio-container bg-primary min-h-screen py-16 flex flex-col' ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <h2 className='text-4xl text-white text-center font-bold leading-snug mb-14'>Here are some of<span className='text-[#7AB259]'> <br className='lg:hidden md:hidden' /> our works</span></h2>
            </span>
            <div className='md:ml-20 max-md:pl-6'>
                <Carousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={1}
                    itemsToScroll={1}
                    forwardBtnProps={{

                        style: {
                            alignSelf: 'center',
                            background: 'black',
                            border: 'none',
                            borderRadius: '50%',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,
                        },
                        children: <span>{`>`}</span>,
                    }}
                    responsiveProps={[
                        {
                            itemsToShow: 3,
                            itemsToScroll: 1,
                            minWidth: 768,
                        },
                    ]}
                    speed={400}
                    easing="linear"
                >
                    {
                        images.map(img =>
                            <div style={{ width: 500, height: 370, padding: '8px', marginTop: '30px' }} >
                                <img src={img} alt="project" />
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </section>
    );
};

export default Portfolio;