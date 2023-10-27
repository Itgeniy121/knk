"use client";
import { motion } from "framer-motion";
import cl from "./Contact.module.scss";
import React from "react";
import "@/components/layout/ModalWindow/ModalWindow.scss";
import ModalWindow from "@/components/layout/ModalWindow/ModalWindow";
const Contact = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.8}
    }),
  };
  const openModal = () => {
    const modal = document.getElementById("modal");
    modal?.classList.add("active");
  };
  return (
    <div className='container pt-10 flex flex-col justify-center items-center mt-[100px] mb-[50px] relative'>
      <ModalWindow />
      <h2 className={cl.title}>
        <span className={cl.main}>contact with us</span>
        <span className='absolute top-[-50px] left-[140px] max-l:text-[80px] max-l:left-[100px] max-ipad:text-[65px] max-ipad:top-[-35px] max-ipad:left-[100px] max-mm:text-[40px] max-mm:top-[-15px] max-sml:left-[60px] max-xsml:text-[27px] max-ssml:left-[30px]'>
          связь с нами
        </span>
      </h2>
      <div className='flex flex-row-reverse justify-between items-center w-[70%] h-[200px] max-xsml:flex-col-reverse max-xsml:h-[140px] max-xsml:w-full'>
        <a target="_blank" href="https://t.me/idntnow" className=' flex justify-center items-center border-[2px] rounded-[70px] bg-none w-[450px] h-[100px] max-l:w-[320px] max-s:w-[270px] max-med:w-[180px] max-med:h-[50px] max-xsml:w-[280px] hover:shadow-md hover:bg-white hover:text-[#191919] duration-300'>
          <span className={cl.buttons}>Написать нам</span>
        </a>
        <button
          onClick={openModal}
          className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px] max-l:w-[320px] max-s:w-[270px] max-med:w-[180px] max-med:h-[50px] max-xsml:w-[280px] hover:shadow-md bg-white hover:bg-[#191919] hover:text-white text-[#191919]  duration-300'
        >
          <span id="contacts" className={cl.buttons}>Обсудить проект</span>
        </button>
      </div>
      <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} className='flex flex-row justify-between items-center w-[80%] h-[200px] max-xsml:w-[95%]'>
        <motion.a
        target="_blank"
          href='https://t.me/knkweb'
          custom={1} variants={textAnimation}
          className='flex flex-col w-[18%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'
        >
          <span className={cl.socials}>Telegram</span>
          <span className={cl.link}>@idntnow</span>
        </motion.a>
        <motion.a
        target="_blank"
          href='https://www.youtube.com/@knkwebstudio'
          custom={2} variants={textAnimation}
          className='flex flex-col w-[18%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'
        >
          <span className={cl.socials}>YouTube</span>
          <span className={cl.link}>knkweb.</span>
        </motion.a>
        <motion.a
        target="_blank"
          href='mailto:kantorin.ilya@yandex.ru'
          custom={3} variants={textAnimation}
          className='flex flex-col w-[18%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'
        >
          <span className={cl.socials}>Email</span>
          <span className={cl.link}>kantorin.ilya@yandex.ru</span>
        </motion.a>
        <motion.a
        target="_blank"
        custom={4} variants={textAnimation}
          href='tel:+79144054140'
          className='flex flex-col w-[18%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'
        >
          <span className={cl.socials}>Phone</span>
          <span className={cl.link}>+79144054140</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
