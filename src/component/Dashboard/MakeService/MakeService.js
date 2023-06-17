import React, { useState } from 'react';

const MakeService = () => {
    const [file, setFiles] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFiles(newFile)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        
        formData.append('img', file)
        formData.append('category', e.target[0].value)
        formData.append('description', e.target[2].value)


        fetch('http://localhost:8000/createService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert('Want to add a new Service?')
            })


        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
    }

    return (
        <section className='bg-gray-100 p-10 rounded-md'>
            <form onSubmit={handleSubmit} className='w-10/12'>
                <div className='mb-6 grid md:grid-cols-2 gap-4'>
                    <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Service Catagory" required/>
                    <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" required/>
                </div>
                <div className='mb-6 grid md:grid-cols-2 gap-4'>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Description" required></textarea>
                </div>
                <button type="submit" className="block text-white bg-[#111430] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 w-28 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
            </form>
        </section>
    );
};

export default MakeService;