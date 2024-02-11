import React from 'react';
import "./line.css";

const About = () => {
  return (
    <div name="about" className='page-2 pb-20 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-10'>
        <div className='lg:mt-40 mt-20 z-10'>
          <h1 className='text-5xl font-extrabold inline border-b-4 border-gray-300 z-10'>About</h1>
        </div>
        <p className='text-xl mt-20 hidden lg:block text-justify z-10'>
          I am a seasoned Web Developer, specializing in Front-End development, and boast proficiency in C++, HTML, CSS, JavaScript, React.js and Next.js Currently a B.Tech final year Computer Science and Engineering student.
          I am deeply engaged in the dynamic field of web development. My expertise extends to modern web standards and best practices, allowing me to create robust and user-friendly interfaces.
        </p>
        <br />
        <p className='text-xl text-justify z-10'>As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀
          My passion lies in pushing the boundaries of innovation and continuously enhancing my skills. Obsessed with the notion of self-improvement, I am on the lookout for a platform that fosters growth and acceleration in the ever-evolving landscape of #WebDev and #JavaScript.</p>
        <br />
        <p className='text-xl text-justify hidden lg:block z-10'>Eager to contribute to cutting-edge projects and motivated by the pursuit of excellence, I bring a dynamic blend of academic knowledge and practical experience to any development team.</p>
        <div className='lg:mt-10 z-10'>
          <h1 className='text-4xl font-bold inline z-10'>Education</h1>
          <div className='mt-8 relative'>
            <div className='line'></div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <h2 className='text-2xl font-bold block'>Bachelor of Technology - Computer <br /> Science and Engineering</h2>
            <p className='text-xl font-semibold text-gray-400 block mt-2'>2021-2024 / Uttarakhand Technical University</p>
          </div>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold block'>Diploma - Mechanical Engineering</h2>
            <p className='text-xl font-semibold text-gray-400 block mt-2'>2017-2020 / Roorkee College of Engineering</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About