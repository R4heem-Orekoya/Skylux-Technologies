import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import lottieanimation from "./assets/lottie-animation2.json";
import lottiecheck from "./assets/lottiecheck.json";
import Illustration from './assets/illustration.svg'
import { MessagesSquare, Mouse } from 'lucide-react'

const Hero = () => {
  return (
    <section className="text-white flex  flex-col sm:overflow-hidden items-center text-center py-[7%] sm:py-[20%] relative after:absolute after:z-20 after:top-[-500px] after:w-[600px] after:sm:w-0 after:sm:top-[-100px] after:aspect-square after:opacity-20 after:bg-gradient-to-r after:from-blue-950 after:to-cyan-950 after:rounded-full after:animate-pulse after:blur-3xl after:left-[50%] after:translate-x-[-50%]">
      <Lottie animationData={lottiecheck} className="absolute bottom-0 left-0 w-[200px] animate-bounce lg:hidden"/>
      <motion.h1 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.3}}
        className="gradient-background bg-clip-text text-transparent text-[4.5rem] leading-snug font-bold">
          Transforming Your Online Visions into Reality!
      </motion.h1>
      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.6}}
        className="text-xl max-w-[800px] mt-8 sm:mt-6 md:text-base sm:text-sm sm:text-left sm:leading-relaxed sm:w-[90%] sm:mr-auto">
          Empowering your digital journey with tailor-made solutions. 
          We're here to elevate your online presence and turn your 
          dreams into thriving realities: Your Business, Our Expertise!
      </motion.p>


      <motion.a 
        initial={{opacity: 0, y:40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.9}}
        href="#" 
        className="px-7 py-3 my-10 sm:my-6 rounded-lg text-xl flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-600 hover:bg-gradient-to-tl sm:mr-auto">
        <MessagesSquare />
        Chat with us!
      </motion.a>

      <motion.a
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.3, delay: 1.1}}
        href="#about" className="sm:mt-20 animate-bounce">
          <Mouse size={40}/>
      </motion.a>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 0.8, delay: 1.3}}
      >
      <Lottie animationData={lottieanimation} className='mt-3 mx-auto w-[50rem] aspect-square max-w-[80%] md:max-w-[50%] sm:mt-motion.6'/>
      </motion.div>
    </section>
  );
};

export default Hero;
