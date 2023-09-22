import React from 'react';
import cl from './OurServices.module.scss'
import {AiOutlineLaptop} from "react-icons/ai";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className='mb-40 container flex flex-col items-center'>
      <div className='flex items-center gap-20'>
        <span className={cl.spectr}>СПЕКТР</span>
        <h2 className='text-[160px] font-semibold flex-[50%]'>УСЛУГ:</h2>
      </div>
      <div className='flex w-full justify-between mb-10'>
        <div className='flex flex-col w-[49%] self-start p-8 border-2 border-white rounded-[40px] relative z-10'>
          <p className='text-[40px] font-semibold mb-80'>Разработка сайтов</p>
          <ul className='flex flex-col text-[26px] relative z-10'>
            <li>Онлайн-магазин</li>
            <li>Корпоративные сайты</li>
            <li>CRM/CMS системы</li>
            <li>Landing-page</li>
            <li>Веб-приложения</li>
          </ul>
          <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end'>
            <span>Подробнее</span>
          </Link>
        </div>
        <div className='w-[49%] flex flex-col justify-between'>
          <div className='border-2 gap-4 border-white rounded-[40px] flex flex-col p-8'>
            <p className='text-[40px] font-semibold'>Frontend-разработка</p>
            <ul className='flex text-[26px] flex-col'>
              <li>Верстка</li>
              <li>Анимации</li>
              <li>Интерфейс</li>
            </ul>
            <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end'>
              <span>Подробнее</span>
            </Link>
          </div>
          <div className='border-2 gap-4 border-white rounded-[40px] flex flex-col p-8'>
            <p className='text-[40px] font-semibold'>Backend-разработка</p>
            <ul className='flex text-[26px] flex-col'>
              <li>Базы данных</li>
              <li>Сервер</li>
              <li>Запросы</li>
            </ul>
            <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end'>
              <span>Подробнее</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full border-2 mb-10 border-white rounded-[40px] p-10 text-[40px] font-semibold flex flex-col'>
        Разработка UX/UI-дизайна
        <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end'>
          <span>Подробнее</span>
        </Link>
      </div>
      <div className='w-full border-2 border-white rounded-[40px] p-10 text-[40px] font-semibold flex flex-col'>
        Техническая поддержка сайта
        <Link href='/' className='text-[20px] opacity-50 hover:opacity-100 duration-300 self-end'>
          <span>Подробнее</span>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
