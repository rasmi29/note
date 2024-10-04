import {React,useState} from 'react'
import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput';
import {validateEmail} from"../../utils/helper";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  

  const handleLogin = (e) => {
    e.preventDefault();
    //validate email
    if(!validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }
    //validate password
    if(password.length < 4){
      setError("Password should be at least 4 characters long");
      return;
    }
      setError("");
    } 
  
  return (
    <>
        <Navbar/>

        <div className='flex items-center justify-center mt-28'>
            <div className='py-10 bg-white border rounded w-96 px-7'>
                <form onSubmit={handleLogin}>
                    <h4 className='text-2xl mb-7 '>Login</h4>
                    <input 
                      type="text"
                      placeholder='email' 
                      className='input-box' 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <PasswordInput 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />

                    {error && <p className='pb-1 text-xs text-red-500'>{error}</p>}                   
                    
                    <button type='submit' className='btn-primary'>login</button>
                    <p className='mt-4 text-sm text-center '>not Registerd yet?{""}<Link to="/signup" className='font-medium underline text-primary '>Create an account</Link></p>
                </form>
            </div>
        </div>


    </>
  ) 
}

export default Login