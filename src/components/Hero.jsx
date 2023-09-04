import React from 'react'

const Hero = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-black'>
        <div className='max-w-[800px] mx-auto p-8 flex flex-col justify-center h-full text-center'>
          <h2 className='text-white text-6xl py-4'>I'm <span className='relative z-10 py-0 px-1 inline-block before:absolute before:h-2/4 before:bottom-0 before:left-0 before:right-0 before:bg-blue-400 before:-z-10'>Jenny Wilson</span> a Professional Photographer from New York City</h2>
          <p className='text-gray-400 text-2xl py-4'>
            Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
          </p>
          <div className='p-8'>
            <a href='http://localhost:3000/' className='inline-block p-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out'>
              Available for hire
            </a>
          </div>
        </div>
    </div>
    
  )
}

export default Hero