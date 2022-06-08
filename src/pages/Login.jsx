import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";




export default function Login() {
  const[passwordSwitch, setPasswordSwitch]=useState(false);
  const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const  Login = async (e) => {
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



  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
          <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
          <p className='text-gray-600 text-md font-light text-center mt-2'>Welcome back!</p>

          <input
           type="email"
            placeholder="email address" 
            className='w-full h-10 rounded-lg border-2 border-gray-500 px-6 mt-4'
            onChange={(e) => setEmail(e.target.value)}

             />
             <div className="relative">
          <input
           type={passwordSwitch ? "text" : "password"} 
           placeholder="password" 
           className='w-full h-10 rounded-lg border-2 border-gray-500 px-6 mt-4'
           
           onChange={(e) => setPassword(e.target.value)}
           />
         <span
          className='text-right absolute right-4 bottom-0 top-6 left-8 text-gray-500 font-x5 cursor-pointer'
           onClick={() => setPasswordSwitch(!passwordSwitch)}
           >
           show
         </span>
         </div>
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
