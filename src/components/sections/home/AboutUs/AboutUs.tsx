import React from 'react';
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <section className='mb-40 container flex sm:flex-row flex-col sm:gap-0 gap-10 '>
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
      <ul className='flex-[50%] flex flex-col items-end justify-center lg:text-[24px] sm:text-[20px] text-[16px]  gap-6'>
        <li className='max-w-[600px]'>- <span className='font-extrabold'>knk web</span> - опытная команда разработчиков, которая специализируется на создании и продвижении сайтов.</li>
        <li className='max-w-[600px]'>- Мы помогаем бизнесу клиентов расти и развиваться.</li>
        <li className='max-w-[600px]'>- В работе используем самые современные инструменты, позволяющие выполнять работу быстро и качественно</li>
        <li className='max-w-[600px]'> - Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>

      </ul>
    </section>
  );
};

export default AboutUs;