import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/amank0259",
        },
        {
            id: 2, child: (<>  <FaGithub size={30} /> </>), href: "https://www.github.com/amank0259",
        },
        {
            id: 4,
            child: (
                <>
                    <FaInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/techboy_aman",
        },
        {
            id: 3,
            child: (
                <>
                    <FaTwitter size={30} />
                </>
            ),
            href: "https://www.twitter.com/amank0259",
        },
        {
            id: 5,
            child: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:amank0259@gmail.com",
        },

    ]
    return (
        <div className='h-auto flex flex-col py-10 gap-10 items-center justify-center bg-gradient-to-b from-gray-800 to-gray-800 text-black'>
            <div className=''>
                <ul className='flex flex-wrap gap-10 items-center justify-center'>
                    {links.map(({ id, child, href }) => (
                        <li key={id} className='bg-zinc-900 p-1 rounded-lg hover:scale-125 duration-300'>
                            <a href={href} className='text-white'
                                target='_blank'>
                                {child}
                            </a>
                        </li>
                    ))};
                </ul>
            </div>
            <div>
                <h4 className='text-md lg:text-xl text-white font-semibold'>Created with <span className="text-red-500">&#10084;</span> by me </h4>
            </div>
        </div>
    )
}

export default Footer