import React from 'react'
import cpp from '../assets/Cpp.svg'
import html from '../assets/html.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import js from '../assets/javascript.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import react from '../assets/react-svgrepo-com.svg';
import tailwind from '../assets/tailwind.svg';
import figma from '../assets/figma.svg';
import linux from '../assets/linux.svg';

const Skills = () => {

    const tech = [
        {
            id: 1,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-400'
        },
        {
            id: 2,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-400'
        },
        {
            id: 4,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-400'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-blue-400'
        },
        {
            id: 6,
            src: git,
            title: 'Git',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: github,
            title: 'Github',
            style: 'shadow-black'
        },
        {
            id: 8,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-cyan-500'
        },
        {
            id: 9,
            src: figma,
            title: 'Fogma',
            style: 'shadow-green-800'
        },
        {
            id: 10,
            src: linux,
            title: 'Linux',
            style: 'shadow-yellow-500'
        },
    ]

    return (
        <div name="skills" className='page-3 bg-gradient-to-b from-black to-gray-800 lg:pt-40 w-full h-screen pb-40 z-10'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white z-10'>
                <div className='mt-10 lg:pt-20 pt-40'>
                    <h1 className='text-5xl font-extrabold border-b-4 border-gray-300 p-2 inline z-10'>Skills</h1>
                    <p className='py-6 mt-4 text-2xl font-bold z-10'>What I know...</p>
                </div>

                <div className='box-cont w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0 z-10'>

                    {tech.map(({ id, src, style, title }) => (
                        <div key={id} className={`box shadow-md hover:scale-105 duration-500 h-[120%] justify-center flex flex-col bg-gray-800 bg-opacity-90 py-2 rounded-lg z-10 ${style}`}>
                            <img className='h-20 w-20 mx-auto' src={src} alt="" />
                            <p>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills