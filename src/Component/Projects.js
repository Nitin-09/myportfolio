import React, { useState } from 'react';
import '../Project.css';

const projectsData = [
  {
    name: ' Sudoku Master - React.js Web Application',
    description: 'Sudoku Master is a dynamic and engaging web application built using React.js and Tailwind CSS that showcases my proficiency in front-end development, user interface design, and interactive user experiences. This project combines the classic puzzle-solving challenge of Sudoku with modern web technologies to deliver an enjoyable and stimulating gaming experience.',
    imageUrl: './images/sudoku.png',
    link: 'https://mysudokugame.netlify.app/'
  },
  {
    name: 'Resume Forge - Dynamic Resume Creation Web App',
    description: 'Welcome to Resume Forge, an innovative web application developed using React.js and Tailwind CSS, showcasing my proficiency in full-stack web development, user-centered design, and efficient form processing. Resume Forge empowers users to effortlessly create compelling resumes by simply filling out an intuitive form. With Firebase Authentication, users can securely store their personal data and manage multiple resume templates, making the resume crafting process seamless and secure.',
    imageUrl: './images/resume.png',
    link: 'https://resumizeforge.netlify.app/'
  },
  {
    name: 'Resume Forge - Dynamic Resume Creation Web App',
    description: 'Welcome to Resume Forge, an innovative web application developed using React.js and Tailwind CSS, showcasing my proficiency in full-stack web development, user-centered design, and efficient form processing. Resume Forge empowers users to effortlessly create compelling resumes by simply filling out an intuitive form. With Firebase Authentication, users can securely store their personal data and manage multiple resume templates, making the resume crafting process seamless and secure.',
    imageUrl: './images/resume.png',
    link: 'https://resumizeforge.netlify.app/'
  },
  {
    name: 'Resume Forge - Dynamic Resume Creation Web App',
    description: 'Welcome to Resume Forge, an innovative web application developed using React.js and Tailwind CSS, showcasing my proficiency in full-stack web development, user-centered design, and efficient form processing. Resume Forge empowers users to effortlessly create compelling resumes by simply filling out an intuitive form. With Firebase Authentication, users can securely store their personal data and manage multiple resume templates, making the resume crafting process seamless and secure.',
    imageUrl: './images/resume.png',
    link: 'https://resumizeforge.netlify.app/'
  },
  {
    name: 'Resume Forge - Dynamic Resume Creation Web App',
    description: 'Welcome to Resume Forge, an innovative web application developed using React.js and Tailwind CSS, showcasing my proficiency in full-stack web development, user-centered design, and efficient form processing. Resume Forge empowers users to effortlessly create compelling resumes by simply filling out an intuitive form. With Firebase Authentication, users can securely store their personal data and manage multiple resume templates, making the resume crafting process seamless and secure.',
    imageUrl: './images/resume.png',
    link: 'https://resumizeforge.netlify.app/'
  },
  {
    name: 'Resume Forge - Dynamic Resume Creation Web App',
    description: 'Welcome to Resume Forge, an innovative web application developed using React.js and Tailwind CSS, showcasing my proficiency in full-stack web development, user-centered design, and efficient form processing. Resume Forge empowers users to effortlessly create compelling resumes by simply filling out an intuitive form. With Firebase Authentication, users can securely store their personal data and manage multiple resume templates, making the resume crafting process seamless and secure.',
    imageUrl: './images/resume.png',
    link: 'https://resumizeforge.netlify.app/'
  },
  {
    name: 'Resume Forge - Dynamic Resume Creation Web App',
    description: 'Welcome to Resume Forge, an innovative web application developed using React.js and Tailwind CSS, showcasing my proficiency in full-stack web development, user-centered design, and efficient form processing. Resume Forge empowers users to effortlessly create compelling resumes by simply filling out an intuitive form. With Firebase Authentication, users can securely store their personal data and manage multiple resume templates, making the resume crafting process seamless and secure.',
    imageUrl: './images/resume.png',
    link: 'https://resumizeforge.netlify.app/'
  },
];


function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const scrollNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projectsData.length);
  };

  const scrollPrevProject = () => {
    setCurrentProjectIndex((currentProjectIndex - 1 + projectsData.length) % projectsData.length);
  };


  return (
    <React.Fragment>
      <div className='w-full md:w-[80vw] px-2 md:px-5'>
        <span className='text-white font-bold text-3xl'>Projects</span>
        <hr className='border border-white transition-all duration-200' />
      </div>
      <div className='w-full flex flex-col'>
        <div className='h-[48vh] md:h-[55vh] lg:h-[50vh] my-3 mx-1'>
            <div className='w-full h-full flex flex-col overflow-y-scroll p-2 lg:flex-row lg:gap-3'>
              <img src={projectsData[currentProjectIndex].imageUrl} alt={projectsData[currentProjectIndex].name} className='w-full lg:w-[50%] lg:h-72 object-contain rounded-md' />
              <div className='flex flex-col'>
                <h2 className='text-base md:text-xl text-white font-semibold md:mb-2'>{projectsData[currentProjectIndex].name}</h2>
                <p className='text-gray-400 text-xs sm:text-sm md:text-base text-justify order-2 md:order-none'>{projectsData[currentProjectIndex].description}</p>
                <a href={projectsData[currentProjectIndex].link} className='md:mt-4 inline-block text-blue-500 hover:underline'>View Project</a>
              </div>
            </div>
        </div>
        <div className='flex justify-evenly lg:justify-between items-center w-full'>
          <button onClick={scrollPrevProject} className='py-2 px-2 bg-gray-200 hover:bg-gray-300 rounded-md'>Previous</button>
          {projectsData.length > 1 &&
            (
              <button onClick={scrollNextProject} className='py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md'>Next</button>
            )}
        </div>
      </div>
    </React.Fragment >

  );
}

export default Projects;