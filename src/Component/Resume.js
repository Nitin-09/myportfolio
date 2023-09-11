import React from 'react'

function Resume() {
    const handleResume=()=>{
        document.getElementById('resume')?.classList.toggle('flex')
        document.getElementById('resume')?.classList.toggle('hidden')
      }
    return (
        <div onClick={handleResume} id='resume' className='absolute top-3 h-[97vh] w-full justify-center items-center z-50 hidden'>
            <div className='bg-yellow-600 w-fit p-3'>
                <img className='h-[95vh]' src='./images/resume.jpg' alt="" />
            </div>
        </div>
    )
}

export default Resume