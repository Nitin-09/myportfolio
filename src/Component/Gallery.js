import React from 'react';
const MyComponent = () => {

    return (
        <React.Fragment>
            <div className='w-full md:w-[80vw] px-2 md:px-5'>
                <span className='text-white font-bold text-3xl'>Gallery</span>
                <hr className='border border-white transition-all duration-200' />
            </div>
            <div className='flex flex-col md:flex-row gap-2 mt-2 overflow-x-scroll h-full md:h-[62vh] p-2' >
                <img className='rounded-lg ' src="./photos/img2.jpg" alt="" />
                <img className='rounded-lg ' src="./photos/img5.jpg" alt="" />
                <img className="rounded-lg md:w-[40vw]" src='./photos/img1.jpg' alt="" />
                <img className='rounded-lg ' src="./photos/img4.jpg" alt="" />

            </div >
        </React.Fragment>
    );
};

export default MyComponent;
