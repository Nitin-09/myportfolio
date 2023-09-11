import React from 'react'

function Resume() {
    const handleResume = () => {
        document.getElementById('resume')?.classList.toggle('flex')
        document.getElementById('resume')?.classList.toggle('hidden')
    }
    return (
        <div className='absolute top-0 w-[90vw] flex justify-end items-end z-30'>
            <div onClick={handleResume} id='resume' className='bg-white w-[50vw] p-5 hidden flex-col gap-4 mx-auto my-2 overflow-y-scroll h-[95vh]'>
                <div >
                    <div>
                        <span className='font-bold'>Nitin Gangwani</span>
                    </div>
                    <div className='flex gap-2 text-sm'>
                        <a className='text-blue-500 underline' href="Nitingangwani982000@gmail.com">Nitingangwani982000@gmail.com</a>|
                        <span>(+91) 7000080882</span>|
                        <a className='text-blue-500 underline' href="">LinkedIn</a>|
                        <a className='text-blue-500 underline' href="">GitHub</a>
                    </div>
                    <p className='text-sm'>
                        Aspiring Full Stack Developer with Proven Hands-On Expertise in Web Development, Programming, and Modern Technologies, Dedicated to Creating Seamless and Innovative Digital Solutions.
                    </p>
                </div>
                <div>
                    <h1 className='font-bold'>SUMMARY</h1>
                    <hr className='border-[1px] border-black' />
                    <p className='text-sm text-justify'>I am a dedicated fourth-year BTech student with a strong foundation in programming languages such as C/C++. I possess a proficient understanding of data structures and have gained comprehensive knowledge of Java and object-oriented programming. My focus lies in web development, with hands-on experience in Python (Flask), HTML, CSS, and JavaScript. Additionally, I'm skilled in utilizing technologies like Express.js, React.js, and Node.js. My academic journey includes several practical projects that highlight my aptitude for full-stack development and responsive design. I also have a solid grasp of database management systems and PL/SQL. As a former class representative, I've cultivated effective teamwork and leadership skills. I'm dedicated to continuous learning and exploring new avenues for personal and professional growth.</p>
                </div>
                <div>
                    <h1 className='font-bold'>PROJECTS</h1>
                    <hr className='border-[1px] border-black'/>
                    <div>
                        <h2 className='font-semibold'>Resume Builder Web Application</h2>
                        <ul className='list-disc px-8 text-sm'>
                            <li>Created a user-friendly web app enabling resume creation using templates.</li>
                            <li>Utilized MERN stack (MongoDB, Express.js, React.js, Node.js) for seamless functionality.</li>
                            <li>Incorporated Tailwind CSS for consistent and appealing design.</li>
                            <li>Link to website - <a href="">Click Herev</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-semibold'>Blog Application</h2>
                        <ul className='list-disc px-8 text-sm'>
                            <li>Designed and built a dynamic web-based blog application.</li>
                            <li>Utilized Python with Flask, HTML, CSS, and SQLite for efficient development.</li>
                            <li>IImplemented complete CRUD (Create, Read, Update, Delete) operations for blog posts.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold'>   Sudoku Game Web Application</h2>
                        <ul className='list-disc px-8 text-sm'>
                            <li>Designed and developed an interactive web-based Sudoku game application.</li>
                            <li>Utilized MERN stack (MongoDB, Express.js, React.js, Node.js) for seamless functionality.</li>
                            <li>Created a user-friendly dashboard with game levels (easy, medium, hard).</li>
                            <li>Link to website - <a href="">Click Here</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold'> Portfolio Website</h2>
                        <ul className='list-disc px-8 text-sm'>
                            <li>Currently working on crafting a dynamic personal portfolio website.</li>
                            <li>Building the website using the MERN stack, with a strong focus on React.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>EDUCATION</h1>
                    <hr className='border-[1px] border-black'/>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className='font-semibold'>Institute of Technology and Management, Gwalior</h2>
                            <span className='text-sm'>Bachelor of Technology | Computer Science | CGPA - 8.28</span>
                        </div>
                        <span>Dec’20-Present</span>
                    </div>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className='font-semibold'>Kiddy's Corner Higher Secondary School, Gwalior</h2>
                            <span className='text-sm'>Intermediate | CBSE Board | CGPA - 7.36</span>
                        </div>
                        <span>July’18-June’19</span>
                    </div>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className='font-semibold'>Wendy School Junior College, Gwalior</h2>
                            <span className='text-sm'>Matriculate | ICSE Board | CGPA - 7.64</span>
                        </div>
                        <span>July’17-June’18</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>SKILLS</h1>
                    <hr className='border-[1px] border-black'/>
                    <div>
                        <h2 className='font-semibold'>Technical Skills:</h2>
                        <ul className='list-disc px-8 text-sm'>
                            <li>Programming Languages: C/C++, Java, Python</li>
                            <li>Web Development: HTML, CSS, JavaScript</li>
                            <li>Frameworks: Flask (Python), Express.js, React.js</li>
                            <li>Styling: Tailwind CSS</li>
                            <li>Back-End: Node.js</li>
                            <li>Databases: MongoDB, Oracle</li>
                            <li>Database Query Language: PL/SQL</li>
                            <li>Responsive Web Design</li>
                            <li>Version Control: Git</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-semibold'>Non-Technical Skills:</h2>
                        <ul className='list-disc px-8 text-sm'>
                            <li> Problem Solving</li>
                            <li>Leadership and Teamwork</li>
                            <li>User Interface (UI) Design</li>
                            <li>Project Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume