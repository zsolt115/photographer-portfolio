import React, { useState } from 'react'
import { TiCameraOutline } from 'react-icons/ti'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
        <div className='flex flex-row justify-center items-center'>
          <TiCameraOutline className='w-[40px] h-[40px] text-blue-400'/>
          <h1 className='text-white text-4xl px-4'>PhotoFolio</h1>
        </div>

        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>

{/** hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
          { !nav ? <FaBars/> : <FaTimes/>}
        </div>

{/** mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Gallery</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>

        <ul className='hidden md:flex flex-row justify-center items-center'>
          <li className='py-6 text-4xl'><IoLogoFacebook/></li>
          <li className='py-6 text-2xl'><IoLogoInstagram/></li>
          <li className='py-6 text-2xl'><IoLogoTwitter/></li>
          <li className='py-6 text-2xl'><IoLogoLinkedin/></li>
        </ul>
    </div>
  )
}

export default Navbar