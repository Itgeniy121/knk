"use client"
import React from 'react';
import cl from './OurServices.module.scss'
import { motion } from 'framer-motion';
const OurServices = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.1}
    })
  }
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.15}} className='mb-40 container flex flex-col items-center'>
      <div className='flex items-center gap-20 max-med:gap-10 max-ssml:gap-4 max-ssml:mb-[20px] max-xsml:gap-[25px]'>
        <motion.span custom={3} variants={textAnimation} className={cl.spectr}>СПЕКТР</motion.span>
        <motion.h2 custom={3} variants={textAnimation} className='text-[160px] font-semibold flex-[50%] max-s:text-[120px] max-med:text-[90px] max-xsml:text-[70px] max-ssml:text-[45px]'>УСЛУГ:</motion.h2>
      </div>
      <div className='flex w-full justify-between mb-10 max-sml:flex-col'>
        <div className='flex flex-col w-[49%] self-start p-8 border-2 border-white rounded-[40px] relative z-10 max-med:h-full max-sml:w-full max-sml:mb-10'>
          <p className='text-[40px] font-semibold mb-80 max-l:text-[33px] max-mm:mb-[270px] max-med:text-[30px] max-sml:mb-[5px]'>Разработка сайтов</p>
          <ul className='flex flex-col text-[26px] relative z-10 max-med:text-[18px] max-ssml:text-[14px] '>
            <li>Онлайн-магазин</li>
            <li>Корпоративные сайты</li>
            <li>CRM/CMS системы</li>
            <li>Landing-page</li>
            <li>Веб-приложения</li>
          </ul>
        </div>
        <div className='w-[49%] flex flex-col justify-between max-sml:w-full'>
          <div className='border-2 gap-4 border-white rounded-[40px] flex flex-col p-8 mb-[5px] max-sml:w-full max-sml:mb-[35px]'>
            <p className='text-[40px] font-semibold max-l:text-[33px] max-med:text-[27px]'>Frontend-разработка</p>
            <ul className='flex text-[26px] flex-col max-med:text-[18px] max-ssml:text-[14px]'>
              <li>Верстка</li>
              <li>Анимации</li>
              <li>Интерфейс</li>
            </ul>
          </div>
          <div className='border-2 gap-4 border-white rounded-[40px] flex flex-col p-8 max-sml:w-full'>
            <p className='text-[40px] font-semibold max-l:text-[30px] max-med:text-[27px]'>Backend-разработка</p>
            <ul className='flex text-[26px] flex-col max-med:text-[18px] max-ssml:text-[14px]'>
              <li>Базы данных</li>
              <li>Сервер</li>
              <li>Запросы</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full border-2 mb-10 border-white rounded-[40px] p-10 text-[40px] font-semibold flex flex-col max-ssml:text-[28px]'>
        Разработка UX/UI-дизайна
      </div>
      <div className='w-full border-2 border-white rounded-[40px] p-10 text-[40px] font-semibold flex flex-col max-ssml:text-[28px]'>
        Техническая поддержка сайта
      </div>
    </motion.div>
  );
};

export default OurServices;
