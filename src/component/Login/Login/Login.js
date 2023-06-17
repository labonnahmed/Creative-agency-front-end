import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../../Login/firebase/firebase';
import AuthDetails from '../AuthDetails/AuthDetails';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Login = () => {
    const handleSignIn = (provider) => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = res.user;
                alert(`login to your ${user.email} account..`);

                <Navigate replace to="/" /> /**  Navigate('/') */
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <Link to='/'>
            <img src={logo} alt="logo" className=' w-44 mb-4' />
            </Link>
            <div className='border-2 border-gray-200 rounded-sm p-20 text-center'>
                <h5 className='text-lg font-semibold mb-6'>Login With</h5>
                <button onClick={() => handleSignIn(new GoogleAuthProvider())} type="button" className="text-gray-800 w-full border border-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1 text-blue-600" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    <span className='mx-auto'>Sign in with Google</span>
                </button>
                <p><small>Don't have an account?<span className='text-blue-400 underline'>Create an account</span></small></p>
                <AuthDetails />
            </div>
        </div>
    );
};

export default Login;