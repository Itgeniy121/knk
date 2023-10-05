"use client"
import React from "react";
import ItCompas from "../../../../../../assets/imgs/ItCompas.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import cl from "../Portfolio.module.scss";
const Case2 = () => {
  return (
    <div className='flex flex-row-reverse justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Image src={ItCompas} alt='bestOffer' className='w-full' />
        </Tilt>
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px]'>
        <div className='flex flex-col mr-[50px]'>
          <span className={cl.projectTitle}>ИТ-КОМПАС</span>
          <span className='mt-[20px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Функциональный сервис для потенциальных и действующих IT-компаний.
            Сайт позволяет рассказать о своей компании, о ее преимущиствах,
            показать собственные идеи при помощи удобного и простого интерфейса.
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>
            Задача
          </span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Создать сервис, позволяющий инвесторам искать перспективные
            компании, а предпринемателям, в свою очередь, заявить о своем
            продукте Реализация обширной базы данных, удобного личного кабинета,
            возможность простого поиска по компаниям. Создание бота и CMS
            системы.
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>
            Сроки
          </span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Ведется разработка с 18.09.2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Case2;
