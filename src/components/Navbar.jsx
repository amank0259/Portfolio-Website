import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 0,
            link: "home"
        },
        {
            id: 1,
            link: "about"
        },
        {
            id: 2,
            link: "skills"
        },
        {
            id: 3,
            link: "projects"
        },
        {
            id: 4,
            link: "contact"
        },
    ]


    return (
        <div className='flex justify-evenly items-center w-full h-20 px-4 text-white bg-black opacity-90 fixed gap-40 z-20'>
            <div>

                <Link to='home' smooth duration={500} className='text-5xl text-white tracking-widest font-cursive font-bold cursor-pointer ml-4'>A<span className='text-red-600 font-signature tracking-widest font-bold'>man</span></Link>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ link, id }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-125 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 textgray-300'>
                    <h1 className='text-5xl font-signature ml-2 mb-20'>A<span className='text-red-600'>man</span></h1>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {
                            setNav(!nav)
                        }} to={link} smooth duration={500}>{link}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Navbar