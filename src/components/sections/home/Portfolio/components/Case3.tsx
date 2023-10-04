import React from "react";
import StackPanel from "@/components/layout/StackPanel/StackPanel";
import anescor from "../../../../../../assets/imgs/anescor.png";
import Image from "next/image";
import cl from "../Portfolio.module.scss";
const Case3 = () => {
  return (
    <div className='flex flex-row justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Image src={anescor} alt='bestOffer' className='w-full' />
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px] max-ipad:pb-[0px]'>
        <div className='flex flex-col'>
          <span className={cl.projectTitle}>Anescor</span>
          <span className='mt-[20px] max-sml:text-[13px] max-sml:mt-[5px]'>
          Сайт представляет собой интернет-магазин по покупке комплектующих для производства и установки светопрозрачных конструкций.
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>Задача</span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
          Создание удобного современного сайта для продажи комплектующих для окон. Реализация CMS для простой генерации и изменения контента на сайте, добавление онлайн-оплаты и личного кабинета клиента.
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>Сроки</span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
          Ведется разработка с 01.10.2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Case3;
