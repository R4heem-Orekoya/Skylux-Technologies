import React, { useState} from 'react'
import { ChevronUp } from 'lucide-react';

const Backtotop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisiblity = () => {
        const scrolled = document.documentElement.scrollTop;
        
        scrolled > 600 ? setVisible(true): setVisible(false);
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    document.addEventListener('scroll', toggleVisiblity);
    
  return (
    <button onClick={scrollToTop} className={`grid place-items-center text-3xl text-white fixed ${!visible ? 'bottom-[-100%]' : 'bottom-8'} duration-500 ease right-8 w-[60px] bg-black/40 backdrop-blur-2xl aspect-square rounded-full ring-1 ring-white/30 z-50`}>
      <ChevronUp size={40} strokeWidth={1.3}/>
    </button>
  )
}

export default Backtotop
