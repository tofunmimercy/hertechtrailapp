import React from 'react'
import { Link } from 'react-router-dom'
export default function Forgotpassword() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
    <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
        <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
        <p className='text-black text-1 font-semibold text-center mt-2'>Forgot password</p>

        <input type="email" placeholder="email address" className='w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4' />

        <button className='w-full h-8 rounded-lg bg-black text-white font-semibold text-md mt-5'>Reset password</button>

        
        
        <p className='text-center mt-5 text-gray-700 font-medium'>Already have an account?
<Link to="/login">
              <span className='font-bold text-black'> Login</span>
            </Link>
          </p>
       
  </div>
  </div>
  
  )

}