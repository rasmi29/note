import React, { useState } from 'react';
import Profileinfo from './Profileinfo'
import{useNavigate} from "react-router-dom";
import SearchBar from './SearchBar';

const Navbar = () => {

  const [searchQuerry,setSearchQuerry] =useState("");

  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login")
  };
const handleSearch = ()=>{
  
}
const clearSearch =  ()=>{
  setSearchQuerry("");
}
  
  return (
    <div className='flex items-center justify-between px-8 py-2 bg-white drop-shadow-md '>
        <h2 className='py-2 text-xl font-medium text-black'>Notes</h2>

        <SearchBar
          value={searchQuerry}
          onChange={({target}) =>{
            setSearchQuerry(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={clearSearch}
        />
        
        <Profileinfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar