import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase';

const AuthDetails = () => {
    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                sessionStorage.setItem('authUser', JSON.stringify(user));

                storeAuthToken();
                
                navigate(from, { replace: true })
            }

            else {
                sessionStorage.setItem('authUser', JSON.stringify(null));
            }
        });
        return () => {
            listen();
        }
    }, []);


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                alert('sign out');
            })
            .catch((err) => {
                console.log(err.massage)
            });
    };


    const storeAuthToken = () => {
        auth.currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (err) {
                console.log(err)
            });
    };


    return (
        <div>
            {
                authUser && <button onClick={handleLogout} type="button" className="text-gray-800 w-full mt-6 border border-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">Log Out</button>
            }
        </div>
    );
};

export default AuthDetails;