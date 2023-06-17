import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewOrder = () => {
    const { id } = useParams();

    const [file, setFiles] = useState(null);
    const [services, setServices] = useState([]);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFiles(newFile)
    };


    useEffect(() => {
        fetch('http://localhost:8000/getProvidedServices')
            .then(res => res.json())
            .then(data => {
                setServices(data.find(s => s.category == id))
            });
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        let orderInfo = new FormData();

        orderInfo.append('projectDemoImg', file);
        orderInfo.append('name', e.target[0].value);
        orderInfo.append('email', e.target[1].value);
        orderInfo.append('category', e.target[2].value);
        orderInfo.append('details', e.target[3].value);
        orderInfo.append('price', e.target[4].value);
        orderInfo.append('description', services.description);
        orderInfo.append('img', services.img);

        fetch('http://localhost:8000/newOrder', {
            method: 'POST',
            body: orderInfo
        })
            .then(res => res.json())
            .then(data => {
                alert(`Thanks for Order..`)
            })

        e.target[0].value = '';
        e.target[1].value = '';
        e.target[3].value = '';
        e.target[4].value = '';
        e.target[5].value = '';
    }


    return (
        <section className='bg-gray-100 p-10 rounded-md'>
            <form onSubmit={handleSubmit} className='w-10/12'>
                <div className="mb-4">
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your name/ Company's name" />
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" />
                    </div>
                </div>
                <div className="mb-4">
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={id} />
                </div>
                <div className='mb-4'>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Details"></textarea>
                </div>
                <div className='mb-8 grid md:grid-cols-2 gap-4'>
                    <input type='number' max={1000} min={100} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$100" />
                    <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" />
                </div>
                <button type="submit" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send</button>
            </form>
        </section>
    );
};

export default NewOrder;