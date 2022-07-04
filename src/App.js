import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"


// pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgotpassword from './pages/Forgotpassword'
import Home from './pages/Home'
import Jobboard from './pages/Jobboard'
import Navbar from './component/Navbar';




function App() {
  return (
    <div className='w-full h-screen bg-gray-200'>
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgotpassword" element={<Forgotpassword />} />
        <Route path="Jobboard" element={<Jobboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );


}

export default App;
