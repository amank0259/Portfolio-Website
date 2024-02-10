import React from 'react'
import project1 from '../assets/projects/project1.jpeg'
import project2 from '../assets/projects/project2.jpeg'
import project3 from '../assets/projects/project3.jpeg'
import project4 from '../assets/projects/project4.jpeg'
import project5 from '../assets/projects/project5.png'


const Projects = () => {

    const projects = [
        {
            id: 1,
            src: project1,
            demoSrc: "https://dice-roll-game-alpha.vercel.app/",
            codeSrc: "https://github.com/amank0259/diceRollGame",
        },
        {
            id: 2,
            src: project2,
            demoSrc: "https://amank0259.github.io/Netflix-Clone/",
            codeSrc: "https://github.com/amank0259/Netflix-Clone",
        },
        {
            id: 3,
            src: project3,
            demoSrc: "https://amank0259.github.io/Random-joke-Generator/",
            codeSrc: "https://github.com/amank0259/Random-joke-Generator",
        },
        {
            id: 4,
            src: project4,
            demoSrc: "https://amank0259.github.io/Product-Landing-Page/",
            codeSrc: "https://github.com/amank0259/Product-Landing-Page",
        },
        {
            id: 5,
            src: project5,
            demoSrc: "https://amank0259.github.io/gsap-animated-website/",
            codeSrc: "https://www.github.com/gsap-animated-website/",
        }
    ]


    return (
        <div name="projects" className='bg-gradient-to-b from-gray-800 to-black w-full text-white pt-20 md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 z-10'>
                    <h1 className='text-5xl font-extrabold inline border-b-4 border-gray-300 z-10'>Projects</h1>
                    <p className='py-6 mt-4 text-2xl font-bold z-10'>Check out some of my personal projects here :</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 z-10'>
                    {projects.map(({ id, src, demoSrc, codeSrc }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <a href={demoSrc}><img src={src} alt="" className='rounded-md duration-200 cursor-pointer hover:scale-105' /></a>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-800 rounded-xl'>
                                    <a href={demoSrc}>Demo</a>
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-600 rounded-xl'>
                                    <a href={codeSrc}>Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects