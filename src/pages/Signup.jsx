import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return(
<div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
          <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
          <p className='text-black text-1 font-semibold text-center mt-2'>You're 1-click away from creating an account</p>

          <input type="email" placeholder="email address" className='w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4' />
          <input type="password" placeholder="password" className='w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4' />

          <button className='w-full h-8 rounded-lg bg-black text-white font-semibold text-md mt-5'>Create account</button>

          <p className=' text-center mt-3 font-light text-2xl text-gray-400'>OR</p>
          <input type="google" placeholder="Continue with Google" className='w-full h-8 rounded-lg text-center border-2 border-gray-500 px-6 mt-4' />
          <input type="linkedIn" placeholder="Continue with LinkedIn" className='w-full h-8 rounded-lg text-center border-2 border-gray-500 px-6 mt-4' />
<p className='text-center mt-5 text-gray-700 font-medium'>Already have an account?
<Link to="/login">
              <span className='font-bold text-black'> Login</span>
            </Link>
          </p>
      </div>
    </div>
  

  

  )
}
