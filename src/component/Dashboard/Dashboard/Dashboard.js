import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import SideBar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const { id } = useParams();
    const [adminAccess, setAdminAccess] = useState(false);

    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;
    const email = authUser.email

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


    return (
        <div className='md:grid lg:grid-cols-4 grid-cols-3 gap-4 md:my-6 relative'>
            <div className='lg:col-span-1 w-10/12 mx-auto'>
                <SideBar id={id} adminAccess={adminAccess} />
            </div>
            <div className='lg:col-span-3 col-span-2'>
                <div className='flex justify-between font-medium w-11/12 max-md:hidden mb-4'>
                    <h5 className='text-2xl font-semibold text-gray-600 dark:text-white'>Welcome to your Dashboard
                        { adminAccess && <span className='text-sm text-gray-600'> (Admin)</span>}
                    </h5>
                    <Link to='/login'>
                        <small className='underline'>{authUser.displayName}</small>
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;