import React, { useEffect, useState } from 'react'
import Logo from './assets/logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isWindowScrolling, setIsWindowScrolling] = useState(false)

    const stickNav = () => {
        if (window.scrollY > 0) {
            setIsWindowScrolling(true);
            setIsNavOpen(false)
        }
        else {
            setIsWindowScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNav);
        
        return () => {
            window.removeEventListener('scroll', stickNav);
        }

    })


  return (
    <header className={`sticky top-0 w-full flex bg-[#080a12]/0 z-30 text-white ${isWindowScrolling && 'bg-[#080a12]/80 backdrop-blur-lg border-b-[0.01rem] border-white/20'}`}> 
        <nav className='flex justify-between items-center w-[1200px] max-w-[90%] h-[80px] mx-auto'>
            <a href="#" className='text-base sm:text-xs font-semibold text-blue-400 flex items-center'>
                <img className='w-[100px] aspect-video object-cover' src={Logo} alt="" />
                <span>Skylux Technologies</span>
            </a>

            <ul className={`flex items-center gap-6 md:fixed md:top-[calc(80px+0.02rem)] ${isNavOpen ? 'md:left-0' : 'md:left-[-120%]'} duration-300 ease-in-out md:w-screen md:flex-col md:items-start md:p-[5%] md:bg-[#080a12]/90 md:backdrop-blur-lg md:border-b-[0.01rem] md:border-white/20`}>
                <li><a href="#" className='hover:text-blue-500'>Home</a></li>
                <li><a href="#about" className='hover:text-blue-500'>About</a></li>
                <li><a href="#services" className='hover:text-blue-500'>Services</a></li>
                <li><a href="#project" className='hover:text-blue-500'>Portfolio</a></li>
                <li><a href="#testimonials" className='hover:text-blue-500'>Testimonials</a></li>
                <li><a href="#contact" className='hover:text-blue-500'>Contact</a></li>
            </ul>

            <div onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hidden p-2 rounded-md hover:bg-neutral-900/40 md:block'>
                {isNavOpen? <X size={25}/> :  <Menu size={25}/>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
