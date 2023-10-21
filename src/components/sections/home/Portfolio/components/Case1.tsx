"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import bestOffer from "../../../../../../assets/imgs/bestofferstore.png";
import cl from "../Portfolio.module.scss";
const Case1 = () => {
  const textAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.3, duration: 0.5}
    })
  }
  return (
    <div className='flex flex-row justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Image
            src={bestOffer}   
            alt='bestOffer'
            className='w-full img_animat'
          />
        </Tilt>
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px]'>
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} className='flex flex-col'>
          <motion.span custom={1} variants={textAnimation} className={cl.projectTitle}>BestOffer Store</motion.span>
          <motion.span custom={1} variants={textAnimation} className=' text-[15px] mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            E-commerce проект BestOffer Store представляет собой современный
            интернет магазин одежды с возможностью обращения к владельцам для
            выкупа товара, реализации и обмена по системе Trade-IN Сайт заточен
            под визуальную эстетику зарубежных сайтов, с использованием
            минимализма и простоты взаимодействия для пользователя.
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className='mt-[10px] text-[30px] font-[700] max-sml:text-[23px]'>
            Задача
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className='text-[15px] mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Создание концепта и дизайна, создание бота для реализации удобства
            продаж, и добавление CMS для простоты изменения контента на сайте.
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className='mt-[10px] text-[30px] font-[700] max-sml:text-[23px]'>
            Сроки
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className='text-[15px] mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            На запуск продукта потребовалось 28 дней.
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Case1;
