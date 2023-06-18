import React from 'react';

const Feedback = () => {
    const handleSubmit = (e) => {
        
        e.preventDefault();

        const feedback = {
            clientName: e.target[0].value,
            profession: e.target[1].value,
            feedback: e.target[2].value
        }

        fetch('https://creative-agency-backend-c6v0vvu1w-labonnahmed.vercel.app/feedback', {
            method: 'POST',
            body: JSON.stringify(feedback),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                alert('Confirm to Share feedback')
            })

        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
    };


    return (
        <section className='bg-gray-100 p-10 rounded-md'>
            <form onSubmit={handleSubmit} className='w-10/12'>
                <div className="mb-4">
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Company's Name. Designation" required />
                </div>
                <div className='mb-4'>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Feedback"></textarea>
                </div>
                <button type="submit" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
            </form>
        </section>
    );
};

export default Feedback;