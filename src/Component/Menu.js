import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Menu(props) {
    const Menubar = [
        {
            title: 'Home',
            url: './images/home.png',
            link: '/',
        },
        {
            title: 'Skills',
            url: './images/soft-skills.png',
            link: '/skills',
        },
        {
            title: 'Projects',
            url: './images/project.png',
            link: '/projects',
        },
        {
            title: 'About',
            url: './images/about.png',
            link: '/about',
        },
        {
            title: 'connect',
            url: './images/connect.png',
            link: '/contactme',
        },
        {
            title: 'gallery',
            url: './images/gallery.png',
            link: '/gallery',
        },
    ];
    const SocialBar = [
        {
            title: 'LinkedIn',
            url: './images/linkedin.png',
            link: 'http://www.linkedin.com/in/nitin-gangwani-1a3a28232',
        },
        {
            title: 'Instagram',
            url: './images/instagram.png',
            link: 'https://www.instagram.com/_innocent_boy_nitin/',
        },
        {
            title: 'Gamil',
            url: './images/gmail.png',
            link: 'http://nitingangwani982000@gmail.com',
        },
        {
            title: 'Whatsapp',
            url: './images/whatsapp.png',
            link: 'https://wa.me/qr/RDDUGAIMS5N6A1',
        },
        {
            title: 'Github',
            url: './images/github.png',
            link: 'https://github.com/Nitin-09',
        },
    ];
    const [activeKey, setactiveKey] = useState(Menubar[0].title);

    return (
        <React.Fragment>-
            <div className={`z-30 absolute top-3 right-36 w-fit flex flex-col lg:flex-row gap-3 bg-yellow-500 transition-transform  ${props.Options ? 'translate-y-0 lg:translate-y-0' : '-translate-y-44 lg:-translate-y-24'}`}>
                <div className="flex gap-1 sm:gap-3 p-1 sm:p-2 rounded-3xl border-[4px] sm:border-[6px] border-black h-fit">
                    {Menubar.map((menuItem, index) => (
                        <Link to={menuItem.link} key={index} onClick={() => setactiveKey(menuItem.title)} className='flex flex-col justify-center items-center transition-all transform hover:drop-shadow-[10px_8px_rgba(0,0,0,0.09)]  md:hover:drop-shadow-[20px_8px_rgba(0,0,0,0.09)] hover:scale-75 duration-300 group '>
                            <img className={`aspect-auto object-contain h-9 w-9 sm:w-12 sm:h-12 ${activeKey === menuItem.title ? 'invert' : ''}`} src={menuItem.url} alt="" />
                        </Link>
                    ))}
                </div>
                <div className="flex gap-1 sm:gap-3 p-1 sm:p-2 rounded-3xl border-[4px] sm:border-[6px] border-black h-fit w-fit">
                    {SocialBar.map((socialItem, index) => (
                        <Link to={socialItem.link} key={index} onClick={() => setactiveKey(socialItem.title)} className='flex flex-col justify-center items-center transition-all transform hover:drop-shadow-[10px_8px_rgba(0,0,0,0.09)]  md:hover:drop-shadow-[20px_8px_rgba(0,0,0,0.09)] hover:scale-75 duration-300 group '>
                            <img className={`aspect-auto object-contain h-9 w-9 sm:w-12 sm:h-12  ${activeKey === socialItem.title ? 'invert' : ''}`} src={socialItem.url} alt="" />
                        </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Menu