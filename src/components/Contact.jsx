import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</h1>
                    <p className='py-6'>Submit the form to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/74275214-e22c-46a2-9959-fe534ed76c0d" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-gray-700 focus:bg-gray-800 border-2 rounded-md text-white focus:outline-none' id="" />
                        <input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-gray-700 border-2 rounded-md text-white focus:bg-gray-800 focus:outline-none' id="" />
                        <textarea name="message" id="" placeholder='Enter your message...' className='p-2 bg-gray-700 border-2 rounded-md text-white focus:outline-none focus:bg-gray-800' rows="10" cols={30}></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md z-10 hover:scale-110 duration-300'>Submit</button>
                    </form>
                </div>
            </div>
            <footer className="flex justify-center bg-gray-800 pb-6">
                <h4 className='text-md lg:text-xl font-semibold'>Created with <span className="text-red-500">&#10084;</span> by me </h4>
            </footer>
        </div>
    )
}

export default Contact