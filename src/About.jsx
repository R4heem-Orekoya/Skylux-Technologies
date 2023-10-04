import React from "react";
import { motion } from "framer-motion";
import { Download } from 'lucide-react'
import Image from './assets/aboutimage.png'

const About = () => {
  return (
    <section id='about' 
      className="relative overflow-hidden before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:absolute after:top-[-530px]  after:w-[600px] after:aspect-square after:z-[-1] after:opacity-20 after:bg-blue-900 after:rounded-full after:blur-3xl after:left-[50%] after:translate-x-[-50%] text-white py-[100px]">
      <motion.h2 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 0.8, delay: 0.3}}        
        className="gradient-text bg-clip-text text-center text-transparent text-4xl font-semibold">
        About Us
      </motion.h2>

      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 0.8, delay: 1}}    
        className="grid grid-cols-2 lg:grid-cols-1 items-center gap-8 pl-6 lg:pl-0 mt-[50px]">
        <div className="flex flex-col items-start flex-1">
          <h4 className="bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent text-xl sm:text-lg font-medium pb-4"><Download size={30}/>A little about us :</h4>
          <h2 className="text-3xl md:text-2xl sm:text-xl leading-tight font-bold pb-4">Skylux Technologies</h2>

          <p className="text-lg leading-9 sm:leading-7 sm:text-sm">
            We are a group of creative developers and designers. 
            We have over 5 years of experience with a deep understanding of design principles,
            users expectations and the latest brands, we collaborate to craft visually stunning 
            and user-friendly solutions tailored to your unique needs to turn your visions into amazing digital realities.
          </p>

          <a href="#" className="px-7 py-3 my-6 sm:my-6 rounded-lg text-xl sm:text-lg flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-600 hover:bg-gradient-to-tl sm:mr-auto"><Download size={20}/>Download resume</a>
        </div>

        <div className="relative flex-1 before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:w-[250px] sm:before:opacity-5 before:aspect-square before:bg-blue-400 before:blur-3xl before:opacity-20 before:z-[-1]">
          <img src={Image} alt="" className="lg:w-[500px] mx-auto"/>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
