import React from 'react';
import cl from './OurServices.module.scss'
import {AiOutlineLaptop} from "react-icons/ai";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className='mb-40 container flex flex-col items-center'>
      <div className='flex items-center gap-20 max-med:gap-10 max-ssml:gap-4 max-ssml:mb-[20px] max-xsml:gap-[25px]'>
        <span className={cl.spectr}>СПЕКТР</span>
        <h2 className='text-[160px] font-semibold flex-[50%] max-s:text-[120px] max-med:text-[90px] max-xsml:text-[70px] max-ssml:text-[45px]'>УСЛУГ:</h2>
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
          <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end max-med:text-[15px]'>
            <span>Подробнее</span>
          </Link>
        </div>
        <div className='w-[49%] flex flex-col justify-between max-sml:w-full'>
          <div className='border-2 gap-4 border-white rounded-[40px] flex flex-col p-8 mb-[5px] max-sml:w-full max-sml:mb-[35px]'>
            <p className='text-[40px] font-semibold max-l:text-[33px] max-med:text-[27px]'>Frontend-разработка</p>
            <ul className='flex text-[26px] flex-col max-med:text-[18px] max-ssml:text-[14px]'>
              <li>Верстка</li>
              <li>Анимации</li>
              <li>Интерфейс</li>
            </ul>
            <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end max-med:text-[15px]'>
              <span>Подробнее</span>
            </Link>
          </div>
          <div className='border-2 gap-4 border-white rounded-[40px] flex flex-col p-8 max-sml:w-full'>
            <p className='text-[40px] font-semibold max-l:text-[30px] max-med:text-[27px]'>Backend-разработка</p>
            <ul className='flex text-[26px] flex-col max-med:text-[18px] max-ssml:text-[14px]'>
              <li>Базы данных</li>
              <li>Сервер</li>
              <li>Запросы</li>
            </ul>
            <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end max-med:text-[15px]'>
              <span>Подробнее</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full border-2 mb-10 border-white rounded-[40px] p-10 text-[40px] font-semibold flex flex-col max-ssml:text-[28px]'>
        Разработка UX/UI-дизайна
        <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end max-med:text-[15px]'>
          <span>Подробнее</span>
        </Link>
      </div>
      <div className='w-full border-2 border-white rounded-[40px] p-10 text-[40px] font-semibold flex flex-col max-ssml:text-[28px]'>
        Техническая поддержка сайта
        <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end max-med:text-[15px]'>
          <span>Подробнее</span>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
