import React from "react";
import { motion } from "framer-motion";
import { Star,UserCircle2 } from 'lucide-react';
import Image1  from './assets/gymguy.webp';
import Image2  from './assets/therapist.webp';
import Image3  from './assets/architect.webp';

import { Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden before:absolute before:w-full before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:absolute after:top-[-530px]  after:w-[600px] after:aspect-square after:z-[-1] after:opacity-20 after:bg-blue-900 after:rounded-full after:blur-3xl after:left-[50%] after:translate-x-[-50%] text-white py-[100px]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="gradient-text bg-clip-text text-center text-transparent text-3xl sm:text-2xl font-bold"
      >
        What our clients say about us
      </motion.h2>


      <Slider />
    </section>
  );
};



const Slider = () => {
    return(
        <Swiper
        className="relative mt-12 h-[350px] mx-auto pb-[45px] pt-[2px] px-[2px]"
        modules={[Pagination,Autoplay ]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{delay: 2000}}

        breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            780: {
              slidesPerView: 2,
            },
          }}
    
      >
        <SwiperSlide className="flex flex-col justify-between p-6 bg-[#0a0d17] ring-[1px] ring-white/10 hover:ring-white/30 rounded-lg">
            <p className="text-[12px] font-light leading-6">
                Our experience working with your team for our online store's 
                redesign was nothing short of amazing. The web development, 
                web design, and branding skills displayed by your team, especially 
                in creating our new logo, were outstanding. Thank you for helping us bloom online!
            </p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <p className="w-[50px] aspect-square rounded-full grid place-items-center bg-gray-700">
                        <UserCircle2 size={50} strokeWidth={1}/>
                    </p>
                    <div>
                        <h3 className="text-sm font-semibold">Zephyr Everhart</h3>
                        <h6 className="text-[10px] text-gray-500">Zephyr Everhart's Floral Boutique</h6>
                    </div>
                </div>

                <div className="flex gap-0">
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-between p-6 bg-[#0a0d17] ring-[1px] ring-white/10 hover:ring-white/30 rounded-lg">
            <p className="text-[11px] font-light leading-6">
                Working on my Personal website has been an absolute privilege.
                You guys are nothing short of remarkable. Your ability to communicate some concepts
                in a way that we could understand mae the entire process enjoyable and educational. 
                We felt like partners in the journey and you guys always had our best interest at heart. 
            </p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-[50px] aspect-square object-cover rounded-full" src={Image3} alt="image" />
                    <div>
                        <h3 className="text-base font-semibold">Samuel Trig</h3>
                        <h6 className="text-[10px] text-gray-500">CEO of Arch-Move</h6>
                    </div>
                </div>

                <div className="flex gap-0">
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-between p-6 bg-[#0a0d17] ring-[1px] ring-white/10 hover:ring-white/30 rounded-lg">
            <p className="text-[11px] font-light leading-6">
                Our wellness retreat owes much of its online success to your expertise in logo design and branding,
                The logo and branding you designed have helped establish our retreat as a trusted and authentic 
                wellness destination. We are grateful for the positive impact it has had on our retreat's image. Thank you! 
            </p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-[50px] aspect-square object-cover rounded-full" src={Image2} alt="image" />
                    <div>
                        <h3 className="text-sm font-semibold">Thorne Ravenshadow</h3>
                        <h6 className="text-[11px] text-gray-500">Thorne's Wellness Retreat</h6>
                    </div>
                </div>

                <div className="flex gap-0">
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-between p-6 bg-[#0a0d17] ring-[1px] ring-white/10 hover:ring-white/30 rounded-lg">
            <p className="text-[11px] font-light leading-5">
                I want to express my gratitude for the outstanding web development, design, and 
                branding work done for my Gym. The website you created is not 
                just functional but also visually stunning. It beautifully embodies the dedication 
                and commitment to fitness and bodybuilding principles that my gym upholds. 
                The positive feedback from our customers has been overwhelming. Thanks for bringing my 
                vision to life!
            </p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-[50px] aspect-square object-cover rounded-full" src={Image1} alt="image" />
                    <div>
                        <h3 className="text-sm font-semibold">Orion Thistledown's</h3>
                        <h6 className="text-[11px] text-gray-500">ThistleGym</h6>
                    </div>
                </div>

                <div className="flex gap-0">
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                    <Star fill="rgb(30 64 175)" strokeWidth={0} size={15}/>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    )
}

export default Testimonials;
