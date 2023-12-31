import React from 'react'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import { useParams } from 'react-router-dom'
import Gallery from './Gallery'
import ThankYou from './ThankYou'

function Layout() {
    const { page } = useParams();
    return (
        <div className='m-2 md:m-6 flex justify-between h-[80vh] md:h-[85vh] p-3 relative lg:-top-3'>
            <div className='h-[20vh] md:h-[50vh] w-[100vw] xl:w-[50vh] border-t-4 border-l-4 border-black'></div>
            <div id='scroll' className='absolute drop-shadow-[33px_25px_rgba(0,0,0,0.25)] shadow-md shadow-black bg-black h-[65vh] md:h-[70vh] left-[45px] top-12 md:left-[75px] lg:left-[135px] overflow-hidden p-2 w-[70vw] md:w-[75vw]'>
                {page === 'projects' && <Projects></Projects>}
                {page === 'skills' && <Skills />}
                {page === 'about' && <About />}
                {page === 'contactme' && <Contact />}
                {page === 'gallery' && <Gallery />}
                {page === 'ThankYou' && <ThankYou />}

            </div>
            <div className='h-[20vh] md:h-[50vh] w-[100vw] md:w-[50vh] border-b-4 border-r-4 border-black self-end'></div>
        </div>
    )
}

export default Layout
