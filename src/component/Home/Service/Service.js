import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useInView } from "framer-motion";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency-backend-c6v0vvu1w-labonnahmed.vercel.app/getProvidedServices')
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0,3))
            });
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });


    return (
        <section ref={ref} id="services" className='w-10/12 mx-auto spacing mt-10 flex flex-col'>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <h2 className='text-4xl text-center font-bold leading-snug mb-28'>Provide Awesome <span className='text-[#7AB259]'>Services</span></h2>
            </span>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-around mt-10'>
                    {
                        services.map(service => <ServiceCard service={service} />)
                    }
                </div>
        </section >
    );
};

export default Service;