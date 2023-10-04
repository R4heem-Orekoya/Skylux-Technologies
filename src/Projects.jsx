import React from "react";
import { motion } from "framer-motion";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
import Project4 from "./assets/project4.jpg";
import Project5 from "./assets/project5.jpg";
import Project6 from "./assets/project6.jpg";

const Projects = () => {
  return (
    <section id="project" className="relative overflow-hidden px-2 before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:absolute after:top-[-500px] after:md:top-[-590px] after:w-[600px] after:aspect-square after:z-[-1] after:opacity-20 after:bg-blue-900 after:rounded-full after:blur-3xl after:left-[50%] after:translate-x-[-50%] text-white py-[100px]">
      <motion.h2 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 0.8, delay: 0.3}}
        className="gradient-text bg-clip-text text-center text-transparent text-4xl font-bold mb-12">
        Our Projects
      </motion.h2>

      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8">
        <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.1}} className="ring-1 ring-blue-500 rounded-lg overflow-hidden ">
          <a href="https://r4heem-orekoya.github.io/Arch-Move-Website/" target="_blank">
            <div className="h-[250px] w-full">
              <img
                src={Project1}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="p-8 lg:p-6 md:p-4 sm:p-8">
            <h3 className="text-purple-500 text-xl font-semibold">
              Arch Move Website
            </h3>
            <p className="text-base text-white/70 font-normal mt-4 mb-8 md:textsm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae nostrum sint repellat odit minus magni itaque quas
              libero ex sunt?
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 text-sm bg-orange-500 rounded-md">#HTML</span>
              <span className="px-2 py-1 text-sm bg-blue-500 rounded-md">#CSS</span>
              <span className="px-2 py-1 text-sm bg-yellow-400 rounded-md">
                #Javascript
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} className="ring-1 ring-purple-500 rounded-lg overflow-hidden hover:shadow-2xl shadow-slate-100">
          <a href="https://google.com" target="_blank">
            <div className="h-[250px] w-full">
              <img
                src={Project2}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="p-8 lg:p-6 md:p-4 sm:p-8">
            <h3 className="text-green-600 text-xl font-semibold">
              Workhu Website
            </h3>
            <p className="text-base text-white/70 font-normal mt-4 mb-8 md:textsm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae nostrum sint repellat odit minus magni itaque quas
              libero ex sunt?
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 text-sm bg-blue-600 rounded-md">#React</span>
              <span className="px-2 py-1 text-sm bg-blue-400 rounded-md">
                #Tailwind
              </span>
              <span className="px-2 py-1 text-sm bg-pink-500 rounded-md">
                #Framer Motion
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}} className="ring-1 ring-yellow-500 rounded-lg overflow-hidden hover:shadow-2xl shadow-slate-100">
          <a href="https://google.com" target="_blank">
            <div className="h-[250px] w-full">
              <img
                src={Project3}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="p-8 lg:p-6 md:p-4 sm:p-8">
            <h3 className="text-emerald-600 text-xl font-semibold">
              Workhu Website
            </h3>
            <p className="text-base text-white/70 font-normal mt-4 mb-8 md:textsm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae nostrum sint repellat odit minus magni itaque quas
              libero ex sunt?
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 text-sm bg-purple-600 rounded-md">#Figma</span>
              <span className="px-2 py-1 text-sm bg-blue-600 rounded-md">#React</span>
              <span className="px-2 py-1 text-sm bg-blue-400 rounded-md">
                #Tailwind
              </span>
              <span className="px-2 py-1 text-sm bg-pink-500 rounded-md">
                #Framer Motion
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}} className="ring-1 ring-pink-500 rounded-lg overflow-hidden hover:shadow-2xl shadow-slate-100">
          <a href="https://google.com" target="_blank">
            <div className="h-[250px] w-full">
              <img
                src={Project4}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="p-8 lg:p-6 md:p-4 sm:p-8">
            <h3 className="text-orange-700 text-xl font-semibold">
              Workhu Website
            </h3>
            <p className="text-base text-white/70 font-normal mt-4 mb-8 md:textsm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae nostrum sint repellat odit minus magni itaque quas
              libero ex sunt?
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 text-sm bg-purple-600 rounded-md">#Figma</span>
              <span className="px-2 py-1 text-sm bg-blue-600 rounded-md">#React</span>
              <span className="px-2 py-1 text-sm bg-blue-400 rounded-md">
                #Tailwind
              </span>
              <span className="px-2 py-1 text-sm bg-pink-500 rounded-md">
                #Framer Motion
              </span>
              <span className="px-2 py-1 text-sm bg-cyan-500 rounded-md">#Canva</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}} className="ring-1 ring-green-500 rounded-lg overflow-hidden hover:shadow-2xl shadow-slate-100">
          <a href="https://google.com" target="_blank">
            <div className="h-[250px] w-full">
              <img
                src={Project5}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="p-8 lg:p-6 md:p-4 sm:p-8">
            <h3 className="text-pink-600 text-xl font-semibold">
              Fitness Website
            </h3>
            <p className="text-base text-white/70 font-normal mt-4 mb-8 md:textsm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae nostrum sint repellat odit minus magni itaque quas
              libero ex sunt?
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 text-sm bg-purple-600 rounded-md">#Figma</span>
              <span className="px-2 py-1 text-sm bg-orange-500 rounded-md">#HTML</span>
              <span className="px-2 py-1 text-sm bg-blue-400 rounded-md">
                #Tailwind
              </span>
              <span className="px-2 py-1 text-sm bg-yellow-400 rounded-md">
                #Javascript
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.6}} className="ring-1 ring-orange-500 rounded-lg overflow-hidden hover:shadow-2xl shadow-slate-100">
          <a href="https://google.com" target="_blank">
            <div className="h-[250px] w-full">
              <img
                src={Project6}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="p-8 lg:p-6 md:p-4 sm:p-8">
            <h3 className="text-emerald-700 text-xl font-semibold">
              Workhu Website
            </h3>
            <p className="text-base text-white/70 font-normal mt-4 mb-8 md:textsm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae nostrum sint repellat odit minus magni itaque quas
              libero ex sunt?
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 text-sm bg-orange-500 rounded-md">#HTML</span>
              <span className="px-2 py-1 text-sm bg-blue-500 rounded-md">#CSS</span>
              <span className="px-2 py-1 text-sm bg-yellow-400 rounded-md">
                #Javascript
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
