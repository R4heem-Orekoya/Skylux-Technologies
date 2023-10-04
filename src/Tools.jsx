import React from 'react'
import { motion } from 'framer-motion'
import Html from './assets/html.svg'
import Css from './assets/css.svg'
import Js from './assets/javascript.svg'
import react from './assets/react.svg'
import canva from './assets/canva.svg'
import tailwind from './assets/tailwind-css.svg'
import framermotion from './assets/framermotion.svg'
import figma from './assets/figma.svg'
import photoshop from './assets/photoshop.svg'
import illustrator from './assets/illustrator2.svg'


const Tools = () => {
  return (
    <div className='py-[50px] pb-[100px]'>
        <motion.h2 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}} 
          transition={{duration: 0.8, delay: 0.5}}
          className='gradient-text text-center text-transparent bg-clip-text text-3xl md:text-2xl font-semibold'>Technologies we use
        </motion.h2>
        <div className='flex flex-wrap justify-center max-w-[1000px] gap-6 mt-12 mx-auto'>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.1}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-orange-500 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="h-[50px] aspect-square object-cover" src={Html} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.2}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-blue-300 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[50px] aspect-square object-cover" src={Css} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.3}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-yellow-500 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[50px] aspect-square object-cover" src={Js} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.4}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-blue-200 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[60px] aspect-square object-cover" src={tailwind} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.5}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-blue-300 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[50px] aspect-square object-contain" src={react} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.6}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-pink-400 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[50px] aspect-square object-contain" src={framermotion} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.7}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-purple-500 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[50px] aspect-square object-contain" src={figma} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.8}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-cyan-500 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[50px] aspect-square object-contain" src={photoshop} alt="" />
            </motion.div>
            {/* <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.9}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-orange-500 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[55px] aspect-square object-cover" src={illustrator} alt="" />
            </motion.div> */}
            <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 1}} className='relative before:absolute before:top-[-1px] before:w-[80%] before:h-[1px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-cyan-400 before:to-transparent grid place-items-center p-4 min-w-[120px] aspect-square ring-1 ring-white/30 rounded-lg'>
                <img className="w-[55px] aspect-square object-cover" src={canva} alt="" />
            </motion.div>
        </div>
    </div>
  )
}

export default Tools
