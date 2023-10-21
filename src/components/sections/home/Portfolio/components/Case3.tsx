"use client"
import { motion } from "framer-motion";
import React from "react";
import anescor from "../../../../../../assets/imgs/anescor.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import cl from "../Portfolio.module.scss";
const Case3 = () => {
  const textAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.3}
    })
  }
  return (
    <div className='flex flex-row justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Image src={anescor} alt='bestOffer' className='w-full' />
        </Tilt>
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px] max-ipad:pb-[0px]'>
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} className='flex flex-col'>
          <motion.span custom={1} variants={textAnimation} className={cl.projectTitle}>Anescor</motion.span>
          <motion.span custom={1} variants={textAnimation} className='mt-[20px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Сайт представляет собой интернет-магазин по покупке комплектующих
            для производства и установки светопрозрачных конструкций.
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>
            Задача
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Создание удобного современного сайта для продажи комплектующих для
            окон. Реализация CMS для простой генерации и изменения контента на
            сайте, добавление онлайн-оплаты и личного кабинета клиента.
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>
            Сроки
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Ведется разработка с 01.10.2023.
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Case3;
