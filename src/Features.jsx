import React from "react";
import { Clock, BadgeCheck, MessagesSquare, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import FastandEfficient from "./assets/robotnobg.png";
import Quality from "./assets/quality.svg";
import Support from "./assets/support.svg";
import Busines from "./assets/business.svg";

const Features = () => {
  return (
    <section className="relative overflow-hidden before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:absolute after:top-[-530px]  after:w-[600px] after:aspect-square after:z-[-1] after:opacity-20 after:bg-blue-900 after:rounded-full after:blur-3xl after:left-[50%] after:translate-x-[-50%] text-white py-[100px]">
      <h3 className="text-center text-2xl md:text-xl sm:text-lg">Features</h3>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="gradient-text bg-clip-text text-center text-transparent text-4xl sm:text-2xl mt-3 font-semibold"
      >
        Why Skylux Technologies?
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center items-start pl-8 md:pl-0"
        >
          <p className="bg-emerald-500/30 text-emerald-400 p-3 rounded-full">
            <Clock size={30} />
          </p>
          <h3 className="my-6 text-2xl font-semibold text-emerald-600">
            Fast and Efficient.
          </h3>
          <p className="text-lg lg:text-base sm:text-sm sm:leading-7 font-light">
            Each project comes with a meticulously crafted plan and schedule,
            ensuring we maintain transparency and stay on course. Our commitment
            to timeliness empowers you to align with your business objectives.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid place-items-center">
          <img
            src={FastandEfficient}
            alt="image"
            className="w-[26rem] aspect-square object-cover"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-8">
        <motion.div 
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid place-items-center md:order-last">
          <img
            src={Quality}
            alt="image"
            className="w-[18rem] aspect-square object-contain"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center items-start pl-8 md:pl-0 md:order-first">
          <p className="bg-cyan-500/30 text-cyan-400 p-3 rounded-full">
            <BadgeCheck size={30} />
          </p>
          <h3 className="my-6 text-2xl font-semibold text-cyan-600">
            Quality Assurance.
          </h3>
          <p className="text-lg lg:text-base sm:text-sm sm:leading-7 font-light">
            We are unwavering in our commitment to excellence, consistently
            delivering solutions in a professional and practical manner that
            ensures the highest quality.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-8">
        <motion.div 
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center items-start pl-8 md:pl-0">
          <p className="bg-pink-500/30 text-pink-400 p-3 rounded-full">
            <MessagesSquare size={30} />
          </p>
          <h3 className="my-6 text-2xl font-semibold text-pink-600">
            Quick Support and Response.
          </h3>
          <p className="text-lg lg:text-base sm:text-sm sm:leading-7 font-light">
            At the core of our philosophy lies the belief that an agile
            organization serves clients best. Exceptional communication is the
            cornerstone of our business, and we treat every customer with a
            personalized touch. We prioritize responsiveness and clarity,
            ensuring our clients receive information without any confusion.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid place-items-center">
          <img
            src={Support}
            alt="image"
            className="w-[20rem] aspect-square object-contain"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-12">
        <motion.div 
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid place-items-center">
          <img
            src={Busines}
            alt="image"
            className="w-[20rem] aspect-square object-contain md:order-last"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center items-start pl-8 md:pl-0 md:order-first">
          <p className="bg-indigo-500/30 text-indigo-400 p-3 rounded-full">
            <Lightbulb size={30} />
          </p>
          <h3 className="my-6 text-2xl font-semibold text-indigo-500">
            Business Solutions
          </h3>
          <p className="text-lg lg:text-base sm:text-sm sm:leading-7 font-light">
            We are unwavering in our commitment to excellence, consistently
            delivering solutions in a professional and practical manner that
            ensures the highest quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
