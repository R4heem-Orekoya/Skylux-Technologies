import React, { useRef, useState }from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Loader2 } from "lucide-react";
import Toast from './Toast'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isToastActive, setIsToastActive] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef();
        
    const sendEmail = (e) => {
        e.preventDefault(); 
        setIsLoading(true)
    
        emailjs.sendForm('service_uriccnx', 'template_69ibhkh', form.current, 'iJhXsIH26CvmBU2wg')
        .then((result) => {
            console.log(result);
            setIsLoading(false)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')      
            setIsToastActive(true)
          }, (error) => {
            console.log(error);
            setIsLoading(false)
            setError(true)
            setIsToastActive(true)
        });
    };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-2 before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:absolute after:top-[-530px] after:w-[600px] after:aspect-square after:z-[-1] after:opacity-20 after:bg-blue-800 after:rounded-full after:blur-3xl after:left-[50%] after:translate-x-[-50%] text-white py-[100px]"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="gradient-text bg-clip-text text-center text-transparent text-4xl font-bold mb-12"
      >
        Get in touch with us
      </motion.h2>

      <div className="flex flex-wrap md:flex-col gap-20">
        <div className="flex flex-col items-center mx-auto justify-center flex-wrap gap-8">
            <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="min-w-[240px] ring-[1px] ring-white/20 flex flex-col items-center gap-4 p-6 rounded-lg relative px-2 before:absolute before:w-[80%] before:top-[-1px] before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-red-500 before:to-transparent before:z-10 after:absolute after:w-[80%] after:bottom-[-1px] after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-red-500 after:to-transparent after:z-10"
            >
            <Mail className="text-red-500" />
            <a href="mailto:skyluxtechnologies23@email.com" className="underline">
                skytech23@gmail.com
            </a>
            <h3 className="text-red-500">Email</h3>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="min-w-[240px] ring-[1px] ring-white/20 flex flex-col items-center gap-4 p-6 rounded-lg relative px-2 before:absolute before:w-[80%] before:top-[-1px] before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-pink-500 before:to-transparent before:z-10 after:absolute after:w-[80%] after:bottom-[-1px] after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-pink-500 after:to-transparent after:z-10"
            >
            <Instagram className="text-pink-500" />
            <a href="https://www.instagram.com/skytech_xx/" className="underline">
                skytech_xx
            </a>
            <h3 className="text-pink-500">Instagram</h3>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="min-w-[240px] ring-1 ring-white/20 flex flex-col items-center gap-4 p-6 rounded-lg relative px-2 before:absolute before:w-[80%] before:top-[-1px] before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:z-10 after:absolute after:w-[80%] after:bottom-[-1px] after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-blue-500 after:to-transparent after:z-10"
            >
            <Linkedin className="text-blue-500" />
            <a href="http://www.linkedin.com/in/skytech-skytech-technologies-765413292" className="underline">
              skytech23
            </a>
            <h3 className="text-blue-500">LinkedIn</h3>
            </motion.div>
        </div>

        <motion.div       
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }} 
            className="flex-1 max-w-[700px] mt-2 md:mt-6">
            <h3 className="text-xl font-semibold md:text-center">Send us a message</h3>
            <form ref={form} className="flex items-start flex-col mt-6 gap-6 max-w-full" onSubmit={sendEmail}>
                <input value={name} onChange={(e) => setName(e.target.value)} required type="text" name='from_name' placeholder="Name" className="w-full h-[50px] outline-none px-4 text-white bg-transparent ring-2 ring-white/50 focus:ring-blue-600 rounded-md"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="Email" placeholder="Email" className="w-full h-[50px] outline-none px-4 text-white bg-transparent ring-2 ring-white/50 focus:ring-blue-600 rounded-md"/>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} required type="text" name='subject' placeholder="Subject" className="w-full h-[50px] outline-none px-4 text-white bg-transparent ring-2 ring-white/50 focus:ring-blue-600 rounded-md"/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Message" name="message" className="w-full min-h-[100px] max-h-[200px] p-4 text-white outline-none rounded-md bg-transparent ring-2 ring-white/50 focus:ring-blue-600"></textarea>
                <button type="submit" className={`w-full grid place-items-center px-7 cursor-pointer py-4 bg-gradient-to-tr from-blue-500 to-indigo-800 hover:bg-gradient-to-tl mt-4 rounded-md ${isLoading && 'cursor-not-allowed opacity-50'}`}>
                    {isLoading && <Loader2 size={30} className="animate-spin"/>}
                    {!isLoading && <span className="text-xl">Send</span>} 
                </button>
            </form>
        </motion.div>
      </div>
      

      {isToastActive && <Toast isToastActive={isToastActive} setIsToastActive={setIsToastActive} error={error}/>}
    </section>
  );
};

export default Contact;
