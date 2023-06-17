import React, { useEffect, useState } from 'react';
import Orders from '../Orders/Orders';

const ServiceList = () => {
    const [servicesList, setServicesList] = useState([]);
    const [adminAccess, setAdminAccess] = useState(false);

    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;
    const email = authUser.email;

    useEffect(() => {
        fetch('http://localhost:8000/adminAccess', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                data.length > 0 && setAdminAccess(true)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/serviceList')
            .then(res => res.json())
            .then(data => {
                setServicesList(data)
            });
    }, [servicesList]);

    return (
        <section>
            {adminAccess ?
                <div className='bg-gray-100 p-10 rounded-md'>
                    <table className="w-10/12 text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Service
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Project Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                servicesList.length > 0 ? servicesList.map(s =>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {s.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {s.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {s.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {s.details}
                                        </td>
                                        {/* <td className="px-6 py-4">
                                    <svg onClick={() => handleRemoveTask()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2 p-1 bg-red-500 text-white rounded-sm">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </td> */}
                                    </tr>
                                )
                                    :
                                    <div role="status" className='mx-auto'>
                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                            }
                        </tbody>
                    </table>
                </div> : <Orders />
            }
        </section>
    );
};

export default ServiceList;