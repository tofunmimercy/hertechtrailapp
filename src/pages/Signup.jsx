
import React,{ useState} from 'react'

import { Link } from 'react-router-dom'


import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
export default function Signup() {
  const[passwordSwitch, setPasswordSwitch]=useState(false);
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");


const  signup = async (e) => {
  e.preventDefault();
  try{
    await addDoc(collection(db, "tasks"), {
     email:email,
     password:password,
     created:Timestamp.now(),
    });
  } catch (err){
    alert(err);
  }
  };




  return(
<div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
          <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
          <p className='text-black text-1 font-semibold text-center mt-2'>You're 1-click away from creating an account</p>

          <input 
          type="email" 
          placeholder="email address" 
          className='w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4' 
          onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
          <input 
           type={passwordSwitch ? "text" : "password"}  
          placeholder="password" 
          className='w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4' 
onChange={(e) => setPassword(e.target.value)}
/>
<span
          className='text-right absolute right-4 bottom-0 top-6 left-8 text-gray-500 font-x5 cursor-pointer'
           onClick={() => setPasswordSwitch(!passwordSwitch)}
           >
           show
         </span>
         </div>
          <button className='w-full h-8 rounded-lg bg-black text-white font-semibold text-md mt-5'>Create account</button>

          <p className=' text-center mt-3 font-light text-2xl text-gray-400'>OR</p>
          <input
           type="text" 
          
           placeholder=
           
          "Continue with Google"
        
          
            className='w-full h-8 rounded-lg text-center border-2 border-gray-500 px-6 mt-4' />
          <input
           type= "text"
            placeholder="Continue with LinkedIn" 
            className='w-full h-8 rounded-lg text-center border-2 border-gray-500 px-6 mt-4' />
<p className='text-center mt-5 text-gray-700 font-medium'>Already have an account?
<Link to="/login">
              <span className='font-bold text-black'> Login</span>
            </Link>
          </p>
      </div>
    </div>
  

  

  );
};
