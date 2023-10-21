import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import arrow from "../../../../../../assets/imgs/arrow.png";
const Case1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    const arrow = document.getElementById("arr1")
    arrow?.classList.toggle("rotate")
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className='w-full h-[120px] border-b-[3px] flex items-center justify-between px-[10px] max-med:h-[90px] max-xsml:border-b-[1.5px] max-xsml:h-[70px]'>
        <span className='text-[50px] pt-[30px] max-s:text-[40px] max-med:text-[27px] max-xsml:text-[19px] max-ssml:text-[15px]'>Разработка сайтов</span>{" "}
        <Image
        id="arr1"
          onClick={handleVisible}
          className='w-[35px] h-[35px] cursor-pointer max-sm:w-[25px] max-sm:h-[25px] mt-[30px] duration-500'
          src={arrow}
          alt='aaa'
        ></Image>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "400px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{duration: 0.5}}
            className='w-full flex flex-col justify-between items-start  max-xsml:!h-[300px] max-ssml:!h-[240px]'
          >
            <div className='flex flex-row justify-between items-center w-full mt-[25px]'>
              <span className='mt-[10px] ml-[20px] text-[23px] max-xsml:text-[15px] max-ssml:text-[12px]'>
                Онлайн-магазин
                </span>
              <span className='mr-[30px] text-[18px] max-xsml:text-[13px] max-ssml:text-[10px]'>От 14 дней</span>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
              <span className='mt-[10px] ml-[20px] text-[23px] max-xsml:text-[15px] max-ssml:text-[12px]'>
                Корпоративные сайты
              </span>
              <span className='mr-[30px] text-[18px] max-xsml:text-[13px] max-ssml:text-[10px]'>От 20 дней</span>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
              <span className='mt-[10px] ml-[20px] text-[23px] max-xsml:text-[15px] max-ssml:text-[12px]'>
                CRM/CMS системы
              </span>
              <span className='mr-[30px] text-[18px] max-xsml:text-[13px] max-ssml:text-[10px]'>От 14 дней</span>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
              <span className='mt-[10px] ml-[20px] text-[23px] max-xsml:text-[15px] max-ssml:text-[12px]'>
                Landing-page
              </span>
              <span className='mr-[30px] text-[18px] max-xsml:text-[13px] max-ssml:text-[10px]'>От 7 дней</span>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
              <span className='mt-[10px] ml-[20px] text-[23px] max-xsml:text-[15px] max-ssml:text-[12px]'>
                Веб-приложения
              </span>
              <span className='mr-[30px] text-[18px] max-xsml:text-[13px] max-ssml:text-[10px]'>От 14 дней</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Case1;
