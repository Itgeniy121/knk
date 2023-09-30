import React from "react";
import StackPanel from "@/components/layout/StackPanel/StackPanel";
import anescor from "../../../../../../assets/imgs/anescor.png";
import Image from "next/image";
import cl from "../Portfolio.module.scss";
const Case3 = () => {
  return (
    <div className='flex flex-row justify-between items-start h-[620px]'>
      <div className='flex flex-col w-[55%] h-full'>
        <Image src={anescor} alt='bestOffer' className='w-full' />
        <span className='mt-[20px] mb-[20px] text-[25px] font-[700]'>
          Стек технологий
        </span>
        <StackPanel />
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px]'>
        <div className='flex flex-col'>
          <span className={cl.projectTitle}>Анескор</span>
          <span className='mt-[20px]'>
            ИЛЮХА тут надо сделать что-то типа описания накидать ИЛЮХА тут надо
            сделать что-то типа описания накидать ИЛЮХА тут надо сделать что-то
            типа описания накидать ИЛЮХА тут надо сделать что-то типа описания
            накидать ИЛЮХА тут надо сделать что-то типа описания накидать ИЛЮХА
            тут надо сделать что-то типа описания накидать ИЛЮХА тут надо
            сделать что-то типа описания накидать
          </span>
          <span className='mt-[20px] text-[30px] font-[700]'>Задача</span>
          <span className='mt-[10px]'>
            Илюха тут напиши какую задачу ввыполняли в ходе проекта
          </span>
          <span className='mt-[20px] text-[30px] font-[700]'>Сроки</span>
          <span className='mt-[10px]'>
            тут можно сказать как же ахуенно быстро все сделали или не говорить
            похуй
          </span>
        </div>
      </div>
    </div>
  );
};

export default Case3;