import React from 'react'
import Showcase from "./Showcase";

const Hero = () => {
  return (
    <div name='home' className='pt-32 w-full h-full bg-black'>
        <div className='max-w-[800px] mx-auto p-8 flex flex-col justify-center h-full text-center'>
          <h2 className='text-white text-6xl py-4'>This is the <span className='relative z-10 py-0 px-1 inline-block before:absolute before:h-2/4 before:bottom-0 before:left-0 before:right-0 before:bg-green-300 before:-z-10'>Random Name</span> from LOCATION</h2>
          <p className='text-gray-400 text-2xl py-4'>
            Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
          </p>
          <div className='p-8'>
            <a href='http://localhost:3000/' className='inline-block p-4 bg-green-300 hover:bg-green-400 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out'>
              Available for hire
            </a>
          </div>
        </div>
        <Showcase />
    </div>
  )
}

export default Hero