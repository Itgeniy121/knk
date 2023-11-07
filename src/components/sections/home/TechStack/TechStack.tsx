"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import FrontendStack from "./components/FrontendStack";
import BackendStack from "./components/BackendStack";
import DesignStack from "./components/DesignStack";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TechStack.scss";
const TechStack = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.8 },
    }),
  };
  const swiper = useSwiper();
  return (
    <div className='container pt-10 max-l:pt-[0px]'>
      <motion.h2
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='title'
      >
        <motion.span custom={1} variants={textAnimation}>
          Технологии&nbsp;
        </motion.span>
        <motion.span custom={1} variants={textAnimation} className='tech'>
          и инструменты
        </motion.span>
      </motion.h2>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        allowTouchMove={false}
        modules={[Navigation, Pagination]}
        className='h-[740px] max-s:h-[570px] max-sml:h-[450px]'
      >
        <SwiperSlide className='flex flex-col items-center justify-center w-full px-[50px]'>
          <h2 className='flex items-center justify-center text-[30px] mb-[40px]'>
            frontend
          </h2>
          <FrontendStack />
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center justify-center w-full px-[50px]'>
          <h2 className='flex items-center justify-center text-[30px] mb-[40px]'>
            backend
          </h2>
          <BackendStack />
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center justify-center w-full px-[50px]'>
          <h2 className='flex items-center justify-center text-[30px] mb-[40px]'>
            design
          </h2>
          <DesignStack />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechStack;
