import React from "react";
import Image from "next/image";
import ps from "../imgs/photoshop.svg";
import figma from "../imgs/figma.svg";
import xd from "../imgs/xd.svg";
import bs from "../imgs/bs.svg";
const DesignStack = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[630px] max-s:flex-row max-s:justify-start overflow-x-auto max-s:h-[400px] max-s:w-[100%] max-sml:h-[300px]'>
      <div className='flex flex-row justify-between items-center w-full h-1/2 max-s:w-[1400px]'>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={figma} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Figma</span>
          <span className='techDescription w-full mt-[20px]'>
            Figma — онлайн-сервис для разработки интерфейсов и прототипирования
            с возможностью организации совместной работы в режиме реального
            времени.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={ps} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Photoshop</span>
          <span className='techDescription w-full mt-[20px]'>
            Adobe Photoshop — многофункциональный растровый графический редактор
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={xd} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Adobe XD</span>
          <span className='techDescription w-full mt-[20px]'>
            Adobe Experience Design — программа для разработки интерфейсов от
            Adobe Systems.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={bs} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>BootStrap</span>
          <span className='techDescription w-full mt-[20px]'>
            Bootstrap — это популярная бесплатная платформа для HTML, CSS и
            JavaScript, используемая для разработки динамичных веб-сайтов
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesignStack;
