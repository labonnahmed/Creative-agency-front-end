import React, { useRef } from 'react';
import './ServiceCard.css'
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';

const ServiceCard = ({ service }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });


    return (
        <Link to={'/dashboard/' + service.category}>
            <main ref={ref} className='flex overflow-hidden'>
                <span
                    style={{
                        transform: isInView ? "none" : `translate${service.motion}(${service.value})`,
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <div className="service-card max-w-sm text-center bg-gray-50 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-6 pt-7">
                        <img className="rounded-t-lg h-28 mx-auto" src={`data:image/png;base64,${service.img}`} alt={service.category} />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline" title="Click to Order">{service.category}</h5>
                            <p className="text-lg text-gray-700 dark:text-gray-400">{service.description}</p>
                        </div>
                    </div>
                </span>
            </main>
        </Link>

    );
};

export default ServiceCard;