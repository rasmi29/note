import React from 'react'

const Profileinfo = ({onLogout}) => {

    
  return (
    <div>
        <div className='flex items-center gap-3'>
            <div className='flex items-center justify-center p-3 mr-3 font-medium rounded-full text-slate-950 bg-slate-100'>Rasmiranjan</div>
            <div className=''>
                
                <button className='underline  text-slate-700' onClick={onLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Profileinfo