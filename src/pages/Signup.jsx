import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [passwordSwitch, setPasswordSwitch] =React.useState(false);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const [userEmail, setUserEmail] = React.useState('')

  const signup = async () => {
    try {
      setLoading(true);
      const authentication = getAuth();
      const details = await createUserWithEmailAndPassword(authentication, email, password);
      console.log(details.user);
      setUserEmail(details.user.email);
      setLoading(false);
    } catch (error) {
    }
  }
  
  return (

    <div className="w-full h-auto flex justify-center items-center bg-gray-200">
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
        <h3 className="text-black text-2xl font-bold text-center">HerTech</h3>
        <p className="text-black text-1 font-semibold text-center mt-2">
          You're 1-click away from creating an account {userEmail}</p>

        <input
          type="email"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder = "example@email.com"
          className="w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4" />

        <div className="relative">
          <input
            type={passwordSwitch ? "text" : "password"}
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full h-8 rounded-lg border-2 border-gray-500 px-6 mt-4"
          />

          <span
            className="text-right absolute right-4 bottom-0 top-6 left-8 text-gray-500 font-x5 cursor-pointer"
            onClick={() => setPasswordSwitch(!passwordSwitch)}>
            show
          </span>
        </div>

        <button 
        onClick= {signup} 
        className='w-full h-8 rounded-lg bg-black text-white font-semibold text-md mt-5'>
          Create account 
          </button>

        <p className=" text-center mt-3 font-light text-2xl text-gray-400"> OR </p>

        <input
          type="text"
          placeholder="Continue with Goggle"
          className="w-full h-8 rounded-lg text-center border-2 border-gray-500 px-6 mt-4" />

        <input
          type="text"
          placeholder="Continue with LinkedIn"
          className="w-full h-8 rounded-lg text-center border-2 border-gray-500 px-6 mt-4" />

        <p className="text-center mt-5 text-gray-700 font-medium">
          Already have an account?
          <Link to="/login">
            <span className="font-bold text-black"> Login</span>
          </Link>
        </p>

      </div>
    </div>
  );
}
