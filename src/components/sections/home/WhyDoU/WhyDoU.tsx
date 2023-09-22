'use client'

import React from 'react';
import {motion} from "framer-motion";
import {TfiWorld} from "react-icons/tfi";
import {FaRegHandshake} from "react-icons/fa";
import {RiTimerFlashLine} from "react-icons/ri";
import {IoAnalyticsOutline} from "react-icons/io5";
import './WhyDoU.scss'


const WhyDoU = () => {
  return (
    <div className="container pt-10">
      <motion.section
        className='why-you-need my-20 flex-center flex items-center flex-col w-full'
        initial='hidden'
        whileInView='active'
      >
        <motion.h3 className='relative max-w-max flex-col mt-5 flex items-center justify-center' variants={PreviewAnimation} initial='hidden'
                   whileInView='active' viewport={{once: true, amount: 0.2}}>
          <span className='lg:absolute xl:top-[-80px] top-[-40px] outlined-text xl:left-[-375px] left-[-225px]'>ЗАЧЕМ</span>
          <span className='lg:text-[48px] sm:text-[38px] text-[30px] font-extrabold'>вашему бизнесу</span>
          <span className='lg:absolute xl:top-[-1px] top-[20px] outlined-text xl:right-[-285px] right-[-185px]'>САЙТ</span>
          <div className='absolute lg:block hidden top-[-130px] xl:right-[-400px] right-[-200px] outlined-text'>
            ?
          </div>
        </motion.h3>
        <motion.div initial='hidden'
                    whileInView='active'
                    viewport={{once: true, amount: 0.5}}
                    className="why-wrapper flex-center w-full lg:my-20 my-10 relative z-10 "
        >
          <motion.div
            // className=' bg-[#171717] rounded-2xl p-4 flex-center flex-col why-card relative max-w-[500px]'
            // className='block rounded-md border-2 border-gray-200 bg-gray-0 p-6 pt-5 shadow-md shadow-black/5  max-w-[500px]'
            className='sm:items-start sm:justify-start justify-center items-center flex    w-full relative z-10'
            variants={oddAnimation}
            custom={5}
          >
            <TfiWorld size='150px'
                      className='lg:block hidden mr-10 absolute top-[-10px] 2xl:left-[-100px] left-0 text-[#353535] z-[-1]'/>
            <div className='flex-center flex-col'>
              <h3 className='sm:text-[40px] text-[24px] font-semibold flex-center'>
                1. Доступность для клиентов
              </h3>
              <p className='mt-4 max-w-[550px] text-justify'>Одним из главных ключей к успеху вашего
                бизнеса
                является его доступность! И только благодаря личному сайту ваши клиенты найдут вас
                из
                любой точки мира.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial='hidden'
                    whileInView='active'
                    viewport={{once: true, amount: 0.5}}
                    className="why-wrapper flex-center w-full my-8   relative "
        >
          <motion.div
            className='sm:items-end sm:justify-end justify-center items-center flex    w-full relative z-10'
            variants={evenAnimation}
            custom={3}
          >
            <FaRegHandshake size='150px'
                            className='lg:block hidden mr-10 absolute top-[-20px] right-[400px] text-[#353535] z-[-1]'/>
            <div className='flex-center flex-col'>
              <h3 className='sm:text-[40px] text-[24px] font-semibold flex-end'>
                2. Увеличение доверия
              </h3>
              <p className='mt-4 lg:max-w-[420px] max-w-[550px] text-justify'>
                Наличие сайта улучшает имидж вашей компании на фоне конкурентов и повышает доверие
                клиентов к вам.
              </p>

            </div>
          </motion.div>
        </motion.div>
        <motion.div initial='hidden'
                    whileInView='active'
                    viewport={{once: true, amount: 0.5}}
                    className="why-wrapper flex-center w-full my-8 relative z-10 "
        >
          <motion.div
            // className=' bg-[#171717] rounded-2xl p-4 flex-center flex-col why-card relative max-w-[500px]'
            // className='block rounded-md border-2 border-gray-200 bg-gray-0 p-6 pt-5 shadow-md shadow-black/5  max-w-[500px]'
            className='sm:items-start sm:justify-start flex justify-center items-center   w-full items-center relative z-10'
            variants={oddAnimation}
            custom={5}
          >
            <RiTimerFlashLine size='150px'
                              className='lg:block hidden mr-10 absolute top-[-10px] 2xl:left-[-100px] left-0 text-[#353535] z-[-1]'/>
            <div className='flex-center flex-col'>
              <h3 className='sm:text-[40px] text-[24px] font-semibold flex-center'>
                3. Экономия времени и средств
              </h3>
              <p className='mt-4 max-w-[550px] text-justify'>Сайт может заменить традиционные методы
                рекламы, такие как буклеты, рекламные стенды, что позволяет сэкономить время и
                деньги.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial='hidden'
                    whileInView='active'
                    viewport={{once: true, amount: 0.5}}
                    className="why-wrapper flex-center w-full my-8 relative "
        >
          <motion.div
            className='sm:items-end sm:justify-end flex items-center justify-center w-full relative z-10'
            variants={evenAnimation}
            custom={3}
          >
            <IoAnalyticsOutline size='150px'
                                className='lg:block hidden mr-10 absolute top-[-20px] right-[400px] text-[#353535] z-[-1]'/>
            <div className='flex-center flex-col'>
              <h3 className='sm:text-[40px] text-[24px] font-semibold flex-end'>
                4. Удобство управления.
              </h3>
              <p className='mt-4 lg:max-w-[420px] max-w-[550px] text-justify'>
                Сайт позволяет получать данные о посещаемости, поведении пользователей на сайте, что
                помогает управлять бизнесом и принимать обоснованные решения.
              </p>

            </div>
          </motion.div>
        </motion.div>


      </motion.section>
    </div>
  );
};

export default WhyDoU;

const PreviewAnimation = {
  hidden: {
    opacity: 0,
    y: 220
  },
  active: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 2,
      delay: 3 * 0.2
    }
  }
}

const oddAnimation = {
  hidden: {
    opacity: 0,
    x: -500
  },
  active: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
      delay: custom * 0.2
    }
  })
}

const evenAnimation = {
  hidden: {
    opacity: 0,
    x: 500
  },
  active: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
      delay: custom * 0.2
    }
  })
}
