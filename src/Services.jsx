import React from "react";
import { motion } from "framer-motion";
import { SquareCode, Figma, PenTool } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden px-2 before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:absolute after:top-[-520px] after:md:top-[-590px] after:w-[600px] after:aspect-square after:z-[-1] after:opacity-20 after:bg-blue-900 after:rounded-full after:blur-3xl after:left-[50%] after:translate-x-[-50%] text-white py-[100px]">
      <motion.h2 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 0.8, delay: 0.3}}    
      className="gradient-text bg-clip-text text-center text-transparent text-4xl font-bold">
        Our Services
      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-2 md:gap-16 sm:grid-cols-1 gap-6 mt-[100px]">
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} className="relative ring-1 ring-white/20 hover:ring-blue-500/70 duration-200 px-6 py-12 rounded-md group text-center">
          <div className="flex items-center justify-center absolute top-[-30px] left-[50%] translate-x-[-50%] rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 w-[60px] aspect-square group-hover:translate-y-[-10%] duration-300">
            <SquareCode />
          </div>
          <h3 className="text-lg font-medium mt-4">Web Development</h3>
          <p className="mt-8 md:text-sm text-white/70 md:leading-6 font-light">
            Crafting Visually Engaging Experiences. We specialize in translating your 
            ideas into captivating web interfaces. Our experts ensure seamless user 
            interactions and stunning designs, making your online presence stand out. <span className="text-blue-500 font-semibold">#Frontend development</span> 
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}} className="relative ring-1 ring-white/20 hover:ring-cyan-500/80 duration-200 px-6 py-8 rounded-md group text-center">
          <div className="flex items-center justify-center absolute top-[-30px] left-[50%] translate-x-[-50%] rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 w-[60px] aspect-square group-hover:translate-y-[-10%] duration-300">
            <Figma />
          </div>
          <h3 className="text-lg font-medium mt-4">Web Design</h3>
          <p className="mt-8 md:text-sm text-white/70 md:leading-6 font-light">
            Your Digital Gateway. We sculpt web experiences that captivate and convert. 
            With a keen eye for aesthetics and functionality, we design websites that 
            showcase your unique identity and drive results. <span className="text-cyan-500 font-semibold">#UI design #Graphics design</span>  
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.6}} className="relative ring-1 ring-white/20 hover:ring-indigo-500/70 duration-200 px-6 py-8 rounded-md group text-center">
          <div className="flex items-center justify-center absolute top-[-30px] left-[50%] translate-x-[-50%] rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 w-[60px] aspect-square group-hover:translate-y-[-10%] duration-300">
            <PenTool />
          </div>
          <h3 className="text-lg font-medium mt-4">Logo Design & Branding</h3>
          <p className="mt-8 md:text-sm md:leading-5">
            Your Signature Story. We craft iconic logos and comprehensive branding strategies 
            that resonate with your audience. Transform your business identity into a 
            compelling narrative that leaves a lasting impression. <span className="text-indigo-500 font-semibold">#Online ads # Brand identity #Social media management</span>  
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
