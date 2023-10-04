import React from 'react'
import Logo from './assets/logo.png'

const Footer = () => {
  return (
    <footer className='text-white py-[30px] flex flex-col items-center gap-4 relative before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent'>
      <a href="#">
        <img src={Logo} alt='logo' className='w-[100px] aspect-video object-cover'/>
      </a>
      <p className='text-center'>© Sky-Tech_xx</p>
    </footer>
  )
}

export default Footer
