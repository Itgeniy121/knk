import Image from "next/image";
import ItNavigator from "../../../../../../assets/imgs/ItNav.png";
import StackPanel from "@/components/layout/StackPanel/StackPanel";
import cl from "../Portfolio.module.scss";
const Case1 = () => {
  return (
    <div className='flex flex-row justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Image src={ItNavigator} alt='bestOffer' className='w-full' />
        <div className="max-ipad:hidden mt-[25px]">
        <span className='mt-[20px] mb-[20px] text-[25px] font-[700]'>
        Инструменты, которые мы использовали:
        </span>
        <StackPanel/>
        </div>
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px]'>
        <div className='flex flex-col'>
          <span className={cl.projectTitle}>BestOffer Store</span>
          <span className='mt-[20px] max-sml:text-[13px] max-sml:mt-[5px]'>
            ИЛЮХА тут надо сделать что-то типа описания накидать ИЛЮХА тут надо
            сделать что-то типа описания накидать ИЛЮХА тут надо сделать что-то
            типа описания накидать ИЛЮХА тут надо сделать что-то типа описания
            накидать ИЛЮХА тут надо сделать что-то типа описания накидать ИЛЮХА
            тут надо сделать что-то типа описания накидать ИЛЮХА тут надо
            сделать что-то типа описания накидать
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>Задача</span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Илюха тут напиши какую задачу ввыполняли в ходе проекта
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>Сроки</span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            тут можно сказать как же ахуенно быстро все сделали или не говорить
            похуй
          </span>
          <div className="max-ipad:flex flex-col ipad:hidden">
        <span className='mt-[20px] mb-[20px] text-[25px] font-[700] max-sml:text-[19px]'>
          Стек технологий
        </span>
        <StackPanel/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Case1;
