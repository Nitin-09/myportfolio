import React from 'react';
import profile from '../profile.png'


function Home() {
    return (
        <div className='md:h-[99vh] w-full md:w-screen overflow-x-hidden overflow-y-hidden absolute md:-top-1'>
            <div className='w-full pt-20 flex flex-col md:flex-row justify-around items-center'>
                <div className='flex flex-col gap-4'>
                    <span className='text-4xl md:text-[100px] font-caprasimo font-extrabold text-center transition-opacity ease-in duration-700 opacity-100 hover:opacity-0 relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-yellow-500 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black md:min-h-[100px] flex justify-center items-center'>HI</span>
                    <span className='text-4xl md:text-[100px] font-caprasimo font-extrabold text-center relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-yellow-500 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black md:min-h-[100px] flex justify-center items-center'>I'm Nitin Gangwani</span>

                    <span className='text-white text-base md:text-3xl font-caprasimo font-extrabold text-center relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-yellow-500 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black md:min-h-[50px] flex justify-center items-center'>Web Developer | Python Developer | Student</span>
                </div>
                <img className='drop-shadow-[23px_5px_rgba(0,0,0,0.25)] shadow-black h-[60vh] md:h-[90vh]' src={profile} alt="" />
            </div>
        </div>
        // <div className='w-full overflow-x-hidden overflow-y-hidden absolute'>
        //     <div className='w-full pt-20 flex flex-col md:flex-row justify-around items-center'>
        //         <div className='flex flex-col'>
        //             <span className='text-4xl font-caprasimo font-extrabold text-center transition-opacity ease-in duration-700 opacity-100 hover:opacity-0 relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-yellow-500 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'>HI</span>
        //             <span className='text-4xl font-caprasimo font-extrabold text-center relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-yellow-500 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'>I'm Nitin Gangwani</span>

        //             <span className='text-white text-base font-caprasimo font-extrabold text-center relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-yellow-500 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'>Web Developer | Python Developer | Student</span>
        //         </div>
        //         <img className='drop-shadow-[23px_5px_rgba(0,0,0,0.25)] shadow-black h-[60vh]' src={profile} alt="" />
        //     </div>
        // </div>
    );
};

export default Home;


