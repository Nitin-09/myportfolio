import React from 'react'
import profile from '../profile.jpeg'

function Navbar(props) {
  const handleMenu =()=>{
    if(props.Options===false)
    props.setOptions(true)
    else
    props.setOptions(false)
  }
  return (
    <div className='w-full sticky z-20 mt-2'>
    <div className='w-full h-16 flex justify-end items-center'>
      <div className='flex items-center justify-center p-3 gap-3 select-none'>
        <button onClick={handleMenu} className='w-14 h-14 p-2 hover:bg-gray-200 hover:rounded-full'>
          <svg class="gb_j" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </button>
        <div className='hover:border-4 border-gray-200 rounded-full w-14 h-14 flex justify-center items-center'>
          <img className='w-12 h-12 rounded-full' src={profile} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar