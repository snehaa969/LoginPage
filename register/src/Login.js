import React, { useState } from 'react'

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='flex justify-center items-center bg-blue-700 p-4 min-h-screen'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
            <div className='flex justify-between mb-4'>
                <button className={`w-1/2 py-2 text-lg font-semibold rounded-tl-lg ${
                    isLogin ? "bg-blue-900 text-white" : "bg-gray-200"
                }`} onClick={() => setIsLogin(true)}>Login</button>

                <button className={`w-1/2 py-2 text-lg font-semibold rounded-tr-lg ${
                    !isLogin ? "bg-blue-900 text-white" : "bg-gray-200"
                }`} onClick={() => setIsLogin(false)}>SignUp</button>
            </div>

            {isLogin?(
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-semibold mb-4 text-center'>
                        Login Form
                    </h2>
                    <input type='email' placeholder='Email' className='p-2 mb-3 border border-gray-300 rounded-md'/>
                    <input type='password' placeholder='Password' className='p-2 mb-3 border border-gray-300 rounded-md'/>
                    <a href='#' className='text-blue-500 text-right mb-3'>
                        Forgot Pasword?
                    </a>
                    <button className='py-2 bg-blue-900 text-white rounded-md'>
                        Login
                    </button>
                    <p className='text-center mt-4'>
                        Not a Member?{" "}
                        <a href='#' onClick={() => setIsLogin(false)}
                        className='text-blue-500'>SignUp Now</a>
                    </p>
                </div>
            ):(
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-semibold mb-4 text-center'>
                        SignUp Form
                    </h2>
                    <input type='email' placeholder='Email' className='p-2 mb-3 border border-gray-300 rounded-md'/>
                    <input type='password' placeholder='Password' className='p-2 mb-3 border border-gray-300 rounded-md'/>
                    <input type='password' placeholder='Confirm Password' className='p-2 mb-3 border border-gray-300 rounded-md'/>
                    <button className='py-2 bg-blue-900 text-white rounded-md'>Sign Up</button>
                </div>
            )}
        </div>
    </div>
  );
};

