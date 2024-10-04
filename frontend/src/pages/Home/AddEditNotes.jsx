import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>TITLE</label>
            <input type="text" className='text-2xl outline-none text-slate-950 ' placeholder='Go to gym at 5' />
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>content</label>
            <textarea className='p-2 text-sm rounded outline-none text-slate-950 bg-slate-50 ' placeholder='Take a 30-minute break every hour' rows={10} />
            
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
        </div>
        <button className='p-3 mt-5 font-medium btn-primary ' onClick={()=>{}}>Add</button>
    </div>
  )
}

export default AddEditNotes