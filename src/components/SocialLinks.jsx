import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/amank0259",
            style: 'bg-blue-500'
        },
        {
            id: 2, child: ( <> GitHUb <FaGithub size={30}/> </> ), href: "https://www.github.com/amank0259", style: 'bg-black'
        },
        {
            id: 4,
            child: (
                <>
                Instagram <FaInstagram size={30}/>
                </>
            ),
            href: "https://www.instagram.com/techboy_aman",
            style: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        },
        {
            id: 3,
            child: (
                <>
                Twitter <FaTwitter size={30}/>
                </>
            ),
            href: "https://www.twitter.com/amank0259",
            style: 'bg-black'
        },
        {
            id: 5,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:amank0259@gmail.com",
            style: 'bg-blue-800'
        },
        
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {links.map(({id,child, href, style})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300' + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                target='_blank'>
                {child}
                </a>
            </li>
            ))};
        </ul>
    </div>
  )
}

export default SocialLinks