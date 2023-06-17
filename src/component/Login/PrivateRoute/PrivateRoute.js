import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;

    const location = useLocation();
    return (
        <div>
            {
               authUser ? <Outlet /> : <Navigate to='/login' state={{from: location}} replace />
            }
        </div>
    );
};

export default PrivateRoute;