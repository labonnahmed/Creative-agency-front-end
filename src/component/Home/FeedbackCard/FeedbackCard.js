import React, { useRef } from 'react';
import './FeedbackCard.css'
import { useInView } from 'framer-motion';

const FeedbackCard = ({ feedback }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <main ref={ref} className='grid'>
            <span
                style={{
                    transform: isInView ? "none" : `translateY(200px)`,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <div className="feedback-card max-w-sm border-gray-300 shadow-lg rounded-sm p-8 mx-3">
                    <div className='flex mb-6'>
                        <img src={require(`../../../images/${feedback.img}`)} alt="client review" className='w-16' />
                        <div className='my-auto ml-4'>
                            <h4 className='text-2xl font-semibold'>{feedback.clientName}</h4>
                            <p className='font-semibold'>{feedback.profession}</p>
                        </div>
                    </div>
                    <p className='text-gray-500 text-lg'>{feedback.feedback}</p>
                </div>
            </span>
        </main>
    );
};

export default FeedbackCard;