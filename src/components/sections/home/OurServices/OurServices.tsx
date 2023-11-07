"use client";
import React, { useState } from "react";
import cl from "./OurServices.module.scss";
import Case1 from "./components/Case1";
import Case2 from "./components/Case2";
import Case3 from "./components/Case3";
import Case4 from "./components/Case4";
import Case5 from "./components/Case5";

import { motion } from "framer-motion";
const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
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
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      className='mb-40 container flex flex-col items-center max-xsml:mb-[100px]'
    >
      <div className='flex items-center gap-20 max-med:gap-10 max-ssml:gap-4 max-ssml:mb-[20px] max-xsml:gap-[25px] mb-[20px]'>
        <motion.span custom={1} variants={textAnimation} className={cl.spectr}>
          СПЕКТР
        </motion.span>
        <motion.h2
          custom={1}
          variants={textAnimation}
          className='text-[160px] font-semibold flex-[50%] max-s:text-[120px] max-med:text-[90px] max-xsml:text-[70px] max-ssml:text-[45px]'
        >
          УСЛУГ:
        </motion.h2>
      </div>
      <div className='w-full justify-center items-center mt-[40px] max-xsml:mt-[10px]'>
        <Case1 />
        <Case2 />
        <Case3 />
        <Case4 />
        <Case5 />
      </div>
      <div className='w-full flex items-start justify-start mt-[40px] max-xsml:mt-[20px]'></div>
    </motion.div>
  );
};

export default OurServices;
