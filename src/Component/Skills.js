import React, { useState, useEffect } from 'react';

const skillsData = [
    {
        title: 'HTML',
        url: './images/html.png',
        percent: '80',
    },
    {
        title: 'CSS',
        url: './images/css-3.png',
        percent: '70',
    },
    {
        title: 'JavaScript',
        url: './images/js.png',
        percent: '70',
    },
    {
        title: 'React',
        url: './images/react.png',
        percent: '80',
    },
    {
        title: 'Tailwind CSS',
        url: './images/tailwind.png',
        percent: '80',
    },
    {
        title: 'Java',
        url: './images/java.png',
        percent: '70',
    },
    {
        title: 'Python',
        url: './images/python.png',
        percent: '75',
    },
    {
        title: 'C++',
        url: './images/cpp.png',
        percent: '65',
    },
    {
        title: 'C',
        url: './images/c.png',
        percent: '65',
    },
    {
        title: 'MongoDB',
        url: './images/mongodb.png',
        percent: '80',
    },
    {
        title: 'Oracle',
        url: './images/oracle.png',
        percent: '80',
    },
    {
        title: 'Github',
        url: './images/github.png',
        percent: '80',
    },
];

const Skills = () => {
    const [currentSkill, setCurrentSkill] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < skillsData[currentSkill].percent) {
                setProgress(prevProgress => prevProgress + 1);
            }
        }, 20); // Adjust the interval duration as needed

        return () => {
            clearInterval(interval);
        };
    }, [currentSkill,progress]);
    useEffect(() => {
        setProgress(0)
    }, [currentSkill])


    return (
        <React.Fragment>
            <div className='w-full md:w-[80vw] px-2 md:px-5'>
                <span className='text-white font-bold text-3xl'>Skills</span>
                <hr className='border border-white transition-all duration-200' />
            </div>
            <div className='md:flex md:flex-col lg:flex-row md:justify-evenly items-center h-full my-1 mx-4 hidden'>
                <div className="grid grid-cols-4 gap-3 lg:gap-y-1">
                    {skillsData.map((skill, index) => (
                        <button key={index} onClick={() => setCurrentSkill(index)} className='hover:text-white font-bold text-base'>
                            <img className={`aspect-auto object-contain transition-all md:w-24 md:h-24 xl:w-32 xl-h-32 transform hover:scale-75 duration-300 ${skill.title==="Github"?"invert":""}`} src={skill.url} alt="" />
                            {skill.title}
                        </button>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <svg className="transform -rotate-90 w-64 h-64">
                        <circle
                            cx="125"
                            cy="125"
                            r="90"
                            stroke="currentColor"
                            strokeWidth="30"
                            fill="transparent"
                            className="text-white"
                        />
                        <circle
                            cx="125"
                            cy="125"
                            r="90"
                            stroke="currentColor"
                            strokeWidth="30"
                            fill="transparent"
                            strokeDasharray={2 * 22 / 7 * 100}
                            strokeDashoffset={2 * 22 / 7 * 100 - (progress / 100) * 2 * 22 / 7 * 100}
                            className="text-yellow-500"
                        />
                    </svg>
                    <span className="absolute text-4xl text-yellow-500">{`${progress}%`}</span>
                </div>
            </div>
            <div className='flex md:hidden flex-col justify-center items-center my-auto h-full'>
                <button className='hover:text-white font-bold text-base'>
                    <img className={`aspect-auto object-contain transition-all w-32 h-32 transform hover:scale-75 duration-300 ${skillsData[currentSkill].title === "Github" ? "invert" : ""}`} src={skillsData[currentSkill].url} alt="" />
                    {skillsData[currentSkill].title}
                </button>
                <div className='flex justify-between w-full'>
                    <button className=' border-2 px-1 py-1 font-bold rounded-full bg-yellow-500' onClick={()=>{currentSkill!==0?setCurrentSkill((prev)=>prev-1):setCurrentSkill((prev)=>skillsData.length-1)}}>Previous</button>
                    <button className=' border-2 px-2 py-1 font-bold rounded-full bg-yellow-500' onClick={()=>{currentSkill!==skillsData.length-1?setCurrentSkill((prev)=>prev+1):setCurrentSkill((prev)=>0)}}>Next</button>
                </div>
                <div className="flex items-center justify-center">
                    <svg className="transform -rotate-90 w-52 h-52">
                        <circle
                            cx="105"
                            cy="105"
                            r="50"
                            stroke="currentColor"
                            strokeWidth="15"
                            fill="transparent"
                            className="text-white"
                        />

                        <circle
                            cx="105"
                            cy="105"
                            r="50"
                            stroke="currentColor"
                            strokeWidth="10"
                            fill="transparent"
                            strokeDasharray={2 * 22 / 7 * 50}
                            strokeDashoffset={2 * 22 / 7 * 50 - (progress / 100) * 2 * 22 / 7 * 50}
                            className="text-yellow-500"
                        />
                    </svg>
                    <span className="absolute text-xl text-yellow-500">{`${progress}%`}</span>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Skills;
