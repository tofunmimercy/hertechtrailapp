import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className='w-full h-24 shadow-md bg-white flex p-5 justify-between items-center'>
        <div className='flex-1'>
            LOGO
        </div>

        <div className='flex justify-evenly flex-1'>
            <Link to="/">
                <p>Home</p>
            </Link>

            <Link to="/login">
                <p>Login</p>
            </Link>

            <Link to="/signup">
                <p>Signup</p>
            </Link>
        </div>
    </div>
  )
}
