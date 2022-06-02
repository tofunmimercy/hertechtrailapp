import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
          <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
          <p className='text-gray-600 text-md font-light text-center mt-2'>Welcome back!</p>

          <input type="email" placeholder="email address" className='w-full h-10 rounded-lg border-2 border-gray-500 px-6 mt-4' />
          <input type="password" placeholder="password" className='w-full h-10 rounded-lg border-2 border-gray-500 px-6 mt-4 show' />

          <button className='w-full h-12 rounded-lg bg-black text-white font-bold text-md mt-5'>Login to HerTech</button>

          <p className=' text-center mt-6 font-light text-2xl text-gray-600'>OR</p>

          <p className='text-center mt-5 text-gray-700 font-medium'>Don't have an account? 
            <Link to="/signup">
              <span className='font-bold text-black'> Sign up</span>
            </Link>
          </p>
          <Link to="/forgotpassword">
            <p className='text-center mt-5 text-gray-700 font-medium'>Forgot Password</p>
          </Link>
      </div>
    </div>
  )
}
