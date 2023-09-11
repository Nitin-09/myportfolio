import React from 'react'

function About() {
  return (
    <React.Fragment>
      <div className='w-full lg:w-[80vw] px-2 lg:px-5'>
        <span className='text-white font-bold text-3xl'>About</span>
        <hr className='border border-white transition-all duration-200' />
      </div>
      <div className='pt-2 overflow-scroll h-full w-[68vw] lg:w-full'>
      <p className='text-gray-400 font-semibold text-base lg:text-xl p-1 lg:p-4 w-[90%] text-justify'>
      <span className='text-lg lg:text-2xl'>👋</span> Hey, I'm <span className='text-red-300'>Nitin Gangwani</span> , a fourth-year B.Tech student with a coding obsession! 🚀
      </p>
      <p className='text-gray-400 font-semibold text-base lg:text-xl p-1 lg:p-4 w-[90%] text-justify'>
      <span className='text-lg lg:text-2xl'>🎮</span> Coding is my playground, and I'm all about turning ideas into reality through lines of code. From mastering <span className='text-green-300'>C++</span> to crafting web magic with <span className='text-green-300'>JavaScript</span> and <span className='text-green-300'>React.JS</span>, I've got the tools to build digital wonders.
      </p>
      <p className='text-gray-400 font-semibold text-base lg:text-xl p-1 lg:p-4 w-[90%] text-justify'>
      <span className='text-lg lg:text-2xl'>💻</span> <span className='text-green-300'>Java</span> is my canvas for creating diverse applications, and <span className='text-green-300'>Python</span> + <span className='text-green-300'>Flask</span> are my dynamic duo for web wizardry. I'm also fluent in databases – <span className='text-green-300'>Oracle</span>, <span className='text-green-300'>SQL</span>, <span className='text-green-300'>PL/SQL</span>, and <span className='text-green-300'>MongoDB</span> are where I make data dance.
      </p>
      <p className='text-gray-400 font-semibold text-base lg:text-xl p-1 lg:p-4 w-[90%] h-[40%] text-justify'>
      <span className='text-lg lg:text-2xl'>🌟</span> But here's the twist – I'm not stopping here. My journey's just beginning, and I'm gearing up to explore cloud tech, machine learning, and beyond. Let's make Tech history together!
      </p>
      </div>
    </React.Fragment>
  )
}

export default About
