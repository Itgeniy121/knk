"use client"
import React from 'react';
import './AboutUs.scss'
import { motion } from 'framer-motion';

const AboutUs = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.25}
    })
  }
  return (
    <section className='mb-40 container flex sm:flex-row flex-col sm:gap-0 gap-10 max-s:justify-center max-s:items-center'>
      <div className='flex-[50%] flex items-center justify-center relative'>
        <h2 className='about__outlined-text '>
          <span className='sm:block hidden'>
            Кто мы?
          <br/>
          Что
          <br/>
           дела-
          <br/>
          ем?
          </span>
          <span className='sm:hidden block text-center'>
            Кто мы?
            <br/>
            Что делаем?
          </span>
        </h2>
        <h2 className='sm:block hidden xl:text-[80px] lg:text-[50px] text-[40px] mt-[-8px] font-extrabold absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>О НАС:</h2>
      </div>
      <motion.ul initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} className='flex-[50%] flex flex-col items-end justify-center lg:text-[24px] sm:text-[20px] text-[16px]  gap-6'>
        <motion.li custom={1} variants={textAnimation} className='max-w-[600px]'>- <span className='font-extrabold'>knk web</span> - опытная команда разработчиков, которая специализируется на создании и продвижении сайтов.</motion.li>
        <motion.li custom={2} variants={textAnimation} className='max-w-[600px]'>- Мы помогаем бизнесу клиентов расти и развиваться.</motion.li>
        <motion.li custom={3} variants={textAnimation} className='max-w-[600px]'>- В работе используем самые современные инструменты, позволяющие выполнять работу быстро и качественно.</motion.li>
        <motion.li custom={4} variants={textAnimation} className='max-w-[600px]'> - Мы ценим надежные и долгосрочные отношения.</motion.li>
      </motion.ul>
    </section>
  );
};

export default AboutUs;
