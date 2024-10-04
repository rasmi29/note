import React, { useState } from 'react'
import Navbar from "../../components/Navbar";
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom'; 
import { validateEmail } from '../../utils/helper';

const SignUp = () => {

const[name,setName] = useState("");
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[error,setError] = useState("");

const handleSignup = async(e) => {
  e.preventDefault() ;
  if(!name){
    setError("Please enter your name");
    return;
  }
  if(!validateEmail(email)){
    setError("Please enter a valid email");
    return;
  }
  if(!password){
    setError("Please enter your password");
    return;
  }
  setError("")
  
  
}

  
  return (
    <>
      <Navbar/>
      <div className='flex items-center justify-center mt-28'>
        <div className='py-10 bg-white border rounded w-96 px-7 '>
          <form onSubmit={handleSignup}>
            <h4 className='text-2xl mb-7'>Sign Up</h4>
            <input 
              type="text"
              placeholder='Name'
              className='input-box'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              
            />
            <input 
              type="text"
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              
            />

            <PasswordInput
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {error && <p className='pb-1 text-xs text-red-500'>{error}</p>}

            <button type="submit" className='btn-primary'>Create Account</button>
            <p className='mt-4 text-sm text-center '>
              Already have an account ? {""}
              <Link to="/login" className="font-medium underline text-primary ">Login
              </Link>
              
            </p>

            
          </form>
        </div>
      </div>
    </>
    
  )
}

export default SignUp