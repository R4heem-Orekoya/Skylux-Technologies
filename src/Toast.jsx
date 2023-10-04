import React, { useEffect, useState } from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";

const Toast = ({isToastActive, setIsToastActive, error}) => {
    const [width, setWidth] = useState(100);

    useEffect(() => {
      let remove = setTimeout(() => {
        setIsToastActive(false)
      }, 5000)

      return () => {
        clearInterval(remove);
      };
    }, []);

  const closeToast = () => {
    setIsToastActive(false)
  } 


  return (
    <div
      className={`overflow-hidden sticky z-50 top-[90px] right-4 rounded-lg px-6 sm:px-3 max-w-[90%] min-w-[250px] py-6 bg-blue-900/30 backdrop-blur-2xl ring-[1px] ring-white/50`}
    >
      <button onClick={closeToast} className="absolute top-3 right-3">
        <X size={15} className="text-white" />
      </button>
      <p className="flex items-center gap-3 text-white text-lg sm:text-xs">
        {error ? <XCircle size={25} className='text-red-500'/> : <CheckCircle2 size={25} className="text-green-600" />} 
        {error ? 'An error occured 😔': 'Your message was sent successfully! 👍'}
        
      </p>
      <div className={`toast absolute left-0 bottom-0 w-full h-[5px] ${error ? 'bg-red-500': 'bg-green-600'}`}></div>
    </div>
  );
};

export default Toast;
