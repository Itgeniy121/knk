"use client"
import { motion } from "framer-motion";
import React from "react";
import ItCompas from "../../../../../../assets/imgs/ItCompas.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import cl from "../Portfolio.module.scss";
const Case2 = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.3}
    })
  }
  return (
    <div className='flex flex-row-reverse justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Image src={ItCompas} alt='bestOffer' className='w-full' />
        </Tilt>
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px]'>
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} className='flex flex-col mr-[50px]'>
          <motion.span custom={1} variants={textAnimation} className={cl.projectTitle}>ИТ-КОМПАС</motion.span>
          <motion.span custom={1} variants={textAnimation} className='text-[15px] mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Функциональный сервис для потенциальных и действующих IT-компаний.
            Сайт позволяет рассказать о своей компании, о ее преимущиствах,
            показать собственные идеи при помощи удобного и простого интерфейса.
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className='mt-[10px] text-[30px] font-[700] max-sml:text-[23px]'>
            Задача
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className=' text-[15px] mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Создать сервис, позволяющий инвесторам искать перспективные
            компании, а предпринемателям, в свою очередь, заявить о своем
            продукте Реализация базы данных, личного кабинета,
            возможность простого поиска по компаниям.
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className='mt-[10px] text-[30px] font-[700] max-sml:text-[23px]'>
            Сроки
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className='text-[15px] mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Ведется разработка с 18.09.2023.
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Case2;
