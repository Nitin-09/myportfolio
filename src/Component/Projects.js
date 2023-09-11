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
      <div id='project-container' className='mt-3 md:mt-6 w-full flex flex-col items-start justify-start h-full gap-14 md:gap-7 md:w-[80vw] px-2 md:px-5 transition-transform duration-500' style={{
        transform: `translateY(-${currentProjectIndex * (window.innerWidth < 768? 486 : 448)}px)`,
      }} >
        {projectsData.map((project, index) => (
          <div key={index} className='p-2 md:p-6 rounded-lg w-full flex flex-col md:flex-row min-h-[430px] md:min-h-[420px] gap-3 md:gap-10'>
            <img src={project.imageUrl} alt={project.name} className='w-full md:w-[50%] h-72 object-cover rounded-md md:mb-4' />
            <div className='flex flex-col'>
              <h2 className='text-base md:text-xl text-white font-semibold md:mb-2'>{project.name}</h2>
              <p className='text-gray-600 text-xs md:text-base text-justify order-2 md:order-none'>{project.description}</p>
              <a href={project.link} className='md:mt-4 inline-block text-blue-500 hover:underline'>View Project</a>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-20'>
        <button onClick={scrollPrevProject} className='py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md'>Previous</button>
        {projectsData.length > 1 &&
          (
            <button onClick={scrollNextProject} className='py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md'>Next</button>
          )}
      </div>

    </React.Fragment >

  );
}

export default Projects;