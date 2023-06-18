import React from 'react';

const MakeAdmin = () => {
    const handleSubmit = (e) => {
        const orderInfo = {
            email: e.target[0].value
        }

        e.preventDefault();

        fetch('https://creative-agency-backend-c6v0vvu1w-labonnahmed.vercel.app/createAdmin', {
            method: 'POST',
            body: JSON.stringify(orderInfo),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

        e.target[0].value = '';
    }
    return (
        <section className='bg-gray-100 p-10 rounded-md'>
            <form onSubmit={handleSubmit} className='10/12'>
                <div className="mb-6 grid md:grid-cols-2">
                    <div>
                        <label htmlFor="email-address-icon" className="block mb-2 ml-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                        </div>
                    </div>
                </div>
                <button type="submit" href="/" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-4">Submit</button>
            </form>
        </section>
    );
};

export default MakeAdmin;