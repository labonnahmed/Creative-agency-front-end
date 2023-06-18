import React, { useEffect, useRef, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { useInView } from 'framer-motion';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency-backend-c6v0vvu1w-labonnahmed.vercel.app/clientsFeedback')
            .then(res => res.json())
            .then(data => setFeedbacks(data.slice(0,3)))

    }, [feedbacks]);


    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className='w-10/12 mx-auto spacing mt-10 flex flex-col' ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <h2 className='text-4xl text-center font-bold leading-snug mb-28'>Client's <span className='text-[#7AB259]'>Feedback</span></h2>
            </span>
            <div className='mt-10 grid grid-cols-3'>
                {
                    feedbacks.length > 0 && feedbacks.map(feedback => <FeedbackCard feedback={feedback} />)
                }
            </div>
        </section>
    );
};

export default Feedback;