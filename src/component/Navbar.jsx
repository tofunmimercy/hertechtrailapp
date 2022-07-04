import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <div className='w-full h-24 shadow-md bg-white flex p-5 justify-between items-center'>
        <div className='flex-1'>
            HerTech
        </div>

        <div className='flex justify-evenly flex-1'>
            <Link to="/home">
                <p>Job Listing</p>
            </Link>

            <Link to="/login">
                <p>Find a mentor</p>
            </Link>

            <Link to="/signup">
                <p>Find a community</p>
            </Link>
            <Link to="/forgotpassword">
                <p>More</p>
            </Link>
            <Link to="/jobboard">
                Post a job
            </Link>
        

        </div>
    </div>
  )
}
